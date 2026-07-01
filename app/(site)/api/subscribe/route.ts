import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try{
    const { email } = await request.json();

  if (!email) {
    return NextResponse.json({
      message: "Email is required",
      status: 400,
    });
  }

  const data = await resend.emails.send({
    from: "GardenSide <onboarding@resend.dev>",
    to: email,
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
  }catch(error){
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
