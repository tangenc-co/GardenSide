// Simple in-memory rate limiter for API routes
// For production, consider using Redis or a dedicated rate limiting service

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export function rateLimit({
  limit = 10,
  window = 60000, // 1 minute default
}: {
  limit?: number;
  window?: number;
} = {}) {
  return async (identifier: string): Promise<{ success: boolean; remaining: number }> => {
    const now = Date.now();
    const entry = rateLimitMap.get(identifier);

    if (!entry || now > entry.resetTime) {
      // Create new entry or reset expired one
      rateLimitMap.set(identifier, {
        count: 1,
        resetTime: now + window,
      });
      return { success: true, remaining: limit - 1 };
    }

    if (entry.count >= limit) {
      return { success: false, remaining: 0 };
    }

    entry.count++;
    return { success: true, remaining: limit - entry.count };
  };
}

// Clean up expired entries periodically (run this in a cron job or similar in production)
export function cleanupRateLimit() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// Run cleanup every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimit, 5 * 60 * 1000);
}
