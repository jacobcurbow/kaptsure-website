# Kaptsure Website

Professional responsive Next.js website for Kaptsure, a drone services company serving the Mississippi Gulf Coast.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Quote Form Email Setup

The request quote form sends email from a server-side Next.js API route with Resend. It does not use `mailto:` links or open the visitor's email app.

1. Create a Resend account at `https://resend.com`.
2. In Resend, go to **API Keys** and create a new API key for this project.
3. In Resend, verify the sending domain you want to use for Kaptsure email.
4. In Vercel, open the Kaptsure project and go to **Project Settings -> Environment Variables**.
5. Add these environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=jacob@kaptsure.com
CONTACT_FROM_EMAIL=jacob@kaptsure.com
```

`CONTACT_TO_EMAIL` should be the Google Workspace inbox that receives quote notifications. `CONTACT_FROM_EMAIL` must use a sender/domain that is verified in Resend.

After adding or changing environment variables in Vercel, redeploy the site from the Vercel dashboard so the new values are available to the API route.

## Notes

- Logo assets live in `public/images/kaptsure-logo.svg` and `public/images/kaptsure-logo.png`.
- Optimized local photography assets live in `public/images/` and are sourced from royalty-free Pexels photos.
- The site uses the Next.js App Router with reusable Header, Footer, CTA, ServiceCard, and ContactForm components.
- Contact actions are wired to `719-205-7777`; quote requests send to the configured `CONTACT_TO_EMAIL` inbox.
