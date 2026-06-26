# Musab Mohammed Ibrahim — Developer Portfolio

A clean, client-side developer portfolio built with React, Vite, and Tailwind CSS. It showcases full-stack web development, Android development, Firebase, PostgreSQL/Prisma, and product-building skills without overclaiming project launch status.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Client-side only: no backend, no database, no authentication

## Sections

- Home
- Projects
- Skills
- About
- Contact

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Deploy on GitHub Pages

For GitHub Pages, you may need to set the Vite `base` path in `vite.config.js` if deploying under a repository subpath.

Example:

```js
export default defineConfig({
  base: '/repository-name/',
  plugins: [react(), tailwindcss()],
});
```

Then build and publish the `dist` folder using your preferred GitHub Pages workflow.

## Before Publishing

Replace these placeholders:

- `[my email]`
- `[my LinkedIn]`
- `[optional]` WhatsApp/contact
- Any GitHub project links that are private or not ready to share

## Honesty Notes

This portfolio intentionally avoids overclaiming. Projects are described as MVPs, active development, personal products, client demos, concepts, or production-ready foundations depending on their current status.
