import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { handleUsernameSignup } from './src/server/username-signup.ts';
import { handleAccountProfile, handleAdminUsers } from './src/server/account-api.ts';

const localAuthApi: Plugin = {
  name: 'local-auth-api',
  configureServer(server) {
    server.middlewares.use('/api/auth/signup', (request, response, next) => {
      if (request.method !== 'POST') {
        void handleUsernameSignup({
          method: request.method,
          origin: request.headers.origin,
          host: request.headers['x-forwarded-host'] ?? request.headers.host,
          remoteAddress: request.socket.remoteAddress,
          body: undefined
        }).then((result) => {
          response.statusCode = result.status;
          response.setHeader('content-type', 'application/json; charset=utf-8');
          response.setHeader('cache-control', 'no-store');
          response.end(JSON.stringify(result.body));
        });
        return;
      }

      let requestBody = '';
      let bodySize = 0;
      let isTooLarge = false;
      request.setEncoding('utf8');
      request.on('data', (chunk: string) => {
        const chunkSize = Buffer.byteLength(chunk);
        bodySize += chunkSize;
        if (bodySize > 10 * 1024) {
          isTooLarge = true;
          return;
        }
        requestBody += chunk;
      });
      request.on('end', () => {
        if (isTooLarge) {
          response.statusCode = 413;
          response.setHeader('content-type', 'application/json; charset=utf-8');
          response.end(JSON.stringify({ message: 'Request is too large.' }));
          return;
        }

        let body: unknown;
        try {
          body = JSON.parse(requestBody);
        } catch {
          body = undefined;
        }

        void handleUsernameSignup({
          method: request.method,
          origin: request.headers.origin,
          host: request.headers['x-forwarded-host'] ?? request.headers.host,
          remoteAddress: request.socket.remoteAddress,
          body
        }).then((result) => {
          response.statusCode = result.status;
          response.setHeader('content-type', 'application/json; charset=utf-8');
          response.setHeader('cache-control', 'no-store');
          response.end(JSON.stringify(result.body));
        });
      });

      request.on('error', () => next());
    });
  }
};

const localAccountApi: Plugin = {
  name: 'local-account-api',
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      const pathname = new URL(request.url ?? '/', 'http://localhost').pathname;
      const handler = pathname === '/api/account-profile'
        ? handleAccountProfile
        : pathname === '/api/admin-users'
          ? handleAdminUsers
          : null;

      if (!handler) {
        next();
        return;
      }

      const execute = (body: unknown) => {
        void handler({
          method: request.method,
          origin: request.headers.origin,
          host: request.headers.host,
          authorization: request.headers.authorization,
          body
        }).then((result) => {
          response.statusCode = result.status;
          response.setHeader('content-type', 'application/json; charset=utf-8');
          response.setHeader('cache-control', 'no-store');
          response.end(JSON.stringify(result.body));
        }).catch(() => {
          response.statusCode = 503;
          response.setHeader('content-type', 'application/json; charset=utf-8');
          response.setHeader('cache-control', 'no-store');
          response.end(JSON.stringify({ message: 'Account services are unavailable.' }));
        });
      };

      if (pathname !== '/api/admin-users' || request.method !== 'PATCH') {
        execute(undefined);
        return;
      }

      let requestBody = '';
      let bodySize = 0;
      let isTooLarge = false;
      request.setEncoding('utf8');
      request.on('data', (chunk: string) => {
        bodySize += Buffer.byteLength(chunk);
        if (bodySize > 16 * 1024) {
          isTooLarge = true;
          return;
        }
        requestBody += chunk;
      });
      request.on('end', () => {
        if (isTooLarge) {
          response.statusCode = 413;
          response.setHeader('content-type', 'application/json; charset=utf-8');
          response.setHeader('cache-control', 'no-store');
          response.end(JSON.stringify({ message: 'Request is too large.' }));
          return;
        }

        let body: unknown;
        try {
          body = JSON.parse(requestBody);
        } catch {
          body = undefined;
        }
        execute(body);
      });
      request.on('error', () => {
        response.statusCode = 400;
        response.setHeader('content-type', 'application/json; charset=utf-8');
        response.end(JSON.stringify({ message: 'Unable to read request.' }));
      });
    });
  }
};

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), '');
  for (const key of ['SUPABASE_URL', 'SUPABASE_SECRET_KEY', 'SUPABASE_SERVICE_ROLE_KEY'] as const) {
    if (!process.env[key] && fileEnv[key]) process.env[key] = fileEnv[key];
  }

  return {
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    plugins: [react(), tailwindcss(), localAuthApi, localAccountApi],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.')
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    }
  };
});
