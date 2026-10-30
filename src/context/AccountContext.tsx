import React, { createContext, useCallback, useContext } from 'react';
import type { Session } from '@supabase/supabase-js';
import useSWR from 'swr';
import { supabase } from '../lib/supabase';

export type AccountRole = 'admin' | 'user';

export interface AccountProfile {
  userId: string;
  username: string;
  phoneNumber: string | null;
  role: AccountRole;
  isPremium: boolean;
  createdAt: string;
}

interface AccountContextValue {
  session: Session;
  accountProfile: AccountProfile | null;
  isAccountLoading: boolean;
  accountError?: Error;
  refreshAccountProfile: () => Promise<AccountProfile | undefined>;
}

const AccountContext = createContext<AccountContextValue | undefined>(undefined);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

async function fetchAccountProfile(accessToken: string): Promise<AccountProfile> {
  const response = await fetch('/api/account-profile', {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store'
  });
  const result: unknown = await response.json().catch(() => null);

  if (response.status === 403 && isRecord(result) && result.code === 'banned') {
    await supabase.auth.signOut();
    throw new Error('This account has been banned by an administrator.');
  }

  if (!response.ok || !isRecord(result) || !isRecord(result.account)) {
    const message = isRecord(result) && typeof result.message === 'string'
      ? result.message
      : 'Unable to load your account profile.';
    throw new Error(message);
  }

  const account = result.account;
  if (
    typeof account.userId !== 'string' ||
    typeof account.username !== 'string' ||
    (account.role !== 'admin' && account.role !== 'user') ||
    typeof account.isPremium !== 'boolean' ||
    typeof account.createdAt !== 'string' ||
    (account.phoneNumber !== null && typeof account.phoneNumber !== 'string')
  ) {
    throw new Error('The account profile response was invalid.');
  }

  return {
    userId: account.userId as string,
    username: account.username as string,
    phoneNumber: account.phoneNumber as string | null,
    role: account.role as AccountRole,
    isPremium: account.isPremium as boolean,
    createdAt: account.createdAt as string
  };
}

export const AccountProvider: React.FC<{ session: Session; children: React.ReactNode }> = ({ session, children }) => {
  const { data, error, isLoading, mutate } = useSWR<AccountProfile>(
    ['account-profile', session.user.id],
    () => fetchAccountProfile(session.access_token),
    { revalidateOnFocus: true, shouldRetryOnError: false }
  );

  const refreshAccountProfile = useCallback(() => mutate(), [mutate]);

  return (
    <AccountContext.Provider
      value={{
        session,
        accountProfile: data ?? null,
        isAccountLoading: isLoading,
        accountError: error instanceof Error ? error : undefined,
        refreshAccountProfile
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export function useAccount(): AccountContextValue {
  const context = useContext(AccountContext);
  if (!context) throw new Error('useAccount must be used within an AccountProvider.');
  return context;
}
