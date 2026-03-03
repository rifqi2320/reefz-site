# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server on port 3010
- `pnpm build` - Build for production (runs TypeScript compilation + Vite build)
- `pnpm lint` - Run ESLint with TypeScript support
- `pnpm preview` - Preview production build on port 4173

### Package Management
- Uses `pnpm` as package manager (not npm/yarn)
- `pnpm install` - Install dependencies

## Architecture Overview

### Core Tech Stack
- **React 18** with TypeScript and Vite for fast development
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for animations and transitions
- **Port Configuration**: Dev server on 3010, preview on 4173, allowed hosts include me.reefz.cc

### Application Structure
This is a **portfolio website** with two distinct modes:
- `fullstack` mode - showcases full-stack development experience
- `research` mode - emphasizes research publications and academic work

### Data Architecture
- **Central Data Source**: `src/data.ts` contains all portfolio content
- **Auto-generated Tags**: Uses `src/utils/tagGenerator.ts` to create consistent tag colors and formatting
- **Type Safety**: Comprehensive TypeScript interfaces in `src/types.ts`
- **Mode-based Filtering**: Content is filtered based on `modes` array in each item

### Key Components
- **ModeSwitcher** - Handles switching between fullstack/research views
- **Tag-based Filtering** - Dynamic filtering for experiences, projects, and publications
- **Responsive Layout** - Mobile-first design with Tailwind utilities

### State Management
- URL-based mode persistence (query parameter `?mode=research` or `?mode=fullstack`)
- Local state for tag filtering across different sections
- Auto-generation of tag metadata from content

## Content Management

### Adding New Content
1. **Portfolio Data**: All content lives in `src/data.ts` in the `rawPortfolioData` object
2. **Images**: Place in `/public/` directory and reference with relative paths
3. **Mode Assignment**: Each experience/project must specify which modes it appears in via `modes: ["fullstack", "research"]`

### Content Types
- **Experiences**: Professional work history with achievements
- **Projects**: Technical projects with links and media
- **Publications**: Academic papers with citation counts and venue info
- **Awards**: Recognition and achievements
- **Education**: Academic background with thesis information

### Tag System
- Tags are automatically extracted from content and assigned consistent colors
- No manual tag configuration needed - handled by `tagGenerator.ts`
- Tags enable filtering within each content section

## Development Notes

### Styling Conventions
- Custom color palette defined in `tailwind.config.js` with neutral grays and accent colors
- Custom animations: `fade-in`, `slide-up`, `slide-in-left`, `bounce-subtle`
- Uses Inter font for body text, JetBrains Mono for code

### Performance Considerations
- Vite for fast hot-reload development
- Framer Motion for performant animations
- TypeScript strict mode enabled for type safety

### Server Configuration
- Dev server allows specific hosts: `me.reefz.cc`, `localhost`, `127.0.0.1`
- Docker support available (Dockerfile and docker-compose.yml present)