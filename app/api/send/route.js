import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    // Read raw request body as text
    const rawBody = await req.text();
    console.log("Received raw request body:", rawBody);

    // Parse the raw body into JSON
    const body = JSON.parse(rawBody);
    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      react: (
        <>
          <h2>Thank you for your message, {email}</h2>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>I will get back to you as soon as possible.</p>
          <p>New message submitted:</p>
          <p>{message}</p>
          <br></br>
          <p>jack.cv</p>
        </>
      ),
    });

    console.log("Sending data:", JSON.stringify(data));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error.message);
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
