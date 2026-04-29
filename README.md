# Priyanka Chavan — Portfolio

Dark, tech-forward personal portfolio built with React + Vite + Framer Motion.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Add Your Resume PDF

Drop your PDF in `public/` as `Priyanka_Chavan_CV.pdf` — the download button links to `/Priyanka_Chavan_CV.pdf` by default. Change the path in `src/data.js` (`profile.resumeUrl`) if you want a different filename.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Vercel auto-detects Vite. Click Deploy.
4. Add a custom domain in Project Settings → Domains

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git → select the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `_redirects` file in `public/` with: `/* /index.html 200` (for SPA routing)

## Structure

```
src/
├── App.jsx              # Router
├── main.jsx             # Entry point
├── data.js              # All content (profile, work, projects, awards)
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Work.jsx
│   ├── Projects.jsx
│   ├── Awards.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHead.jsx
├── pages/
│   ├── Home.jsx         # Assembles all sections
│   ├── CaseStudy.jsx    # Project detail pages
│   └── NotFound.jsx
└── styles/
    └── global.css       # Design system + all component styles
```

## Customising

- **Content**: Edit `src/data.js` — everything is there.
- **Colours**: Change CSS variables at the top of `src/styles/global.css` (`--bg`, `--accent`, etc.).
- **Typography**: Swap fonts in `index.html` `<link>` and `--font-*` CSS variables.

## Tech

- React 18
- React Router v6 (SPA routing)
- Framer Motion (scroll + entrance animations)
- Vite (build tool)
- Custom CSS (no framework)

## Fonts

Loaded from Google Fonts:
- **Fraunces** — display
- **Inter** — body
- **JetBrains Mono** — mono/UI
