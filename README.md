# 🏠 Vincent Woo's Portfolio Homepage

> 🚀 A modern, responsive personal portfolio website built with Next.js and Chakra UI

### 🌐 Live Demo: [https://vincent-homepage.web.app/](https://vincent-homepage.web.app/)

---

## ✨ Features

- 🎨 **Modern UI Design** - Clean, professional layout with smooth animations
- 🌙 **Dark/Light Mode** - Toggle between themes for comfortable viewing
- 📱 **Fully Responsive** - Looks great on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Static site generation for blazing fast load times
- 🖼️ **Portfolio Gallery** - Showcase projects with interactive image lightbox
- 📊 **Work Timeline** - Visual timeline of professional experience
- 🎭 **Smooth Animations** - Subtle animations powered by Framer Motion

## 🛠️ Tech Stack

| Technology       | Purpose                        |
| ---------------- | ------------------------------ |
| ⚛️ Next.js       | React framework for SSG/SSR    |
| 💅 Chakra UI     | Component library & styling    |
| 🎬 Framer Motion | Animations                     |
| 🌐 Three.js      | Optional interactive 3D planet |
| 🔥 Firebase      | Hosting                        |
| 📸 PhotoSwipe    | Image gallery lightbox         |

## 🙏 Credits

> Thanks to [craftzdog](https://github.com/craftzdog/craftzdog-homepage) 🇯🇵 - Full stack developer from Japan
>
> This portfolio follows his excellent [YouTube tutorial](https://www.youtube.com/watch?v=bSMZgXzC9AA) 📺
> Great practice for learning Next.js! 📚

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js 22+
- npm or yarn

### 💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🎉

### 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

---

## 📁 Project Structure

```
vincent-homepage/
├── 📂 components/     # Reusable UI components
├── 📂 lib/            # Utility functions & 3D model
├── 📂 pages/          # Next.js pages & routes
│   ├── 📂 portfolio/  # Portfolio project pages
│   └── 📄 index.js    # Homepage
├── 📂 public/         # Static assets & images
└── 📄 package.json    # Dependencies
```

## 🔥 Firebase Hosting Setup

For setting up Firebase hosting with Next.js static export:

📖 Reference: [Deploy Next.js with Firebase Hosting](https://medium.com/nerd-for-tech/lets-deploy-a-next-js-app-with-firebase-hosting-e070b3aecd04)

---

## 📄 License

MIT © Vincent Woo

---

Made with ❤️ and ☕ in Hong Kong 🇭🇰

## Optimization workflow

- `npm ci` installs locked dependencies.
- `npm run dev` prepares responsive images and starts local development.
- `npm run lint` and `npm test` check source and regression coverage.
- `npm run build` prepares images and writes the Firebase-ready static site to `out/`.
- `npm run check:export` verifies metadata, image references, readable HTML, and 404 configuration.
- `npm run preview` serves the production site at `http://localhost:3000` (or the next available port), including clean URLs and proper 404 responses.

The site uses Next.js 16 Pages Router, React 18, and Chakra UI 2. React 18 preserves compatibility with the existing Chakra components; moving to Chakra UI 3 and React 19 is a separate migration. Project dates and technology lists are shared between the archive and detail pages in `data/projects.js`.

Images are resized to real WebP variants during development/build, without an image service or runtime server. Generated assets in `public/_optimized/` and `lib/generated-images.json` are cached locally and excluded from Git. The 3D planet loads only when opened and pauses when offscreen or in a background tab.
