# Robrix Website

Official website for [Robrix](https://github.com/project-robius/robrix), a multi-platform Matrix chat client built with Rust and Makepad.

## About

This website showcases Robrix, highlighting its features, supported platforms, technology stack, and providing resources including conference presentations and videos about the project.

**Tech Stack:**
- [Astro 5.0](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- TypeScript

**Key Features:**
- Responsive design with dark/light mode
- SEO optimized with Open Graph tags
- Embedded conference videos
- Downloadable presentation materials
- Fast performance and accessibility

## Development

### Prerequisites

Node.js 18+ and npm

### Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run checks (Astro, ESLint, Prettier)
npm run check

# Auto-fix linting and formatting
npm run fix
```

## Project Structure

```
robrix-website/
├── src/
│   ├── assets/          # Images, fonts, styles
│   ├── components/      # Reusable components
│   │   ├── dockit/      # Custom Robrix components
│   │   ├── widgets/     # Page section widgets
│   │   └── ui/          # UI elements
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes
│   │   ├── index.astro           # Homepage
│   │   ├── presentations.astro   # Presentations & videos
│   │   └── [...blog]/            # Blog routes
│   ├── config.yaml      # Site configuration
│   └── navigation.ts    # Header/footer navigation
└── public/              # Static assets
```

## Configuration

Edit `src/config.yaml` for site metadata and settings.
Edit `src/navigation.ts` for header and footer navigation.

## Deployment

Build and deploy to any static hosting service:

```bash
npm run build
# Deploy the dist/ folder
```

## About Robrix

Robrix is part of [Project Robius](https://robius.rs/), an initiative advancing multi-platform application development with Rust. The app demonstrates true cross-platform capabilities across macOS, Linux, Windows, Android, iOS, iPadOS, and OpenHarmony from a single Rust codebase.

## License

MIT License — Based on the AstroWind template.
