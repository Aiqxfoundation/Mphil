create table if not exists public.account_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique,
  phone_number text unique,
  role text not null default 'user' check (role in ('admin', 'user')),
  is_premium boolean not null default false,
  is_banned boolean not null default false,
  banned_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.study_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  category text not null check (category in ('feedback', 'review', 'lesson_request', 'bug', 'other')),
  subject text not null check (char_length(subject) between 3 and 120),
  message text not null check (char_length(message) between 5 and 2000),
  status text not null default 'open' check (status in ('open', 'in_progress', 'resolved', 'closed')),
  admin_reply text,
  replied_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists support_tickets_user_created_idx on public.support_tickets (user_id, created_at desc);

alter table public.account_profiles enable row level security;
alter table public.study_data enable row level security;
alter table public.support_tickets enable row level security;

create policy "account_profiles_select_own" on public.account_profiles
  for select to authenticated using ((select auth.uid()) = user_id);

create policy "study_data_select_own" on public.study_data
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "study_data_insert_own" on public.study_data
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "study_data_update_own" on public.study_data
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "support_tickets_select_own" on public.support_tickets
  for select to authenticated using ((select auth.uid()) = user_id);

create or replace function public.register_account_profile(
  p_user_id uuid,
  p_username text,
  p_phone_number text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_role text := 'user';
begin
  perform pg_advisory_xact_lock(7001);
  if not exists (select 1 from public.account_profiles) then
    v_role := 'admin';
  end if;
  insert into public.account_profiles (user_id, username, phone_number, role)
  values (p_user_id, p_username, p_phone_number, v_role);
end;
$$;

create unique index if not exists account_profiles_single_admin_idx
  on public.account_profiles ((role)) where role = 'admin';

create or replace function public.admin_update_account_profile(
  p_user_id uuid,
  p_phone_number text,
  p_is_premium boolean,
  p_profile_patch jsonb
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public.account_profiles
  set phone_number = p_phone_number,
      is_premium = p_is_premium,
      updated_at = now()
  where user_id = p_user_id;

  if not found then
    raise exception 'account not found' using errcode = 'P0002';
  end if;

  insert into public.study_data (user_id, data)
  values (p_user_id, jsonb_build_object('profile', p_profile_patch))
  on conflict (user_id) do update
  set data = jsonb_set(
        public.study_data.data,
        '{profile}',
        coalesce(public.study_data.data -> 'profile', '{}'::jsonb) || p_profile_patch
      ),
      updated_at = now();
end;
$$;

revoke execute on function public.register_account_profile(uuid, text, text) from public, anon, authenticated;
revoke execute on function public.admin_update_account_profile(uuid, text, boolean, jsonb) from public, anon, authenticated;
grant execute on function public.register_account_profile(uuid, text, text) to service_role;
grant execute on function public.admin_update_account_profile(uuid, text, boolean, jsonb) to service_role;
