const USERNAME_PATTERN = /^[a-z0-9_]{3,24}$/;
const PHONE_NUMBER_PATTERN = /^\+?[0-9]{7,15}$/;
const PHONE_INPUT_PATTERN = /^\+?[0-9\s().-]+$/;
const LEGACY_AUTH_DOMAIN = 'accounts.mphil-study.invalid';

export function normalizeUsername(value: string): string {
  return value.trim().toLowerCase();
}

export function isValidUsername(value: string): boolean {
  return USERNAME_PATTERN.test(value);
}

export function normalizePhoneNumber(value: string): string {
  const trimmed = value.trim();
  if (!PHONE_INPUT_PATTERN.test(trimmed)) return '';

  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return '';

  return `${trimmed.startsWith('+') ? '+' : ''}${digits}`;
}

export function isValidPhoneNumber(value: string): boolean {
  return PHONE_NUMBER_PATTERN.test(value);
}

export function usernameToAuthEmail(username: string, supabaseUrl: string): string {
  const projectDomain = new URL(supabaseUrl).hostname;
  return `${normalizeUsername(username)}@${projectDomain}`;
}

export function legacyUsernameToAuthEmail(username: string): string {
  return `${normalizeUsername(username)}@${LEGACY_AUTH_DOMAIN}`;
}
