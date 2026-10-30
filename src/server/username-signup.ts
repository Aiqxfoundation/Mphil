import { createClient } from '@supabase/supabase-js';
import {
  isValidPhoneNumber,
  isValidUsername,
  normalizePhoneNumber,
  normalizeUsername,
  usernameToAuthEmail
} from '../lib/username-auth.ts';

interface SignupRequest {
  method?: string;
  origin?: string;
  host?: string | string[];
  remoteAddress?: string | null;
  body: unknown;
}

interface SignupResult {
  status: number;
  body: { message: string };
}

interface SignupBucket {
  count: number;
  resetsAt: number;
}

const signupBuckets = new Map<string, SignupBucket>();
const signupWindowMs = 15 * 60 * 1000;
const signupLimit = 5;

function isSameOrigin(origin?: string, host?: string | string[]): boolean {
  const forwardedHost = Array.isArray(host) ? host[0] : host;
  const expectedHost = forwardedHost?.split(',')[0]?.trim();

  if (!origin || !expectedHost) return false;

  try {
    const originUrl = new URL(origin);
    const expectedOrigin = new URL(`${originUrl.protocol}//${expectedHost}`);
    return originUrl.origin.toLowerCase() === expectedOrigin.origin.toLowerCase();
  } catch {
    return false;
  }
}

function canAttemptSignup(address: string, now: number): boolean {
  const key = address || 'unknown';
  const bucket = signupBuckets.get(key);

  if (!bucket || bucket.resetsAt <= now) {
    signupBuckets.set(key, { count: 1, resetsAt: now + signupWindowMs });
    return true;
  }

  if (bucket.count >= signupLimit) return false;

  bucket.count += 1;
  return true;
}

export async function handleUsernameSignup(request: SignupRequest): Promise<SignupResult> {
  if (request.method !== 'POST') {
    return { status: 405, body: { message: 'Method not allowed.' } };
  }

  if (!isSameOrigin(request.origin, request.host)) {
    return { status: 403, body: { message: 'This request could not be verified.' } };
  }

  if (!canAttemptSignup(request.remoteAddress ?? 'unknown', Date.now())) {
    return { status: 429, body: { message: 'Too many signup attempts. Try again later.' } };
  }

  if (!request.body || typeof request.body !== 'object' || Array.isArray(request.body)) {
    return { status: 400, body: { message: 'Enter a valid username and password.' } };
  }

  const payload = request.body as Record<string, unknown>;
  const username = typeof payload.username === 'string' ? normalizeUsername(payload.username) : '';
  const password = typeof payload.password === 'string' ? payload.password : '';
  const phoneNumber = typeof payload.phoneNumber === 'string' ? normalizePhoneNumber(payload.phoneNumber) : '';

  if (!isValidUsername(username)) {
    return {
      status: 400,
      body: { message: 'Use 3–24 characters: lowercase letters, numbers, or underscores.' }
    };
  }

  if (password.length < 8 || password.length > 72) {
    return { status: 400, body: { message: 'Password must be 8–72 characters.' } };
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    return { status: 400, body: { message: 'Enter a phone number with 7–15 digits.' } };
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !secretKey) {
    return { status: 503, body: { message: 'Account creation is temporarily unavailable.' } };
  }

  try {
    const supabaseAdmin = createClient(supabaseUrl, secretKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: usernameToAuthEmail(username, supabaseUrl),
      password,
      email_confirm: true,
      user_metadata: { username, phoneNumber }
    });

    if (error || !data.user) {
      return {
        status: 409,
        body: { message: 'Unable to create an account with those details. Choose another username or sign in.' }
      };
    }

    const { error: profileError } = await supabaseAdmin.rpc('register_account_profile', {
      p_user_id: data.user.id,
      p_username: username,
      p_phone_number: phoneNumber
    });

    if (profileError) {
      await supabaseAdmin.auth.admin.deleteUser(data.user.id);
      return { status: 503, body: { message: 'Account creation is temporarily unavailable.' } };
    }

    return { status: 201, body: { message: 'Account created.' } };
  } catch {
    return { status: 503, body: { message: 'Account creation is temporarily unavailable.' } };
  }
}
