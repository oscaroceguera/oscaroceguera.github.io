# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

This project uses **npm** as the package manager. Do not use pnpm, yarn, or other package managers.

## Common Commands

### Development

- `npm run dev` - Start Next.js development server with Turbopack
- `npm run build` - Build production bundle with Turbopack
- `npm start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint on the codebase
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without making changes
- `npm run imports:sort` - Sort imports using Prettier plugin

### Git Hooks

- `npm run prepare` - Setup Husky git hooks
- `npm run pre-commit` - Run linting and import sorting (executed automatically on commit)

## Architecture Overview

### Next.js App Router with Internationalization

This is a Next.js 15 application using the App Router with a custom i18n implementation:

**Routing Structure:**

- Root layout (`app/layout.tsx`) - Minimal wrapper that delegates to locale-specific layout
- Root page (`app/page.tsx`) - Redirects to default locale (`/en`)
- Locale-specific routes (`app/[locale]/layout.tsx` and `app/[locale]/page.tsx`) - Main application entry points

**Internationalization:**

- Supported locales: `en` (default) and `es`
- Locale configuration in `lib/locales.ts`
- Translation dictionaries in `locales/en.json` and `locales/es.json`
- `lib/i18n.ts` provides `getDictionary()` and `isValidLocale()` utilities
- Static page generation for all locales using `generateStaticParams()`
- Dynamic metadata generation per locale using `generateMetadata()`

### Component Architecture

**Client Components:**

- `components/AnimatedHome.tsx` - Main homepage component with Framer Motion animations
  - Receives all translated content as props
  - Handles CV generation via `generateCV()` function
  - Implements complex animation variants (slideFromLeft, slideFromRight, fadeInUp, etc.)
  - Uses animated background gradients and floating particles

- `components/LanguageSwitcher.tsx` - Language switching UI

**Utilities:**

- `lib/generateCV.ts` - jsPDF-based CV generator
  - Creates multi-page PDF with professional formatting
  - Supports both English and Spanish
  - Includes sections: Professional Summary, Community Leadership, Experience, Skills, Education, Certifications

### Styling

- TailwindCSS v4 with PostCSS (@tailwindcss/postcss)
- Custom fonts: Geist Sans and Geist Mono from next/font/google
- Global styles in `app/globals.css`
- Dark theme with gradient accents (blue, purple, cyan)

### Code Style Configuration

**ESLint:**

- Extends `next/core-web-vitals` and `next/typescript`
- Uses `eslint-plugin-perfectionist` (with sort-imports disabled)
- Flat config format in `eslint.config.mjs`

**Prettier:**

- Single quotes, no semicolons
- Plugins: `@ianvs/prettier-plugin-sort-imports`, `prettier-plugin-tailwindcss`
- Import order: Built-ins → Third-party → @/\* aliases → Relative imports

**Commitlint:**

- Uses Conventional Commits standard (@commitlint/config-conventional)
- Configuration in `commitlint.config.ts`

### Key Dependencies

- **Next.js 15.5.5** - React framework with App Router
- **React 19.1.0** - UI library
- **Framer Motion 12.23.24** - Animation library
- **jsPDF 3.0.3** - PDF generation
- **TypeScript 5** - Type safety
- **Node 22.20.0** - Runtime version (see .nvmrc)

## Development Notes

### TypeScript Configuration

- Path alias `@/*` maps to project root
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

### Adding New Locales

1. Add locale code to `lib/locales.ts`
2. Create translation file in `locales/{locale}.json`
3. Add dictionary import in `lib/i18n.ts`
4. Update CV generation locale handling in `lib/generateCV.ts`

### Modifying CV Generation

- Edit `lib/generateCV.ts` to change PDF layout or styling
- Update `CVData` interface if adding new sections
- Test both English and Spanish outputs
- Consider page breaks for multi-page content

### Animation Patterns

When working with Framer Motion components in `AnimatedHome.tsx`:

- Use existing variants (containerVariants, slideFromLeft, fadeInUp, etc.) for consistency
- Apply `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Use `whileHover` and `whileTap` for interactive elements
- Maintain the staggerChildren pattern for list animations
- Make my page more original and profesional