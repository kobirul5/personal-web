import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_EMAIL?.trim();
  const senderName = "Portfolio Contact";

  if (!apiKey || !senderEmail) {
    return NextResponse.json(
      { message: "Brevo email configuration is missing." },
      { status: 500 }
    );
  }


  console.log("Brevo API Key and Sender Email are configured.", apiKey);

  // if (apiKey.startsWith("xsmtpsib-")) {
  //   return NextResponse.json(
  //     {
  //       message:
  //         "Brevo SMTP key detected. Use a Brevo API key that starts with xkeysib-.",
  //     },
  //     { status: 500 }
  //   );
  // }

  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  console.log("Received contact message:", { name, email, message });

  const payload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: senderEmail,
      },
    ],
    replyTo: {
      email,
      name,
    },
    subject: `New portfolio message from ${name}`,
    htmlContent: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb;">${escapeHtml(
          message
        )}</div>
      </div>
    `,
  };

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    return NextResponse.json(
      { message: error?.message || "Failed to send email." },
      { status: response.status }
    );
  }

  return NextResponse.json({ message: "Email sent successfully." });
}
