# SIAM — Digital Creative Portfolio

> **"Building digital experiences that feel different."**

A premium, production-quality, multi-page personal portfolio and interactive digital experience designed for **Siam**, Creative Developer and Digital Designer based in Dhaka, Bangladesh.

Synthesized from the calm structural modularity of **Notion**, the tactile typography and whitespace of **Apple**, the immersive dark audio aesthetic of **Spotify**, and the high-velocity precision borders of **Linear**.

---

## 🌟 Key Features & Digital Architecture

### 🧭 Multi-Page Experience
1. **Home (`/`)** — Large Apple-scale typography, interactive stats, live studio radar, featured project cards, philosophy pillars, skills preview, recent essays, and contact CTA.
2. **About (`/about`)** — Full biography, story and journey, principles, micro-facts bento grid, career highlights, and daily creative rituals.
3. **Projects (`/projects`)** — Curated showcase of 7 in-depth case studies with grid/list view toggle, real-time live search, category filtering, status indicators, and tech tags.
4. **Project Detail (`/projects/:slug`)** — Deep-dive case studies featuring problem/solution breakdowns, design process steps, architecture challenges, illustrative metrics, technology chips, and related projects.
5. **Skills & Stack (`/skills`)** — Interactive proficiency bars, status badges (Master, Advanced, Proficient), categorized skill groups, and an active learning roadmap.
6. **Experience (`/experience`)** — Chronological career timeline with detailed responsibilities, education background, illustrative certification badges, and an instant print/export CV button.
7. **Journal (`/journal`)** — Editorial blog layout with search, category filtering, reading time estimates, and rich typography.
8. **Article Detail (`/journal/:slug`)** — Long-form essay reader with pull quotes, syntax-highlighted code snippets, tag filters, author bio, and one-click URL sharing.
9. **Playground (`/playground`)** — Interactive creative laboratory featuring 4 live playable experiments:
   - **Kinetic Particle Matrix:** Canvas 2D spring physics simulation with mouse gravity (attract/repel) and neighbor connection mesh.
   - **Bionic Web Synth:** Polyphonic synthesizer built with Web Audio API with 4 selectable waveforms and real-time oscilloscope waveform monitor. Playable via computer keyboard (`A`–`K`) or on-screen pads.
   - **Atmospheric Gradient Lab:** Interactive mesh gradient generator with angle control, presets, and instant CSS export with confetti celebration.
   - **SiamOS CLI Shell:** Retro-futuristic terminal shell supporting Unix-inspired commands (`help`, `whoami`, `projects`, `skills`, `contact`, `date`, `clear`, `sudo`, `echo`) with command history.
10. **Now (`/now`)** — Inspired by Derek Sivers' `/now` movement. Real-time overview of current focus, learning queue, bookshelf with reading notes, music on heavy rotation, and 2026/2027 milestone progress bars.
11. **Contact (`/contact`)** — Functional contact form with validation, success states, confetti celebration, one-click email copying, and social profile links.
12. **Custom 404 Page (`*`)** — Branded error screen with smooth ambient glow and return home shortcuts.

---

## 🕹️ Interactive Capabilities
- **Command Palette (`Cmd/Ctrl + K`):** Global command center allowing keyboard navigation to any page, case study, essay, theme switch, audio toggle, or email copy.
- **Tactile Audio Feedback:** Synthesized micro-interaction clicks and pops via Web Audio API (toggleable via the speaker icon in the top navigation bar).
- **Dark / Light Mode:** Persistent theme switcher with custom CSS variables and smooth transitions.
- **Scroll Progress Indicator:** Sleek gradient progress line fixed at the top of the screen.
- **Responsive Spotify-Inspired Navigation:** Left sidebar navigation on desktop (collapsible with persistence) and a smooth slide-out drawer on mobile devices.
- **Zero Broken Routes on GitHub Pages:** Implements client-side Hash routing with a fallback `404.html` redirect script, ensuring bookmarks and reloads never trigger 404s on static hosts.

---

## 🛠️ Technology Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animation & Physics:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Interactive Audio:** Native Web Audio API
- **Particle & Waveform Graphics:** HTML5 Canvas API
- **Delight & Celebration:** `canvas-confetti`

