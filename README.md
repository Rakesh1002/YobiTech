# YOBITECH Website

Official website for YOBITECH SERVICES PRIVATE LIMITED, built with modern web technologies.

## Overview

YOBITECH is a technology company specializing in AI-powered enterprise solutions, software development, and digital transformation services. This website showcases our services and provides a way for potential clients to get in touch.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **Animations:** Framer Motion
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Deployment:** Vercel

## Features

- 🎨 Modern, responsive design
- 🌊 Smooth scroll animations
- 📱 Mobile-first approach
- 📝 Contact form with server-side validation
- 🗃️ PostgreSQL database integration
- 🎭 Interactive UI elements
- 🔍 SEO optimized
- 🖼️ Optimized image loading
- 🚀 Fast page loads

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/yobitech/website.git
cd website
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with:

```env
DATABASE_URL="your_postgresql_url"
```

4. **Run database migrations:**

```bash
npx prisma migrate dev
```

5. **Start the development server:**

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   │   ├── sections/    # Page sections
│   │   └── ui/         # Reusable UI components
│   ├── lib/             # Utility functions
│   └── hooks/           # Custom React hooks
├── prisma/              # Database schema
├── public/              # Static assets
└── scripts/             # Build scripts
```

## Development

- Run `pnpm dev` for development
- Run `pnpm build` to create production build
- Run `pnpm start` to start production server
- Run `pnpm generate-logos` to generate logo assets

## Contributing

While this is a private project, we welcome feedback and suggestions. Please create an issue to discuss potential improvements.

## License

Copyright © 2024 YOBITECH SERVICES PRIVATE LIMITED. All rights reserved.
