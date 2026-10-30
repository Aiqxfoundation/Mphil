import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { isValidPhoneNumber, normalizePhoneNumber } from '../lib/username-auth.ts';

interface AccountApiRequest {
  method?: string;
  origin?: string;
  host?: string;
  authorization?: string;
  body?: unknown;
}

export interface AccountApiResult {
  status: number;
  body: Record<string, unknown>;
}

interface AuthenticatedContext {
  client: SupabaseClient;
  userId: string;
}

type AuthResult =
  | { ok: true; context: AuthenticatedContext }
  | { ok: false; response: AccountApiResult };

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function createSupabaseAdminClient(): SupabaseClient | null {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !secretKey) return null;

  return createClient(supabaseUrl, secretKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function isSameOrigin(origin?: string, host?: string): boolean {
  if (!origin || !host) return false;

  try {
    return new URL(origin).host.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
}

function isOriginAllowed(request: AccountApiRequest, requireOrigin: boolean): boolean {
  if (!request.origin) return !requireOrigin;
  return isSameOrigin(request.origin, request.host);
}

async function authenticate(request: AccountApiRequest): Promise<AuthResult> {
  const accessToken = request.authorization?.match(/^Bearer\s+([^\s]+)$/i)?.[1];
  if (!accessToken) {
    return { ok: false, response: { status: 401, body: { message: 'Sign in to continue.' } } };
  }

  const client = createSupabaseAdminClient();
  if (!client) {
    return { ok: false, response: { status: 503, body: { message: 'Account services are unavailable.' } } };
  }

  try {
    const { data, error } = await client.auth.getUser(accessToken);
    if (error || !data.user) {
      return { ok: false, response: { status: 401, body: { message: 'Your session is invalid. Sign in again.' } } };
    }

    const bannedUntil = data.user.banned_until ? Date.parse(data.user.banned_until) : 0;
    if (bannedUntil > Date.now()) {
      return { ok: false, response: { status: 403, body: { code: 'banned', message: 'This account has been banned by an administrator.' } } };
    }

    return { ok: true, context: { client, userId: data.user.id } };
  } catch {
    return { ok: false, response: { status: 503, body: { message: 'Account services are unavailable.' } } };
  }
}

async function requireAdmin(request: AccountApiRequest): Promise<AuthResult> {
  const auth = await authenticate(request);
  if (!auth.ok) return auth;

  try {
    const { data, error } = await auth.context.client
      .from('account_profiles')
      .select('role')
      .eq('user_id', auth.context.userId)
      .maybeSingle();

    if (error) {
      return { ok: false, response: { status: 503, body: { message: 'Account services are unavailable.' } } };
    }

    if (data?.role !== 'admin') {
      return { ok: false, response: { status: 403, body: { message: 'Admin access is required.' } } };
    }

    return auth;
  } catch {
    return { ok: false, response: { status: 503, body: { message: 'Account services are unavailable.' } } };
  }
}

export async function handleAccountProfile(request: AccountApiRequest): Promise<AccountApiResult> {
  if (request.method !== 'GET') {
    return { status: 405, body: { message: 'Method not allowed.' } };
  }

  if (!isOriginAllowed(request, false)) {
    return { status: 403, body: { message: 'This request could not be verified.' } };
  }

  const auth = await authenticate(request);
  if (!auth.ok) return auth.response;

  try {
    const { data, error } = await auth.context.client
      .from('account_profiles')
      .select('user_id, username, phone_number, role, is_premium, created_at')
      .eq('user_id', auth.context.userId)
      .maybeSingle();

    if (error) {
      return { status: 503, body: { message: 'Unable to load your account profile.' } };
    }

    if (!data) {
      return { status: 404, body: { message: 'Account profile not found.' } };
    }

    return {
      status: 200,
      body: {
        account: {
          userId: data.user_id,
          username: data.username,
          phoneNumber: data.phone_number,
          role: data.role,
          isPremium: data.is_premium,
          createdAt: data.created_at
        }
      }
    };
  } catch {
    return { status: 503, body: { message: 'Unable to load your account profile.' } };
  }
}

async function listAdminUsers(client: SupabaseClient): Promise<AccountApiResult> {
  try {
    const { data: accounts, error, count } = await client
      .from('account_profiles')
      .select('user_id, username, phone_number, role, is_premium, created_at, is_banned, banned_at', { count: 'exact' })
      .order('created_at', { ascending: true })
      .limit(250);

    if (error) {
      return { status: 503, body: { message: 'Unable to load users right now.' } };
    }

    const accountRows = accounts ?? [];
    const userIds = accountRows.map((account) => account.user_id);
    const studyProfiles = new Map<string, Record<string, unknown>>();

    if (userIds.length > 0) {
      const { data: studyRows, error: studyError } = await client
        .from('study_data')
        .select('user_id, data')
        .in('user_id', userIds);

      if (studyError) {
        return { status: 503, body: { message: 'Unable to load user profiles right now.' } };
      }

      for (const row of studyRows ?? []) {
        if (typeof row.user_id === 'string' && isRecord(row.data)) {
          studyProfiles.set(row.user_id, row.data);
        }
      }
    }

    const users = accountRows.map((account) => {
      const studyData = studyProfiles.get(account.user_id);
      const profile = studyData && isRecord(studyData.profile) ? studyData.profile : {};

      return {
        userId: account.user_id,
        username: account.username,
        phoneNumber: account.phone_number,
        role: account.role,
        isPremium: account.is_premium,
        createdAt: account.created_at,
        isBanned: account.is_banned === true,
        bannedAt: typeof account.banned_at === 'string' ? account.banned_at : null,
        fullName: stringValue(profile.fullName),
        specialization: stringValue(profile.specialization),
        rollNumber: stringValue(profile.rollNumber),
        session: stringValue(profile.session)
      };
    });

    const total = count ?? users.length;
    return { status: 200, body: { users, total, hasMore: total > users.length } };
  } catch {
    return { status: 503, body: { message: 'Unable to load users right now.' } };
  }
}

function readProfileText(body: Record<string, unknown>, key: string, maxLength: number): string | null {
  const value = body[key];
  if (typeof value !== 'string' || value.length > maxLength) return null;
  return value.trim();
}

async function updateAdminUser(
  client: SupabaseClient,
  bodyValue: unknown
): Promise<AccountApiResult> {
  if (!isRecord(bodyValue)) {
    return { status: 400, body: { message: 'Enter valid profile details.' } };
  }

  const body = bodyValue;
  const userId = typeof body.userId === 'string' ? body.userId : '';
  const phoneInput = typeof body.phoneNumber === 'string' ? body.phoneNumber.trim() : null;
  const isPremium = body.isPremium;
  const fullName = readProfileText(body, 'fullName', 120);
  const specialization = readProfileText(body, 'specialization', 100);
  const rollNumber = readProfileText(body, 'rollNumber', 60);
  const session = readProfileText(body, 'session', 40);

  if (
    !UUID_PATTERN.test(userId) ||
    phoneInput === null ||
    typeof isPremium !== 'boolean' ||
    fullName === null ||
    specialization === null ||
    rollNumber === null ||
    session === null
  ) {
    return { status: 400, body: { message: 'Enter valid profile details.' } };
  }

  const phoneNumber = phoneInput.length > 0 ? normalizePhoneNumber(phoneInput) : null;
  if (phoneInput.length > 0 && !isValidPhoneNumber(phoneNumber ?? '')) {
    return { status: 400, body: { message: 'Enter a phone number with 7–15 digits.' } };
  }

  try {
    const { error } = await client.rpc('admin_update_account_profile', {
      p_user_id: userId,
      p_phone_number: phoneNumber,
      p_is_premium: isPremium,
      p_profile_patch: { fullName, specialization, rollNumber, session }
    });

    if (error) {
      return { status: 503, body: { message: 'Unable to save these profile changes.' } };
    }

    return { status: 200, body: { success: true } };
  } catch {
    return { status: 503, body: { message: 'Unable to save these profile changes.' } };
  }
}

const BAN_DURATION = '876000h';

async function setUserBan(
  client: SupabaseClient,
  adminUserId: string,
  bodyValue: unknown,
  ban: boolean
): Promise<AccountApiResult> {
  const userId = isRecord(bodyValue) && typeof bodyValue.userId === 'string' ? bodyValue.userId : '';
  if (!UUID_PATTERN.test(userId)) {
    return { status: 400, body: { message: 'Choose a valid account.' } };
  }

  if (ban && userId === adminUserId) {
    return { status: 400, body: { message: 'You cannot ban your own account.' } };
  }

  try {
    const { data: target, error: targetError } = await client
      .from('account_profiles')
      .select('role')
      .eq('user_id', userId)
      .maybeSingle();

    if (targetError) {
      return { status: 503, body: { message: 'Unable to update this account right now.' } };
    }

    if (!target) {
      return { status: 404, body: { message: 'Account not found.' } };
    }

    if (ban && target.role === 'admin') {
      return { status: 400, body: { message: 'Admin accounts cannot be banned.' } };
    }

    const { error: authError } = await client.auth.admin.updateUserById(userId, {
      ban_duration: ban ? BAN_DURATION : 'none'
    });

    if (authError) {
      return { status: 503, body: { message: 'Unable to update this account right now.' } };
    }

    const { error: profileError } = await client
      .from('account_profiles')
      .update({ is_banned: ban, banned_at: ban ? new Date().toISOString() : null, updated_at: new Date().toISOString() })
      .eq('user_id', userId);

    if (profileError) {
      return { status: 503, body: { message: 'Unable to update this account right now.' } };
    }

    return { status: 200, body: { success: true } };
  } catch {
    return { status: 503, body: { message: 'Unable to update this account right now.' } };
  }
}

export async function handleAdminUsers(request: AccountApiRequest): Promise<AccountApiResult> {
  const method = request.method ?? 'GET';
  if (method !== 'GET' && method !== 'PATCH') {
    return { status: 405, body: { message: 'Method not allowed.' } };
  }

  if (!isOriginAllowed(request, method === 'PATCH')) {
    return { status: 403, body: { message: 'This request could not be verified.' } };
  }

  const auth = await requireAdmin(request);
  if (!auth.ok) return auth.response;

  if (method === 'GET') return listAdminUsers(auth.context.client);
  const action = isRecord(request.body) ? request.body.action : undefined;
  if (action === 'ban' || action === 'unban') {
    return setUserBan(auth.context.client, auth.context.userId, request.body, action === 'ban');
  }

  return updateAdminUser(auth.context.client, request.body);
}
