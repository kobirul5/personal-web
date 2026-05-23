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
  const senderName =
    process.env.BREVO_SENDER_NAME?.trim() || "Portfolio Contact";

  if (!apiKey || !senderEmail) {
    return NextResponse.json(
      { message: "Brevo email configuration is missing." },
      { status: 500 }
    );
  }


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

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

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
      <div style="margin:0; padding:0; background:#f6f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
        <div style="max-width:640px; margin:0 auto; padding:32px 16px;">
          <div style="overflow:hidden; border-radius:18px; background:#ffffff; border:1px solid #e5e7eb; box-shadow:0 18px 40px rgba(15,23,42,0.08);">
            <div style="padding:26px 30px; background:#ff6421;">
              <p style="margin:0 0 8px; color:rgba(255,255,255,0.78); font-size:13px; letter-spacing:2px; text-transform:uppercase;">
                Portfolio Contact
              </p>
              <h1 style="margin:0; color:#ffffff; font-size:28px; line-height:1.25;">
                New message from ${safeName}
              </h1>
            </div>

            <div style="padding:30px;">
              <div style="display:block; margin-bottom:22px;">
                <div style="margin-bottom:12px; padding:16px; border-radius:12px; background:#fff7ed; border:1px solid #fed7aa;">
                  <p style="margin:0 0 6px; color:#9a3412; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">
                    Name
                  </p>
                  <p style="margin:0; color:#111827; font-size:17px; font-weight:700;">
                    ${safeName}
                  </p>
                </div>

                <div style="padding:16px; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;">
                  <p style="margin:0 0 6px; color:#64748b; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">
                    Email
                  </p>
                  <a href="mailto:${safeEmail}" style="color:#ff6421; font-size:16px; font-weight:700; text-decoration:none;">
                    ${safeEmail}
                  </a>
                </div>
              </div>

              <div style="padding:20px; border-radius:14px; background:#f9fafb; border:1px solid #e5e7eb;">
                <p style="margin:0 0 12px; color:#64748b; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1px;">
                  Message
                </p>
                <div style="white-space:pre-wrap; color:#1f2937; font-size:15px; line-height:1.8;">${safeMessage}</div>
              </div>

              <div style="margin-top:26px; text-align:center;">
                <a href="mailto:${safeEmail}" style="display:inline-block; padding:13px 22px; border-radius:999px; background:#ff6421; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none;">
                  Reply to ${safeName}
                </a>
              </div>
            </div>

            <div style="padding:18px 30px; background:#f8fafc; border-top:1px solid #e5e7eb;">
              <p style="margin:0; color:#64748b; font-size:12px; line-height:1.6; text-align:center;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        </div>
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
