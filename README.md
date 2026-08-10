# My Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Features a clean design with dark theme, smooth animations, and comprehensive project showcase.

---

## 🚀 Features

- 🎨 **Dark Theme** - Modern dark design with smooth scrolling (scrollbar hidden for clean look)
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- ⚡ **Next.js 16 App Router** - Latest Next.js with React Server Components
- 🎯 **Dynamic Filtering** - Search and filter projects/experience by skills and categories
- 🔍 **SEO Optimized** - Meta tags and semantic HTML structure
- 🎭 **Modern UI Components** - Shadcn/Radix UI components (only the ones in use — lean bundle)
- 📊 **Vercel Analytics** - Built-in performance tracking
- 🎬 **Smooth Animations** - Hover effects, transitions, and scroll animations
- 🎨 **CVA Styling** - Class Variance Authority for consistent component variants
- 📝 **TypeScript** - Full type safety across the application
- 🧩 **Modular Architecture** - Clean separation of concerns (data, types, components, styles)
- 🏷️ **Skill Icons** - 30+ technology logos with vibrant colors (optimized for dark theme)

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.0.10 |
| **Language** | TypeScript 5.x |
| **UI Library** | React 19.2.0 |
| **Styling** | Tailwind CSS 4.1.9 |
| **UI Components** | Radix UI primitives |
| **Component Library** | Shadcn UI (badge, button, card, input, separator, textarea) |
| **Icons** | Lucide React 0.454.0, React Icons 5.5.0 |
| **Theme** | next-themes 0.4.6 (Dark mode default) |
| **Animations** | CSS Transitions & Transforms |
| **Styling Utils** | CVA, clsx, tailwind-merge |
| **Analytics** | @vercel/analytics 1.3.1 |

---

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers & favicon config
│   ├── page.tsx            # Home page (Hero, About, Experience, Projects, Skills, Contact)
│   ├── globals.css         # Global styles, CSS variables, scrollbar hidden
│   └── not-found.tsx       # Custom 404 page
│
├── components/             # React Components
│   ├── providers.tsx       # Theme provider wrapper
│   ├── layout/             # Header, Footer, Navbar
│   ├── sections/           # Hero, About, Experience, Projects, Skills, Contact
│   │   ├── Hero.tsx        # Profile, name, title, social links
│   │   ├── About.tsx       # Introduction, search/filter, download resume button
│   │   ├── Experience.tsx  # Work timeline with company logos & growth icon
│   │   ├── Projects.tsx    # Project cards with images, tags, links
│   │   ├── Skills.tsx      # 5 skill categories with tech logos
│   │   └── Contact.tsx     # Contact information
│   └── ui/                 # Shadcn UI components (only those in use)
│
├── data/                   # Static JSON data files
│   ├── hero.json           # Name, title, profile image, social links
│   ├── about.json          # Introduction text, action buttons
│   ├── experience.json     # 4 work experiences with logos, skills, dates
│   ├── projects.json       # 3 projects with images, tags, links
│   ├── skills.json         # 5 categories: Programming Languages, Web Dev, Databases, DevOps, Tools
│   └── contact.json        # Email, phone, GitHub, LinkedIn, location
│
├── lib/                    # Utilities & Styles
│   ├── constants.ts        # Site metadata & navigation
│   ├── styles.ts           # CVA style variants (20+ definitions)
│   ├── skill-icons.tsx     # Skill icon mappings (30+ tech logos with colors)
│   └── utils.ts            # Helper functions (cn)
│
├── types/                  # TypeScript definitions
│   ├── project.ts          # Project interfaces
│   └── skill.ts            # Skill interfaces
│
└── public/                 # Static assets
    ├── favicon.svg         # Site favicon (V letter logo)
    ├── icon.svg            # Site icon
    └── images/
        ├── companies/      # Experience growth chart logo
        │   └── experience-growth-logo.svg
        └── projects/       # 3 project screenshots
            ├── Evo-Health.png
            ├── Intrusion_Detection.webp
            └── SpaceInvaders-Game.gif
