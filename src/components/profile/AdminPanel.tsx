import React, { useState } from 'react';
import useSWR from 'swr';
import {
  ArrowLeft,
  Ban,
  Crown,
  Phone,
  RefreshCw,
  Save,
  Search,
  ShieldCheck,
  Users
} from 'lucide-react';
import { useAccount } from '../../context/AccountContext';
import { useStudy } from '../../context/StudyContext';

interface AdminUser {
  userId: string;
  username: string;
  phoneNumber: string | null;
  role: 'admin' | 'user';
  isPremium: boolean;
  createdAt: string;
  isBanned: boolean;
  bannedAt: string | null;
  fullName: string;
  specialization: string;
  rollNumber: string;
  session: string;
}

interface AdminUsersResponse {
  users: AdminUser[];
  total: number;
  hasMore: boolean;
}

interface AdminForm {
  fullName: string;
  phoneNumber: string;
  specialization: string;
  rollNumber: string;
  session: string;
  isPremium: boolean;
}

interface AdminDraft {
  userId: string;
  values: AdminForm;
}

function toAdminForm(user: AdminUser): AdminForm {
  return {
    fullName: user.fullName,
    phoneNumber: user.phoneNumber ?? '',
    specialization: user.specialization,
    rollNumber: user.rollNumber,
    session: user.session,
    isPremium: user.isPremium
  };
}

async function fetchAdminUsers(accessToken: string): Promise<AdminUsersResponse> {
  const response = await fetch('/api/admin-users', {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store'
  });
  const result: unknown = await response.json().catch(() => null);

  if (!response.ok || typeof result !== 'object' || result === null || !('users' in result) || !Array.isArray(result.users)) {
    const message = typeof result === 'object' && result !== null && 'message' in result && typeof result.message === 'string'
      ? result.message
      : 'Unable to load users right now.';
    throw new Error(message);
  }

  return result as AdminUsersResponse;
}

const emptyForm: AdminForm = {
  fullName: '',
  phoneNumber: '',
  specialization: '',
  rollNumber: '',
  session: '',
  isPremium: false
};

