# Hive Roofing and Solar — Review Collection Landing Page

A mobile-first Next.js landing page that collects customer reviews and routes happy customers to public review platforms (Google, Facebook, BBB), while capturing negative feedback privately and sending it to the support team via n8n webhooks.

---

## Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd Review_request_landing
npm install
```

### 2. Configure environment variables

Copy `.env.local` and fill in your real values:

```bash
cp .env.local .env.local
```

Edit `.env.local`:

```env
# Your n8n webhook endpoint — all events POST here
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-instance.com/webhook/review-event

# Review platform URLs
NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
NEXT_PUBLIC_FACEBOOK_REVIEW_URL=https://www.facebook.com/YOUR_PAGE/reviews
NEXT_PUBLIC_BBB_REVIEW_URL=https://www.bbb.org/us/YOUR_STATE/YOUR_CITY/profile/roofing/YOUR_BUSINESS

# Company name shown on the page
NEXT_PUBLIC_COMPANY_NAME=Hive Roofing and Solar
```

**To find your Google Place ID:** Visit [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder) and search for your business.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000/review?customer_id=test123&job_id=job456&name=John&step=1](http://localhost:3000/review?customer_id=test123&job_id=job456&name=John&step=1)

---

## URL Parameters

Customers arrive via a personalized URL:

```
https://reviews.hiveroofing.com/review?customer_id=24732e2b&job_id=bc9f4a7a&name=John&step=1
```

| Parameter | Required | Description |
|-----------|----------|-------------|
| `customer_id` | Yes | Unique customer identifier — used in all webhook calls |
| `job_id` | No | CRM job ID |
| `name` | No | Customer's first name for personalized greeting |
| `step` | No | Review platform step: `1`=Google, `2`=Google+photo, `3`=Facebook, `4`=BBB (defaults to `1`) |

If `customer_id` is missing, the page shows an error and sends no webhooks.

---

## Webhook Events

All events POST to `NEXT_PUBLIC_WEBHOOK_URL` with `Content-Type: application/json`.

| Event | Trigger |
|-------|---------|
| `page_visited` | Page loads with valid `customer_id` |
| `rating_submitted` | Customer taps a star |
| `review_link_clicked` | Customer clicks the review platform button |
| `negative_feedback_submitted` | Customer submits the private feedback form |

Webhook failures are silent — the customer experience is never interrupted.

---

## Deployment on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. In **Environment Variables**, add each variable from `.env.local`.
4. Deploy. Vercel will set the route at `/review` automatically.

> **Important:** Never commit `.env.local` to git. The `.gitignore` already excludes it.

---

## Project Structure

```
app/
  layout.tsx              Root layout (metadata, fonts)
  page.tsx                Redirects / → /review
  review/
    page.tsx              Main review flow — reads params, manages screen state

components/
  StarRating.tsx          Interactive 5-star rating (SVG, hover, keyboard accessible)
  PositiveFeedback.tsx    Thank-you + review platform button (steps 1-4)
  NegativeFeedback.tsx    Private feedback textarea + submit
  ThankYou.tsx            Final confirmation screen (positive & negative variants)
  ErrorScreen.tsx         Invalid link error screen

lib/
  types.ts                TypeScript types for webhook payloads and app state
  webhook.ts              Reusable helper — POSTs events to n8n, fails silently
```

---

## Customizing Colors

The accent colors are defined with Tailwind classes and easy to swap:

- **Stars / amber accent:** `#F59E0B` (Tailwind `amber-400`) — search for `amber` in components
- **Primary button:** `bg-blue-600` — search for `blue-600` in components

To use brand colors, update these classes or define CSS variables in `globals.css`.
