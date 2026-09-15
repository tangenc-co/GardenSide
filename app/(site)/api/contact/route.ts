import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: 5 requests per minute
const limiter = rateLimit({ limit: 5, window: 60000 });

// Input validation schemas
function validateEmail(email: string): boolean {
  const emailRegex = /^[^[\s@]+@[^[\s@]+\.[^[\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[+]?[\d\s\-()]{10,20}$/;
  return phoneRegex.test(phone);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>"'&]/g, '');
}

const allowedEnquiryTypes = ['Sales', 'Support', 'General', 'Wholesale'];

function validateEnquiryType(type: string): boolean {
  return allowedEnquiryTypes.includes(type);
}


export async function POST(request: Request) {
  try {
    // Check request size limit (1MB)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 1024 * 1024) {
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
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message, enquiryType } = body;

    // Validate required fields
    if (!name || !email || !message || !phone || !subject || !enquiryType) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!validatePhone(phone)) {
      return NextResponse.json(
        { message: 'Invalid phone number.' },
        { status: 400 }
      );
    }

    // Validate enquiry type
    if (!validateEnquiryType(enquiryType)) {
      return NextResponse.json(
        { message: 'Invalid enquiry type.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedPhone = sanitizeInput(phone);

    // Length validation
    if (sanitizedName.length > 100 || sanitizedName.length < 2) {
      return NextResponse.json(
        { message: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    if (sanitizedSubject.length > 200 || sanitizedSubject.length < 5) {
      return NextResponse.json(
        { message: 'Subject must be between 5 and 200 characters.' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length > 2000 || sanitizedMessage.length < 10) {
      return NextResponse.json(
        { message: 'Message must be between 10 and 2000 characters.' },
        { status: 400 }
      );
    }


const data = await resend.emails.send({
  from: 'GardenSide WebForm <onboarding@resend.dev>',
  to: 'heinzin121021@gmail.com', 
  replyTo: email,
  subject: `[${enquiryType}] New GardenSide Message from ${sanitizedName}`,
  html: `
    <div style="font-family: sans-serif; color: #143D30; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <h2 style="color: #1E3D2F; margin-bottom: 4px;">You received a new message from your website!</h2>
      <p style="font-size: 14px; color: #7A7A7A; margin-top: 0;">Submitted via the contact portal.</p>
      <hr style="border: 0; border-top: 1px solid #97CCB3; margin: 20px 0;" />
      
      <!-- 2. Displaying the selected form tab value clearly -->
      <p><strong>Enquiry Department:</strong> <span style="background-color: #EDFAF5; padding: 4px 8px; border-radius: 4px; color: #056839; font-weight: bold; font-size: 13px;">${enquiryType}</span></p>
      <p><strong>Sender Name:</strong> ${sanitizedName}</p>
      <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #056839; text-decoration: none;">${email}</a></p>
      <p><strong>Sender Phone:</strong> ${sanitizedPhone}</p>
      
      <br />
      <p style="margin-bottom: 8px;"><strong>Message contents:</strong></p>
      <div style="background-color: #f8f5ef; padding: 18px; border-radius: 8px; border-left: 4px solid #1E3D2F; font-style: italic; color: #213526;">
        "${sanitizedMessage}"
      </div>
      
      <hr style="border: 0; border-top: 1px solid #97CCB3/20; margin: 30px 0 20px 0;" />
      <p style="font-size: 11px; color: #A0A0A0; text-align: center;">GardenSide Storefront Systems © 2026</p>
    </div>
  `,
});


    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
