import { quoteMailto } from "@/lib/contact";

const serviceOptions = [
  "Drone Roof Inspections",
  "Real Estate Aerial Photos & Video",
  "Insurance / Storm Damage Documentation",
  "Coastal, Waterfront & Property Imaging",
  "Contractor Progress Photos",
  "Before & After Project Documentation"
];

export function ContactForm() {
  return (
    <form className="quote-form" action={quoteMailto} method="post" encType="text/plain">
      <div className="form-grid">
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
          <input id="preferred-date" name="preferred-date" type="date" />
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
      <button className="button button-primary" type="submit">
        Request My Quote
      </button>
    </form>
  );
}
