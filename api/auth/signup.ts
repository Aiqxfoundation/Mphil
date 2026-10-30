import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleUsernameSignup } from '../../src/server/username-signup';

interface SignupApiRequest extends IncomingMessage {
  body?: unknown;
  method?: string;
}

function headerValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(req: SignupApiRequest, res: ServerResponse) {
  const forwardedFor = headerValue(req.headers['x-forwarded-for']);
  const result = await handleUsernameSignup({
    method: req.method,
    origin: headerValue(req.headers.origin),
    host: headerValue(req.headers['x-forwarded-host']) || headerValue(req.headers.host),
    remoteAddress: forwardedFor?.split(',')[0]?.trim() || req.socket.remoteAddress,
    body: req.body
  });

  res.statusCode = result.status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(result.body));
}