---

## 📂 Project Architecture

```
resume/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── 404.html                # Static redirect fallback for GitHub Pages
│   └── favicon.svg             # Custom gradient brand favicon
├── src/
│   ├── components/             # Reusable UI primitives and widgets
│   │   ├── navigation/         # Sidebar, Topbar, MobileDrawer
│   │   ├── playground/         # Kinetic Canvas, Web Synth, Gradient Lab, Terminal
│   │   ├── ui/                 # Badge, Button, Card
│   │   ├── BackToTop.tsx
│   │   ├── CommandPalette.tsx  # Cmd+K interactive palette
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ArticleCard.tsx
│   │   └── ScrollProgress.tsx
│   ├── context/
│   │   ├── ThemeContext.tsx    # Dark/Light theme state & storage
│   │   └── SoundContext.tsx    # Web Audio sound generator & haptics
│   ├── data/
│   │   └── portfolioData.ts    # ⭐ SINGLE EDITABLE DATA SOURCE FOR ALL CONTENT
│   ├── layouts/
│   │   └── RootLayout.tsx      # Main application shell & transitions
│   ├── pages/                  # All 12 application routes
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── SkillsPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── JournalPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   ├── PlaygroundPage.tsx
│   │   ├── NowPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   └── index.css           # Tailwind directives & aesthetic mesh effects
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces
│   ├── utils/
│   │   └── cn.ts               # Classname merge utility
│   ├── App.tsx                 # Router definition
│   └── main.tsx                # React entrypoint
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have Node.js 18 or later installed:
```bash
node -v   # Should be >= 18.0.0
npm -v
```

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Build for Production
Run the strict TypeScript type check and compile production bundles:
```bash
npm run build
```

### 5. Preview Production Build
Preview the generated `dist/` directory locally:
```bash
npm run preview
```

---

## 🎨 How to Customize Content

All text, project details, essays, skills, work experience, and personal details are centralized in:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

To personalize the website for yourself:
1. **Personal Identity:** Update `personalInfo` (name, tagline, bio, social links, email, location).
2. **Projects:** Modify or add items to `projects` array (slug, title, problem, solution, tech stack, gallery images).
3. **Journal Essays:** Add new articles to `articles` array with formatted headings, paragraphs, and code snippets.
4. **Skills:** Adjust levels, categories, and descriptions in `skills` array.
5. **Experience & Education:** Update `experienceTimeline`, `educationList`, and `certificationsList`.
6. **Now Page:** Modify `nowData` to reflect what you are reading, listening to, and building right now.

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured for automated GitHub Pages deployment using **GitHub Actions**.

### Step 1: Initialize Git and Push to GitHub

If you have not yet pushed this repository to GitHub:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files and commit
git add .
git commit -m "feat: complete premium personal portfolio website"

# 3. Create a new repository on GitHub (e.g. named 'resume' or 'portfolio')
# 4. Link your remote repository and push to main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Open your repository on **GitHub**.
2. Navigate to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source:** Select **`GitHub Actions`** (do not select "Deploy from a branch").
4. That's it! The workflow defined in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) will trigger automatically on every push to `main` and deploy your website to:
   ```
   https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/
   ```

### Why It Works Flawlessly:
- **`vite.config.ts`** uses `base: './'`, ensuring scripts, styles, and assets resolve correctly regardless of your repository name.
- **Client-Side Routing:** Uses React Router HashRouter (`/#/projects`, `/#/about`), guaranteeing that refreshing any page or direct deep-linking never produces a 404 error on GitHub Pages.
- **`public/404.html`** provides a static fallback script for direct browser requests.

---

## 🔄 Updating the Website After Deployment

Whenever you want to make changes:

1. Edit your information in `src/data/portfolioData.ts` or modify any component.
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "update: added new case study and journal essay"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild the site and deploy the updates in ~60 seconds.

---

## 📄 License & Notes

- **License:** MIT License. Feel free to use this as your personal portfolio.
- **Illustrative Notice:** All sample company names, client logos, and metrics included are illustrative fictional placeholders to demonstrate portfolio structure and can be edited anytime in `src/data/portfolioData.ts`.
