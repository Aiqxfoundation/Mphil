const USERNAME_PATTERN = /^[a-z0-9_]{3,24}$/;
const INTERNAL_AUTH_DOMAIN = 'accounts.mphil-study.invalid';

export function normalizeUsername(value: string): string {
  return value.trim().toLowerCase();
}

export function isValidUsername(value: string): boolean {
  return USERNAME_PATTERN.test(value);
}

export function usernameToAuthEmail(username: string): string {
  return `${normalizeUsername(username)}@${INTERNAL_AUTH_DOMAIN}`;
}
