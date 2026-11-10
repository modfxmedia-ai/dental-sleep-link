const FIELDS = {
  first: 80,
  last: 80,
  email: 200,
  phone: 40,
  practice: 160,
  city: 120,
  is_dentist: 60,
  reasons: 300,
  message: 4000,
} as const;

type Field = keyof typeof FIELDS;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill it.
  if (typeof data.website === "string" && data.website.trim()) {
    return Response.json({ ok: true });
  }

  const v = {} as Record<Field, string>;
  for (const [key, max] of Object.entries(FIELDS) as [Field, number][]) {
    const raw = data[key];
    v[key] = typeof raw === "string" ? raw.trim().slice(0, max) : "";
  }

  if (!v.first || !v.last || !v.city || !v.message || !EMAIL_PATTERN.test(v.email)) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const name = `${v.first} ${v.last}`.replace(/[\r\n]+/g, " ");
  const text = [
    "New inquiry from the Dental Sleep Link website",
    "",
    `Name: ${name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone || "Not provided"}`,
    `Practice: ${v.practice || "Not provided"}`,
    `City and state: ${v.city}`,
    `Treating dentist: ${v.is_dentist || "Not provided"}`,
    `Interest: ${v.reasons || "Not provided"}`,
    "",
    "Message:",
    v.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: v.email,
      subject: `Website inquiry: ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form email failed", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
