interface ApiRequestOptions {
  method?: 'GET' | 'POST' | 'PATCH';
  body?: unknown;
}

export async function apiRequest<T>(
  url: string,
  accessToken: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const hasBody = options.body !== undefined;
  const response = await fetch(url, {
    method: options.method ?? 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(hasBody ? { 'Content-Type': 'application/json' } : {})
    },
    body: hasBody ? JSON.stringify(options.body) : undefined,
    cache: 'no-store'
  });
  const result: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      typeof result === 'object' && result !== null && 'message' in result && typeof result.message === 'string'
        ? result.message
        : 'Something went wrong. Please try again.';
    throw new Error(message);
  }

  return result as T;
}
