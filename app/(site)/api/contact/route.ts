import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  try {

    const { name, email,phone,subject, message,enquiryType } = await request.json();
    if (!name || !email || !message || !phone || !subject || !enquiryType) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }


const data = await resend.emails.send({
  from: 'GardenSide WebForm <onboarding@resend.dev>',
  to: 'heinzin121021@gmail.com', 
  replyTo: email,
  subject: `[${enquiryType}] New GardenSide Message from ${name}`,
  html: `
    <div style="font-family: sans-serif; color: #143D30; max-width: 600px; margin: 0 auto; line-height: 1.6;">
      <h2 style="color: #1E3D2F; margin-bottom: 4px;">You received a new message from your website!</h2>
      <p style="font-size: 14px; color: #7A7A7A; margin-top: 0;">Submitted via the contact portal.</p>
      <hr style="border: 0; border-top: 1px solid #97CCB3; margin: 20px 0;" />
      
      <!-- 2. Displaying the selected form tab value clearly -->
      <p><strong>Enquiry Department:</strong> <span style="background-color: #EDFAF5; padding: 4px 8px; border-radius: 4px; color: #056839; font-weight: bold; font-size: 13px;">${enquiryType}</span></p>
      <p><strong>Sender Name:</strong> ${name}</p>
      <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #056839; text-decoration: none;">${email}</a></p>
      
      <br />
      <p style="margin-bottom: 8px;"><strong>Message contents:</strong></p>
      <div style="background-color: #f8f5ef; padding: 18px; border-radius: 8px; border-left: 4px solid #1E3D2F; font-style: italic; color: #213526;">
        "${message}"
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
