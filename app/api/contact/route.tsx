import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

// IMPORTANT: Get your API key from https://resend.com and set it in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL; // The email where you want to receive messages
const FROM_EMAIL = 'Tirafanga Website <onboarding@resend.dev>'; // Must be a verified domain on Resend

// Define the email component separately for clarity
const ContactEmail = ({ name, email, message }: { name: string, email: string, message: string }) => (
  <div>
    <h1>New Message from Tirafanga.org</h1>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message || !TO_EMAIL) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
  from: FROM_EMAIL,
  to: [TO_EMAIL],
  subject: `New Contact Form Submission from ${name}`,
  // This part is now corrected
  headers: {
    'Reply-To': email,
  },
  react: ContactEmail({ name, email, message }),
});

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
  }
}