export const AdminPanel: React.FC = () => {
  const { session, accountProfile, isAccountLoading, accountError, refreshAccountProfile } = useAccount();
  const { setView } = useStudy();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [draft, setDraft] = useState<AdminDraft | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isBanning, setIsBanning] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [saveError, setSaveError] = useState('');

  const swrKey = accountProfile?.role === 'admin' ? ['admin-users', session.user.id] : null;
  const { data, error, isLoading, mutate } = useSWR<AdminUsersResponse>(
    swrKey,
    () => fetchAdminUsers(session.access_token),
    { revalidateOnFocus: true, shouldRetryOnError: false }
  );

  const users = data?.users ?? [];
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredUsers = users.filter((user) =>
    [user.username, user.fullName, user.phoneNumber ?? '', user.rollNumber]
      .some((value) => value.toLowerCase().includes(normalizedSearch))
  );
  const selectedUser = filteredUsers.find((user) => user.userId === selectedUserId) ?? filteredUsers[0] ?? null;
  const form = selectedUser
    ? draft?.userId === selectedUser.userId ? draft.values : toAdminForm(selectedUser)
    : emptyForm;
  const premiumCount = users.filter((user) => user.isPremium).length;
  const phoneCount = users.filter((user) => Boolean(user.phoneNumber)).length;

  const selectUser = (user: AdminUser) => {
    setSelectedUserId(user.userId);
    setDraft({ userId: user.userId, values: toAdminForm(user) });
    setSaveMessage('');
    setSaveError('');
  };

  const updateField = (field: keyof AdminForm, value: string | boolean) => {
    if (!selectedUser) return;
    const current = draft?.userId === selectedUser.userId ? draft.values : toAdminForm(selectedUser);
    setDraft({
      userId: selectedUser.userId,
      values: { ...current, [field]: value } as AdminForm
    });
    setSaveMessage('');
    setSaveError('');
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedUser) return;

    setIsSaving(true);
    setSaveMessage('');
    setSaveError('');

    try {
      const response = await fetch('/api/admin-users', {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: selectedUser.userId, ...form })
      });
      const result: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const message = typeof result === 'object' && result !== null && 'message' in result && typeof result.message === 'string'
          ? result.message
          : 'Unable to save these profile changes.';
        throw new Error(message);
      }

      await mutate();
      setDraft(null);
      setSaveMessage('Profile changes saved.');
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Unable to save these profile changes.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleBanToggle = async () => {
    if (!selectedUser) return;
    const banning = !selectedUser.isBanned;
    if (banning && !window.confirm(`Ban @${selectedUser.username}? They will be signed out and unable to sign in until unbanned.`)) return;

    setIsBanning(true);
    setSaveMessage('');
    setSaveError('');

    try {
      const response = await fetch('/api/admin-users', {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: banning ? 'ban' : 'unban', userId: selectedUser.userId })
      });
      const result: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const message = typeof result === 'object' && result !== null && 'message' in result && typeof result.message === 'string'
          ? result.message
          : 'Unable to update this account right now.';
        throw new Error(message);
      }

      await mutate();
      setSaveMessage(banning ? `@${selectedUser.username} has been banned.` : `@${selectedUser.username} has been unbanned.`);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Unable to update this account right now.');
    } finally {
      setIsBanning(false);
    }
  };

  if (isAccountLoading) {
    return <p role="status" className="py-12 text-center text-sm text-slate-500">Checking admin access…</p>;
  }

  if (accountError) {
    return (
      <section className="mx-auto max-w-xl rounded-2xl border border-amber-300 bg-amber-50 p-6 text-center dark:border-amber-900 dark:bg-amber-950/30">
        <h1 className="text-lg font-bold text-slate-900 dark:text-white">Unable to check admin access</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{accountError.message}</p>
        <button type="button" onClick={() => void refreshAccountProfile()} className="mt-5 rounded-lg border border-amber-500 px-4 py-2 text-sm font-semibold">Try again</button>
      </section>
    );
  }

  if (accountProfile?.role !== 'admin') {
    return (
      <section className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
        <ShieldCheck aria-hidden="true" className="mx-auto size-8 text-slate-400" />
        <h1 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Admin access required</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">This panel is available only to the first registered account.</p>
        <button type="button" onClick={() => setView('profile')} className="mt-5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700">
          Back to profile
        </button>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-5 pb-10">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={() => setView('profile')}
            aria-label="Back to profile"
            className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700 dark:text-teal-400">
              <ShieldCheck aria-hidden="true" className="size-4" /> Account administration
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">User management</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Only the first registered account can access this panel.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => void mutate()}
          disabled={isLoading}
          className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <RefreshCw aria-hidden="true" className={`size-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Users aria-hidden="true" className="size-4 text-teal-600" /> Registered accounts</div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{data?.total ?? '—'}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Crown aria-hidden="true" className="size-4 text-amber-500" /> Premium flags</div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{premiumCount}</p>
          <p className="mt-1 text-[11px] text-slate-500">Profile flag only; no billing is connected.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Phone aria-hidden="true" className="size-4 text-sky-600" /> Phone numbers saved</div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{phoneCount}</p>
          <p className="mt-1 text-[11px] text-slate-500">Unverified, with no OTP sent.</p>
        </div>
      </div>

      {error && (
        <div role="alert" className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          <span>{error instanceof Error ? error.message : 'Unable to load users right now.'}</span>
          <button type="button" onClick={() => void mutate()} className="font-semibold underline underline-offset-2">Try again</button>
        </div>
      )}

      {data?.hasMore && (
        <p className="text-xs text-slate-500 dark:text-slate-400">Showing the first 250 accounts. Refine search within this list.</p>
      )}

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:p-5" aria-labelledby="admin-directory-heading">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="admin-directory-heading" className="text-base font-bold text-slate-900 dark:text-white">Accounts</h2>
            <span className="text-xs text-slate-500">{filteredUsers.length} shown</span>
          </div>
          <label htmlFor="admin-user-search" className="sr-only">Search accounts</label>
          <div className="relative mt-3">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              id="admin-user-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search username, name, phone, or roll number"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          <div className="mt-3 max-h-[28rem] space-y-2 overflow-y-auto pr-1">
            {isLoading && users.length === 0 ? (
              <p role="status" className="py-8 text-center text-sm text-slate-500">Loading accounts…</p>
            ) : filteredUsers.length === 0 ? (
              <p className="rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-700">
                {users.length === 0 ? 'No accounts found.' : 'No accounts match your search.'}
              </p>
            ) : filteredUsers.map((user) => {
              const isSelected = selectedUser?.userId === user.userId;
              return (
                <button
                  key={user.userId}
                  type="button"
                  onClick={() => selectUser(user)}
                  aria-pressed={isSelected}
                  className={`w-full rounded-xl border p-3 text-left transition-colors ${isSelected
                    ? 'border-teal-600 bg-teal-50/70 dark:border-teal-500 dark:bg-teal-950/30'
                    : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700'
                  }`}
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">{user.fullName || user.username}</span>
                      <span className="mt-0.5 block truncate text-xs text-slate-500 dark:text-slate-400">@{user.username}{user.rollNumber ? ` · ${user.rollNumber}` : ''}</span>
                    </span>
                    <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${user.isBanned
                      ? 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-200'
                      : user.role === 'admin'
                        ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {user.isBanned ? 'Banned' : user.role === 'admin' ? 'Admin' : 'User'}
                    </span>
                  </span>
                  <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{user.phoneNumber || 'No phone number'}</span>
                    {user.isPremium && <span className="font-semibold text-amber-700 dark:text-amber-400">Premium flag</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:p-5" aria-labelledby="admin-profile-heading">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 id="admin-profile-heading" className="text-base font-bold text-slate-900 dark:text-white">Edit profile</h2>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {selectedUser ? `@${selectedUser.username}` : 'Select an account to manage.'}
              </p>
            </div>
            {selectedUser?.role === 'admin' && (
              <span className="rounded-full bg-teal-100 px-2.5 py-1 text-[10px] font-semibold text-teal-800 dark:bg-teal-900/50 dark:text-teal-200">First account</span>
            )}
          </div>

          {selectedUser ? (
            <form onSubmit={handleSave} className="mt-4 space-y-3">
              <div>
                <label htmlFor="admin-full-name" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Full name</label>
                <input id="admin-full-name" value={form.fullName} onChange={(event) => updateField('fullName', event.target.value)} maxLength={120} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </div>
              <div>
                <label htmlFor="admin-phone" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Phone number</label>
                <input id="admin-phone" type="tel" inputMode="tel" value={form.phoneNumber} onChange={(event) => updateField('phoneNumber', event.target.value)} maxLength={24} placeholder="Phone number with country code" aria-describedby="admin-phone-help" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                <p id="admin-phone-help" className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Stored unverified. No OTP is sent.</p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="admin-specialization" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Specialization</label>
                  <input id="admin-specialization" value={form.specialization} onChange={(event) => updateField('specialization', event.target.value)} maxLength={100} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="admin-roll-number" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Roll / registration number</label>
                  <input id="admin-roll-number" value={form.rollNumber} onChange={(event) => updateField('rollNumber', event.target.value)} maxLength={60} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="admin-session" className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Study session</label>
                <input id="admin-session" value={form.session} onChange={(event) => updateField('session', event.target.value)} maxLength={40} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                <input type="checkbox" checked={form.isPremium} onChange={(event) => updateField('isPremium', event.target.checked)} className="mt-0.5 size-4 accent-teal-700" />
                <span>
                  <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200">Premium access flag</span>
                  <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">Reserved for future features; this does not grant paid entitlements.</span>
                </span>
              </label>

              <div className={`rounded-xl border p-3 ${selectedUser.isBanned ? 'border-red-300 bg-red-50 dark:border-red-900 dark:bg-red-950/30' : 'border-slate-200 dark:border-slate-800'}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {selectedUser.isBanned ? 'This account is banned' : 'Account access'}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {selectedUser.role === 'admin'
                        ? 'Admin accounts cannot be banned.'
                        : selectedUser.isBanned
                          ? 'The user cannot sign in until you unban them.'
                          : 'Banning blocks sign-in and ends access to the app.'}
                    </p>
                  </div>
                  {selectedUser.role !== 'admin' && (
                    <button
                      type="button"
                      onClick={() => void handleBanToggle()}
                      disabled={isBanning}
                      className={`inline-flex min-h-10 items-center gap-2 rounded-xl px-3.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${selectedUser.isBanned
                        ? 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus-visible:ring-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'
                        : 'bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-600'
                      }`}
                    >
                      {selectedUser.isBanned ? <ShieldCheck aria-hidden="true" className="size-4" /> : <Ban aria-hidden="true" className="size-4" />}
                      {isBanning ? 'Updating…' : selectedUser.isBanned ? 'Unban user' : 'Ban user'}
                    </button>
                  )}
                </div>
              </div>

              {saveError && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-800 dark:bg-red-950/40 dark:text-red-200">{saveError}</p>}
              {saveMessage && <p role="status" aria-live="polite" className="rounded-lg bg-teal-50 px-3 py-2 text-xs text-teal-800 dark:bg-teal-950/40 dark:text-teal-200">{saveMessage}</p>}

              <button type="submit" disabled={isSaving} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-teal-700 dark:hover:bg-teal-600">
                <Save aria-hidden="true" className="size-4" /> {isSaving ? 'Saving…' : 'Save profile changes'}
              </button>
            </form>
          ) : (
            <p className="mt-6 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-700">
              {isLoading ? 'Loading accounts…' : 'Choose an account from the list to edit its profile.'}
            </p>
          )}
        </section>
      </div>

      <p className="flex items-start gap-2 rounded-xl bg-slate-100 px-4 py-3 text-xs leading-5 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
        <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-slate-500" />
        Phone numbers are saved as unverified contact details. The app does not send verification OTPs or use phone numbers for sign-in.
      </p>
    </div>
  );
};
