import React, { useEffect } from 'react';
import useSWR from 'swr';
import type { Session } from '@supabase/supabase-js';
import { StudyProvider } from '../../context/StudyContext';
import { supabase } from '../../lib/supabase';
import { AuthScreen } from './AuthScreen';

interface AuthGateProps {
  children: React.ReactNode;
}

async function getCurrentSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export const AuthGate: React.FC<AuthGateProps> = ({ children }) => {
  const { data: session, error, isLoading, mutate } = useSWR<Session | null>(
    'supabase-session',
    getCurrentSession,
    { revalidateOnFocus: true }
  );

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void mutate(nextSession, { revalidate: false });
    });

    return () => data.subscription.unsubscribe();
  }, [mutate]);

  useEffect(() => {
    try {
      document.documentElement.classList.toggle(
        'dark',
        window.localStorage.getItem('mphil_chem_theme') === 'dark'
      );
    } catch {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-300">
        <p role="status">Checking your study account…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <section className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
          <h1 className="font-semibold">Unable to check your account</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Check your connection and try again.</p>
          <button
            type="button"
            onClick={() => void mutate()}
            className="mt-5 rounded-lg bg-teal-800 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-900 dark:bg-teal-700 dark:hover:bg-teal-600"
          >
            Try again
          </button>
        </section>
      </main>
    );
  }

  if (!session) {
    return <AuthScreen onAuthenticated={(nextSession) => void mutate(nextSession, { revalidate: false })} />;
  }

  return (
    <StudyProvider key={session.user.id} user={session.user}>
      {children}
    </StudyProvider>
  );
};
