# Client Demo Templates — Prototype Archive

> **13 modular React landing-page UI templates** for diverse small-business industries.  
> Built with React, Vite, Framer Motion, and Tailwind CSS.

**Status:** Source template library only (no active live Firebase Hosting deployment — see [g-makris.com/portfolio](https://g-makris.com/portfolio) for live showcase work).

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/gerasimosmakris98/client-demos.git
cd client-demos

# Install & Run
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (AIChat widget)
│   ├── dashboard/       # Landing page grid (FilterBar, TemplateCard)
│   ├── demos/           # AdminMock shared component
│   └── layout/          # MainLayout, DemoLayout, Navbar
├── demos/
│   ├── premium-template/   # GM Premium SaaS
│   ├── cafe-greek/         # GM Cafe
│   ├── hair-salon-greek/   # GM Salon
│   ├── law-office-greek/   # GM Law Partners
│   ├── tutoring-greek/     # GM Tutoring (with Dashboard)
│   ├── gym-greek/          # GM Gym
│   ├── electrician-greek/  # GM Electric
│   ├── real-estate-greek/  # GM Estates
│   ├── medical-greek/      # GM Medical
│   ├── hotel-greek/        # GM Hotel
│   ├── accounting-greek/   # GM Accounting
│   ├── restaurant-greek/   # GM Restaurant
│   └── studio-greek/       # GM Fitness Studio
├── pages/
│   └── Dashboard.jsx       # Main landing page grid
└── App.jsx                 # Route definitions
```

## 🎨 Demo Templates (13 Total)

Each template includes **8-9 fully responsive sections** + AI Chat + Admin Dashboard:

| # | Template | Industry | Accent Color | Sections |
|---|----------|----------|---------|----------|
| 1 | **GM Premium SaaS** | Tech/Startup | Blue/Indigo | Hero, Features, Pricing, CTA |
| 2 | **GM Cafe** | Hospitality | Amber/Orange | Hero, About, Menu, Gallery, Testimonials, Location, Footer |
| 3 | **GM Salon** | Beauty | Rose/Pink | Hero, Services, Testimonials, Booking, Footer |
| 4 | **GM Law Partners** | Legal | Slate | Hero, Practice Areas, Attorneys, Case Studies, Testimonials, Contact |
| 5 | **GM Tutoring** | Education | Emerald | Hero, Programs, Educators, Pricing, FAQ, Dashboard (Admin/Teacher/Student) |
| 6 | **GM Gym** | Fitness | Lime/Neon | Hero, Programs, Trainers, Pricing, FAQ |
| 7 | **GM Electric** | Trades | Orange | Hero, About, Services, Team, Gallery, Testimonials, Pricing, Contact, Footer |
| 8 | **GM Estates** | Real Estate | Gold/Amber | Hero, About, Listings, Services, Agents, Testimonials, Contact, Footer |
| 9 | **GM Medical** | Healthcare | Teal/Cyan | Hero, About, Specialties, Doctors, Testimonials, Booking, Contact, Footer |
| 10 | **GM Hotel** | Hospitality | Warm/Sepia | Hero, About, Rooms, Amenities, Testimonials, Reservation, Contact, Footer |
| 11 | **GM Accounting** | Finance | Indigo/Violet | Hero, About, Services, Team, Testimonials, Pricing, Contact, Footer |
| 12 | **GM Restaurant** | Food & Dining | Red | Hero, About, Menu, Chef, Gallery, Testimonials, Reservation, Footer |
| 13 | **GM Studio** | Wellness | Purple/Fuchsia | Hero, About, Classes, Instructors, Gallery, Testimonials, Pricing, Contact, Footer |

## 🤖 Shared Features

- **AI Chat Widget** — Reusable chat bubble (`brandName` prop) on every demo
- **Admin Dashboard** — Simulated admin view with KPIs via view toggle
- **Dark Mode** — All demos use dark/premium aesthetics
- **Mobile-First** — Fully responsive with Tailwind breakpoints
- **Framer Motion** — Hero animations and section transitions
- **Lucide Icons** — Consistent icon system across all demos

## 🔧 Personalization Guide

To clone and customize any template, please refer to the detailed [Cloning Guide](CLONING_GUIDE.md).

1. **Copy** a demo folder from `src/demos/` and rename it
2. **Update** the brand name, colors, and content
3. **Register** the new route in `src/App.jsx`
4. **Deploy** via `npm run build` + Firebase

### Key Files to Edit:
- `index.jsx` — Main demo entry point (component composition + AdminMock stats)
- `components/Hero.jsx` — Brand name, tagline, hero image
- Color tokens: Search/replace the accent color class (e.g., `text-orange-400` → `text-blue-400`)

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Deploy to Firebase
npx firebase-tools deploy --only hosting

# Push to GitHub
git add -A; git commit -m "your message"; git push origin master
```

## 🛠 Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v3.4** (Optimized for Shadcn UI)
- **Shadcn UI** & **Radix Primitives**
- **Framer Motion**
- **Lucide React** icons
- **React Router v7**
- **Firebase Hosting**

## 🎨 Available Demo Templates

The following templates are currently active and ported:

1. **Electrician Services** (`/demos/electrician-greek`)
2. **Restaurant & Dining** (`/demos/restaurant-greek`)
3. **Modern Cafe** (`/demos/cafe-greek`)
4. **Education & Tutoring** (`/demos/tutoring-greek`)

*More templates are being ported from the legacy system.*

---

Maintained as an exploratory UI template repository · [g-makris.com](https://g-makris.com)
