import { Resend } from "resend";
import { NextResponse } from "next/server";
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: 3 requests per minute (stricter for subscription)
const limiter = rateLimit({ limit: 3, window: 60000 });

function validateEmail(email: string): boolean {
  const emailRegex = /^[^[\s@]+@[^[\s@]+\.[^[\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().toLowerCase();
}

export async function POST(request: Request) {
  try {
    // Check request size limit (10KB for subscription)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10 * 1024) {
      return NextResponse.json(
        { message: 'Request body too large.' },
        { status: 413 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check rate limit
    const rateLimitResult = await limiter(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { message: 'Too many subscription attempts. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({
        message: "Email is required",
        status: 400,
      });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Validate email length
    if (email.length > 254) {
      return NextResponse.json(
        { message: "Email address is too long." },
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = sanitizeInput(email);

    const data = await resend.emails.send({
      from: "GardenSide <onboarding@resend.dev>",
      to: sanitizedEmail,
      subject: "🌿 Welcome to GardenSide , Let's grow together!",
      html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #143D30;">
            <h2>Thank you for subscribing to GardenSide!</h2>
            <p>We are thrilled to have you in our community. Here is what you can look forward to:</p>
            <ul>
              <li><strong>New Arrivals:</strong> Be the first to know when new premium furniture drops.</li>
              <li><strong>Teak Care Tips:</strong> Expert guidance on preserving your outdoor wood assets.</li>
              <li><strong>Exclusive Offers:</strong> Member-only discounts directly to your inbox.</li>
            </ul>
            <hr style="border: 0; border-top: 1px solid #97CCB3; margin: 20px 0;" />
            <p style="font-size: 12px; color: #7A7A7A;">You received this because you signed up on our website.</p>
          </div>
        `,
    });

    return NextResponse.json({success:true,data},{status:200})
  } catch(error){
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
