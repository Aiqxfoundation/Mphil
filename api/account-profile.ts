import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleAccountProfile } from '../src/server/account-api';

interface AccountApiRequest extends IncomingMessage {
  method?: string;
}

function headerValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(req: AccountApiRequest, res: ServerResponse) {
  const result = await handleAccountProfile({
    method: req.method,
    origin: headerValue(req.headers.origin),
    host: headerValue(req.headers.host),
    authorization: headerValue(req.headers.authorization)
  });

  res.statusCode = result.status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(result.body));
}
