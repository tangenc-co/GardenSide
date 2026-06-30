import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  try {

    const { name, email,phone,subject, message } = await request.json();
    if (!name || !email || !message || !phone || !subject) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'GardenSide WebForm <onboarding@resend.dev>',
      to: 'heinzin121021@gmail.com', 
      replyTo: email,
      subject: `New GardenSide Message from ${name}`,
      html: `
        <h2>You received a new message from your website!</h2>
        <hr />
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
        <br />
        <p><strong>Message contents:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; font-style: italic;">
          "${message}"
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
