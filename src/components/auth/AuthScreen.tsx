import React, { useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { ArrowRight, FlaskConical, KeyRound, Phone, UserRound } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import {
  isValidPhoneNumber,
  isValidUsername,
  legacyUsernameToAuthEmail,
  normalizePhoneNumber,
  normalizeUsername,
  usernameToAuthEmail
} from '../../lib/username-auth';

type AuthMode = 'sign-in' | 'sign-up';

interface AuthScreenProps {
  onAuthenticated: (session: Session) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthenticated }) => {
  const [mode, setMode] = useState<AuthMode>('sign-up');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const normalizedUsername = normalizeUsername(username);
    if (!isValidUsername(normalizedUsername)) {
      setErrorMessage('Use 3–24 characters: letters, numbers, or underscores.');
      return;
    }

    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    if (mode === 'sign-up' && !isValidPhoneNumber(normalizedPhoneNumber)) {
      setErrorMessage('Enter a phone number with 7–15 digits.');
      return;
    }

    if (password.length < 8 || password.length > 72) {
      setErrorMessage('Password must be 8–72 characters.');
      return;
    }

    if (mode === 'sign-up' && password !== confirmPassword) {
      setErrorMessage('The passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === 'sign-up') {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: normalizedUsername, password, phoneNumber: normalizedPhoneNumber })
        });
        const result = (await response.json().catch(() => null)) as { message?: string } | null;

        if (!response.ok) {
          throw new Error(result?.message || 'Unable to create your account. Try again.');
        }
      }

      let authResponse = await supabase.auth.signInWithPassword({
        email: usernameToAuthEmail(normalizedUsername, import.meta.env.NEXT_PUBLIC_SUPABASE_URL),
        password
      });

      if (authResponse.error) {
        authResponse = await supabase.auth.signInWithPassword({
          email: legacyUsernameToAuthEmail(normalizedUsername),
          password
        });
      }

      const { data, error } = authResponse;
      if (error?.message.toLowerCase().includes('banned')) {
        throw new Error('This account has been banned by an administrator.');
      }

      if (error || !data.session) {
        throw new Error('Username or password is incorrect.');
      }

      onAuthenticated(data.session);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to continue. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setErrorMessage('');
    setConfirmPassword('');
    setPhoneNumber('');
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-800 text-white shadow-lg shadow-teal-900/15">
            <FlaskConical aria-hidden="true" className="size-6" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wide text-slate-900 dark:text-white">MPhil Chemistry</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Complete Study Hub</p>
          </div>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
              {mode === 'sign-in' ? 'Your study space' : 'Start learning'}
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              {mode === 'sign-in' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {mode === 'sign-in'
                ? 'Sign in to continue your saved lessons, notes, and quiz history.'
                : 'Create a private study profile with your username and phone number to save progress across devices.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="auth-username" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Username
              </label>
              <div className="relative">
                <UserRound aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="auth-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  minLength={3}
                  maxLength={24}
                  pattern="[A-Za-z0-9_]{3,24}"
                  required
                  aria-invalid={Boolean(errorMessage)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="e.g. chem_scholar"
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">3–24 letters, numbers, or underscores.</p>
            </div>

            {mode === 'sign-up' && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="auth-phone" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Phone number
                </label>
                <div className="relative">
                  <Phone aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="auth-phone"
                    name="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    maxLength={24}
                    required
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby="auth-phone-help"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="Phone number with country code"
                  />
                </div>
                <p id="auth-phone-help" className="text-xs text-slate-500 dark:text-slate-400">
                  Stored unverified. No OTP is sent.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="auth-password" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Password
              </label>
              <div className="relative">
                <KeyRound aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="auth-password"
                  name="password"
                  type="password"
                  autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  minLength={8}
                  maxLength={72}
                  required
                  aria-invalid={Boolean(errorMessage)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            {mode === 'sign-up' && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="auth-confirm-password" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Confirm password
                </label>
                <input
                  id="auth-confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  minLength={8}
                  maxLength={72}
                  required
                  aria-invalid={Boolean(errorMessage)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Re-enter your password"
                />
              </div>
            )}

            {errorMessage && (
              <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <span>{isSubmitting ? 'Please wait…' : mode === 'sign-in' ? 'Sign in' : 'Create account'}</span>
              {!isSubmitting && <ArrowRight aria-hidden="true" className="size-4" />}
            </button>
          </form>

          <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              {mode === 'sign-in' ? 'New to the study hub?' : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => switchMode(mode === 'sign-in' ? 'sign-up' : 'sign-in')}
                className="font-semibold text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
              >
                {mode === 'sign-in' ? 'Create an account' : 'Sign in'}
              </button>
            </p>
          </div>

          <p className="mt-4 border-t border-slate-100 pt-4 text-center text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
            No email address is collected. Phone numbers are stored unverified and no OTP is sent; password recovery is unavailable.
          </p>
        </section>
      </div>
    </main>
  );
};