```

---

## 🎨 Design Highlights

### Experience Section
- **Growth Chart Icon** (64x64px) in section header
- **Timeline Design** with gradient line and glowing dots
- **Company Logos** (unified growth chart for all entries)
- **Skill Tags** with hover effects
- **Responsive Cards** with hover animations

### About Section
- **Search Bar** - Filter portfolio by domain/skill
- **6 Filter Categories** - All, Frontend, Backend, AI/ML, Cloud & Data, Embedded
- **Download Resume Button** - Download icon with action

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm**, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 📝 Customization Guide

### 1. Personal Information

Update JSON files in `/data`:

**`hero.json`**
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "profileImage": "/profile.png",
  "profileImageAlt": "Your Name"
}
```

**`about.json`** - Introduction, buttons

**`contact.json`** - Email, phone, social links

**`experience.json`**
```json
{
  "id": "1",
  "role": "Your Role",
  "company": "Company Name",
  "logo": "/images/companies/experience-growth-logo.svg",
  "period": "Jan 2024 - Present",
  "description": "Your responsibilities...",
  "skills": ["React", "TypeScript", "Node.js"]
}
```

**`projects.json`**
```json
{
  "id": "1",
  "title": "Project Name",
  "description": "Description...",
  "tags": ["React", "Next.js"],
  "image": "/images/projects/project.png",
  "liveUrl": "https://...",
  "githubUrl": "https://..."
}
```

**`skills.json`** - Add/remove skills by category

### 2. Styling & Theme

**Hide/Show Scrollbar** (`app/globals.css`)
```css
/* Currently hidden for clean look */
*::-webkit-scrollbar {
  display: none; /* Remove this to show scrollbar */
}
```

**Colors** (`app/globals.css`)
```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  /* Adjust for different color schemes */
}
```

**Component Styles** (`lib/styles.ts`) - CVA variants

### 3. Images & Assets

**Add to `/public`:**
- `profile.png` - Your photo (400x400px recommended)
- `favicon.svg` - Custom favicon
- `images/projects/` - Project screenshots (1200x800px)

### 4. Skill Icons

**Add new skills** (`lib/skill-icons.tsx`):
```typescript
import { SiYourTech } from "react-icons/si"

export const skillIcons: Record<string, IconType> = {
  "Your Tech": SiYourTech,
  // ...
}

export const skillColors: Record<string, string> = {
  "Your Tech": "#FF5733", // Use vibrant colors
  // ...
}
```

### 5. Filters

**Update filter logic** (`components/sections/Experience.tsx`, `Projects.tsx`):
```typescript
case "your-category":
  return ["keyword1", "keyword2"].some(t => skillLower.includes(t));
```

---

## 🎯 Key Features

### 🔍 Search & Filter System
- **Real-time search** across all content
- **6 filter categories** (All, Frontend, Backend, AI/ML, Cloud & Data, Embedded)
- **Keyword matching** on skills, descriptions, tags
- **Synced filtering** between Experience and Projects sections

### 🎨 Visual Design
- **No scrollbar** - Clean, modern look
- **Dark theme** by default
- **Smooth animations** on hover and scroll
- **Gradient effects** on timeline and dividers
- **Drop shadows** on skill icons for contrast

### 📱 Responsive Layout
- **Mobile hamburger menu**
- **Fluid typography** (text-sm to text-xl)
- **Flexible grids** (1-3 columns based on screen size)
- **Touch-optimized** interactive elements

---

## 🚢 Demo
<!-- 
### Vercel 
1. Push code to GitHub
2. Import in [Vercel](https://vercel.com)
3. Deploy automatically -->


## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint code quality check |

---

## 📄 License

Open source under the **MIT License**.

---
<!-- 
## 👤 Author

**Vinay Kumar**

- 💼 Portfolio: [Your Website]
- 💻 GitHub: [@yourusername](https://github.com/yourusername)
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 📧 Email: contact@yoursite.com

--- -->

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - Components
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library
- [Vercel](https://vercel.com/) - Hosting

---

<div align="center">

**Made with ❤️ by Vinay Kumar**

*Last updated: February 21, 2026*

</div>
