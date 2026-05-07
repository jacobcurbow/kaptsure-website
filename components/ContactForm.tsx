"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Drone Roof Inspections",
  "Real Estate Aerial Photos & Video",
  "Insurance / Storm Damage Documentation",
  "Coastal, Waterfront & Property Imaging",
  "Contractor Progress Photos",
  "Before & After Project Documentation"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          propertyAddress: formData.get("property-address"),
          serviceNeeded: formData.get("service-needed"),
          preferredDate: formData.get("preferred-date"),
          projectDetails: formData.get("project-details"),
          company: formData.get("company")
        })
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong sending your request.");
      }

      setStatus("success");
      setMessage(result.message || "Thanks — your request was sent. I’ll follow up soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong sending your request. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="preferred-date">Preferred Date</label>
          <input id="preferred-date" name="preferred-date" type="date" required />
        </div>
        <div className="field field-wide">
          <label htmlFor="property-address">Property Address</label>
          <input id="property-address" name="property-address" autoComplete="street-address" required />
        </div>
        <div className="field field-wide">
          <label htmlFor="service-needed">Service Needed</label>
          <select id="service-needed" name="service-needed" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="field field-wide">
          <label htmlFor="project-details">Project Details</label>
          <textarea
            id="project-details"
            name="project-details"
            placeholder="Tell us what needs to be documented, inspected, or captured."
            required
          />
        </div>
      </div>
      {message ? (
        <p className={`form-message form-message-${status}`} role={status === "error" ? "alert" : "status"}>
          {message}
        </p>
      ) : null}
      <button className="button button-primary" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Request My Quote"}
      </button>
    </form>
  );
}
