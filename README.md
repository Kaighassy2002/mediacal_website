
# Medical Clinic Website Design

Professional, single-page medical clinic website built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Lucide React icons

## Project Structure

- `index.html` - app shell and font links
- `src/main.jsx` - React entry point
- `src/App.jsx` - page composition
- `src/index.css` - Tailwind import entry
- `src/styles/globals.css` - theme tokens and base styles
- `src/components/` - website sections (`Hero`, `Services`, `Awareness`, `BookingForm`, `Contact`, `Footer`)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Default Dev URL

Vite is configured for port `3000` in `vite.config.ts`.

If port `3000` is busy, Vite may switch to another port (for example `3001` or `3002`).
Always open the exact URL shown in terminal output.

## Styling Notes

- Tailwind is enabled via `@tailwindcss/vite` plugin in `vite.config.ts`.
- Tailwind entry import is in `src/index.css`:
  - `@import "tailwindcss";`
  - `@import "./styles/globals.css";`

If the page shows unstyled content, usually the browser is on an old/stale dev server tab.
Close old localhost tabs and reopen the current Vite URL, then hard refresh (`Ctrl+F5`).
  