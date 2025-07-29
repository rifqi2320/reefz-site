# Reefz Portfolio

A minimal, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Minimal and clean design
- 🎭 Smooth animations with Framer Motion
- 🏷️ Tag-based filtering for projects and experiences
- 📱 Fully responsive design
- 🚀 Fast development with Vite
- 💪 TypeScript for type safety
- 🎯 Easy to customize and maintain

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **pnpm** - Package manager

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information
Edit `src/data.ts` to update your personal information, experiences, and projects.

### Colors and Styling
The color palette is defined in `tailwind.config.js`. The main accent color can be changed there.

### Adding Media
For each project or experience, you can add images, videos, or links in the `media` array:

```typescript
media: [
  {
    type: 'image',
    url: '/path/to/image.jpg',
    alt: 'Description',
    caption: 'Optional caption'
  }
]
```

### Tags
Add or modify tags in the `tags` array in `src/data.ts`. Each tag has an ID, name, and color.

## Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## License

MIT License - feel free to use this template for your own portfolio!
