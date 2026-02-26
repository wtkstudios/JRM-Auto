# JRM Autos – Premium Mechanic Website

A premium, mobile-first website for **JRM Autos**, a Coventry (UK) mechanic garage with close to 20 years of operation. Built with Next.js 14, TailwindCSS, shadcn/ui, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

All business constants (phone, address, opening hours, Google links) are in a single file:

```
src/lib/site.ts
```

Update these values before going live:
- `phone` – Your actual phone number
- `address` – Full workshop address
- `emailTo` – Contact email
- `googleProfileUrl` – Your Google Business Profile URL
- `googleMapsUrl` – Direct Google Maps link to your workshop
- `whatsapp` – (Optional) WhatsApp number

## Images

All images are in `public/images/`. Replace or add:

| File | Usage |
|------|-------|
| `carbon.jpg` | Subtle background texture (5-10% opacity) |
| `wires.jpg` | Hero background image |
| `spanner.jpg` | Watermark accent in Services section |
| `logo red.png` | Red logo variant |
| `logo yellow hype.png` | Gold/yellow logo variant |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, SEO
│   ├── page.tsx            # Main landing page (assembles all sections)
│   ├── globals.css         # Design tokens, carbon texture, base styles
│   └── privacy/
│       └── page.tsx        # Privacy policy placeholder
├── components/
│   ├── sections/
│   │   ├── Header.tsx      # Sticky header + mobile Sheet menu
│   │   ├── Hero.tsx        # Hero with CTAs + trust badges
│   │   ├── Services.tsx    # 6 service cards grid
│   │   ├── Trust.tsx       # Why JRM Autos section
│   │   ├── GoogleProfile.tsx # Reviews + Google link
│   │   ├── Location.tsx    # Address, hours, map embed
│   │   ├── Contact.tsx     # Validated booking form
│   │   └── Footer.tsx      # Footer with links
│   └── ui/                 # shadcn/ui components
│       └── shared/
│           └── ScrollProgress.tsx
└── lib/
    ├── site.ts             # All business constants
    └── utils.ts            # shadcn utility (cn)
```

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** for styling
- **shadcn/ui** for UI primitives
- **Framer Motion** for animations
- **react-hook-form** + **zod** for form validation
- **lucide-react** for icons

## Contact Form

The contact form currently logs to console on submit. To integrate with an email service:

1. Create `src/app/api/contact/route.ts`
2. Install Resend: `npm install resend`
3. Add your Resend API key to `.env.local`
4. Wire up the form submission in `Contact.tsx`

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#B3001B` | CTAs, accents |
| Accent Gold | `#F0A202` | Primary buttons, highlights |
| Dark Base | `#121212` | Backgrounds |
| Steel/Teal | `#84BCBE` | Secondary text, icons |
| Off-White | `#F3F3F4` | Body text on dark |
| Surface | `#353535` | Card backgrounds, borders |
