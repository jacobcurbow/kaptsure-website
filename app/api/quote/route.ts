import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceNeeded: string;
  preferredDate: string;
  projectDetails: string;
  company?: string;
};

const requiredFields: Array<keyof QuoteRequest> = [
  "name",
  "phone",
  "email",
  "propertyAddress",
  "serviceNeeded",
  "preferredDate",
  "projectDetails"
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatSubmittedDate(value: string) {
  if (!value) return "Not provided";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function createEmailText(fields: QuoteRequest) {
  return [
    "New Kaptsure Quote Request",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `Property Address: ${fields.propertyAddress}`,
    `Service Needed: ${fields.serviceNeeded}`,
    `Preferred Date: ${formatSubmittedDate(fields.preferredDate)}`,
    "",
    "Project Details:",
    fields.projectDetails
  ].join("\n");
}

function createEmailHtml(fields: QuoteRequest) {
  const rows = [
    ["Name", fields.name],
    ["Phone", fields.phone],
    ["Email", fields.email],
    ["Property Address", fields.propertyAddress],
    ["Service Needed", fields.serviceNeeded],
    ["Preferred Date", formatSubmittedDate(fields.preferredDate)]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 18px">New Kaptsure Quote Request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="text-align:left;padding:10px 12px;border:1px solid #dfe7e2;background:#f4f8f5;width:180px">${escapeHtml(
                    label
                  )}</th>
                  <td style="padding:10px 12px;border:1px solid #dfe7e2">${escapeHtml(value)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px">Project Details</h2>
      <p style="white-space:pre-wrap;margin:0;max-width:680px">${escapeHtml(fields.projectDetails)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const fields: QuoteRequest = {
    name: clean(payload.name),
    phone: clean(payload.phone),
    email: clean(payload.email),
    propertyAddress: clean(payload.propertyAddress),
    serviceNeeded: clean(payload.serviceNeeded),
    preferredDate: clean(payload.preferredDate),
    projectDetails: clean(payload.projectDetails),
    company: clean(payload.company)
  };

  if (fields.company) {
    return NextResponse.json({ message: "Thanks — your request was sent. I’ll follow up soon." });
  }

  const missingField = requiredFields.find((field) => !fields[field]);
  if (missingField) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { message: "Quote requests are not configured yet. Please call or try again soon." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: "New Kaptsure Quote Request",
    replyTo: fields.email,
    text: createEmailText(fields),
    html: createEmailHtml(fields)
  });

  if (error) {
    return NextResponse.json(
      { message: "Something went wrong sending your request. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Thanks — your request was sent. I’ll follow up soon." });
}
