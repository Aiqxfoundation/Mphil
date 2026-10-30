import { createClient } from '@supabase/supabase-js';
import {
  isValidPhoneNumber,
  isValidSignupPassword,
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

export async function handleUsernameSignup(request: SignupRequest): Promise<SignupResult> {
  if (request.method !== 'POST') {
    return { status: 405, body: { message: 'Method not allowed.' } };
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
      body: { message: 'Use 3–24 characters: letters, numbers, or underscores.' }
    };
  }

  if (!isValidSignupPassword(password)) {
    return { status: 400, body: { message: 'Password must be 6 to 8 characters.' } };
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    return { status: 400, body: { message: 'Enter a valid phone number (7–15 digits).' } };
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
      if (error?.code === 'email_exists' || error?.code === 'user_already_exists') {
        return { status: 409, body: { message: 'That username is already taken. Choose another one.' } };
      }
      console.error('[signup] createUser failed:', error?.code, error?.message);
      return { status: 500, body: { message: 'Could not create your account. Please try again.' } };
    }

    const { error: profileError } = await supabaseAdmin.rpc('register_account_profile', {
      p_user_id: data.user.id,
      p_username: username,
      p_phone_number: phoneNumber
    });

    if (profileError) {
      console.error('[signup] register_account_profile failed:', profileError.code, profileError.message);
      await supabaseAdmin.auth.admin.deleteUser(data.user.id);
      const isTaken = profileError.code === '23505';
      return {
        status: isTaken ? 409 : 500,
        body: {
          message: isTaken
            ? 'That username or phone number is already in use.'
            : 'Could not save your profile. Please try again.'
        }
      };
    }

    return { status: 201, body: { message: 'Account created.' } };
  } catch {
    return { status: 503, body: { message: 'Account creation is temporarily unavailable.' } };
  }
}
