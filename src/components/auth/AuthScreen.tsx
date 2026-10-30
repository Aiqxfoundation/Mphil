import React, { useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { ArrowRight, Eye, EyeOff, GraduationCap, KeyRound, Phone, UserRound } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  isValidPhoneNumber,
  isValidSignupPassword,
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

const inputClassName =
  'w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500';
const labelClassName = 'text-sm font-semibold text-slate-800 dark:text-slate-200';
const iconClassName = 'pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400';

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthenticated }) => {
  const [mode, setMode] = useState<AuthMode>('sign-up');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSignUp = mode === 'sign-up';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const normalizedUsername = normalizeUsername(username);
    if (!isValidUsername(normalizedUsername)) {
      setErrorMessage('Username must be 3–24 characters: letters, numbers, or underscores.');
      return;
    }

    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    if (isSignUp && !isValidPhoneNumber(normalizedPhoneNumber)) {
      setErrorMessage('Enter a valid phone number (7–15 digits).');
      return;
    }

    if (isSignUp && !isValidSignupPassword(password)) {
      setErrorMessage(`Password must be ${PASSWORD_MIN_LENGTH} to ${PASSWORD_MAX_LENGTH} characters.`);
      return;
    }

    if (!isSignUp && password.length === 0) {
      setErrorMessage('Enter your password.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (isSignUp) {
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
    setPassword('');
    setShowPassword(false);
    setPhoneNumber('');
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-800 text-white shadow-lg shadow-teal-900/15">
            <GraduationCap aria-hidden="true" className="size-6" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Noor Academy</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">MPhil Chemistry Study Hub</p>
          </div>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="mb-5">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {isSignUp
                ? 'Choose a username and password to save your lessons, notes, and quiz progress.'
                : 'Sign in to continue your saved lessons, notes, and quiz history.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="auth-username" className={labelClassName}>Username</label>
              <div className="relative">
                <UserRound aria-hidden="true" className={iconClassName} />
                <input
                  id="auth-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  maxLength={24}
                  required
                  aria-invalid={Boolean(errorMessage)}
                  className={inputClassName}
                  placeholder="e.g. Ayesha_Khan"
                />
              </div>
            </div>

            {isSignUp && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor="auth-phone" className={labelClassName}>Phone number</label>
                <div className="relative">
                  <Phone aria-hidden="true" className={iconClassName} />
                  <input
                    id="auth-phone"
                    name="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    maxLength={20}
                    required
                    aria-invalid={Boolean(errorMessage)}
                    className={inputClassName}
                    placeholder="e.g. 03001234567"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="auth-password" className={labelClassName}>Password</label>
              <div className="relative">
                <KeyRound aria-hidden="true" className={iconClassName} />
                <input
                  id="auth-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  maxLength={isSignUp ? PASSWORD_MAX_LENGTH : 72}
                  required
                  aria-invalid={Boolean(errorMessage)}
                  className={`${inputClassName} pr-11`}
                  placeholder={isSignUp ? `${PASSWORD_MIN_LENGTH}–${PASSWORD_MAX_LENGTH} characters` : 'Enter your password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  className="absolute right-1.5 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff aria-hidden="true" className="size-4" /> : <Eye aria-hidden="true" className="size-4" />}
                </button>
              </div>
            </div>

            {errorMessage && (
              <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <span>{isSubmitting ? 'Please wait…' : isSignUp ? 'Create account' : 'Sign in'}</span>
              {!isSubmitting && <ArrowRight aria-hidden="true" className="size-4" />}
            </button>
          </form>

          <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              {isSignUp ? 'Already have an account?' : 'New to Noor Academy?'}{' '}
              <button
                type="button"
                onClick={() => switchMode(isSignUp ? 'sign-in' : 'sign-up')}
                className="font-semibold text-teal-800 underline-offset-4 hover:underline dark:text-teal-400"
              >
                {isSignUp ? 'Sign in' : 'Create an account'}
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
