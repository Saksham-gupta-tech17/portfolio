# Modern Interactive Portfolio

A modern, interactive, minimalistic personal portfolio website with smooth animations and high performance. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Design Inspiration

- **Hampus Design Style**: Visual storytelling and clean layout for the About section
- **Ryan Z Wade Style**: Structured content, developer-focused storytelling for About Me + Projects sections  
- **Jon Hecky Style**: Clean, simple, and functional contact section

## ✨ Features

### 🎨 Design
- Minimalist UI with generous white space
- Clean typography (modern sans-serif)
- Dark/light mode toggle
- Responsive design (mobile-first)

### ⚡ Performance
- Fast loading with optimized assets
- Lazy loading for images and components
- SEO-friendly structure
- Component-based architecture

### 🎭 Animations
- Smooth scroll animations (fade, slide, stagger)
- Hover effects on buttons/cards
- Page transitions (light and fast)
- Micro-interactions throughout

### 📄 Sections
1. **Hero Section**: Introduction with name, role, tagline, and CTA buttons
2. **About Section**: Visually engaging layout with personal story and philosophy
3. **Skills Section**: Developer-focused skills grid with progress indicators
4. **Projects Section**: Card-based layout with hover animations and filtering
5. **Contact Section**: Minimal contact form with social links

### 🎯 Bonus Features
- Sticky navbar with smooth scrolling
- Scroll progress indicator
- Custom cursor effects
- Dark/light mode toggle

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
d:/anti/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with sections
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx          # Navigation bar with dark mode toggle
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section (Hampus style)
│   ├── Skills.tsx          # Skills section (Ryan Z Wade style)
│   ├── Projects.tsx        # Projects section with filtering
│   ├── Contact.tsx         # Contact section (Jon Hecky style)
│   ├── Footer.tsx          # Footer with links
│   ├── ScrollProgress.tsx  # Scroll progress indicator
│   └── CursorEffect.tsx    # Custom cursor effects
├── public/                 # Static assets
└── package.json
```

## 🎨 Customization

1. **Content**: Update text content in each component file
2. **Colors**: Modify color variables in `app/globals.css`
3. **Projects**: Edit the `projects` array in `components/Projects.tsx`
4. **Skills**: Update the `skillCategories` in `components/Skills.tsx`
5. **Social Links**: Modify social links in `components/Contact.tsx` and `components/Footer.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## 📄 License

MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from Hampus Design, Ryan Z Wade, and Jon Hecky
- Icons from [Lucide React](https://lucide.dev)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org)

---

**Crafted with ❤️ by saksham gupta**
