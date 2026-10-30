import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleAdminTickets } from '../src/server/account-api';

interface AdminTicketApiRequest extends IncomingMessage {
  body?: unknown;
  method?: string;
}

function headerValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(req: AdminTicketApiRequest, res: ServerResponse) {
  const result = await handleAdminTickets({
    method: req.method,
    origin: headerValue(req.headers.origin),
    host: headerValue(req.headers.host),
    authorization: headerValue(req.headers.authorization),
    body: req.body
  });

  res.statusCode = result.status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(result.body));
}
