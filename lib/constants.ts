// Site metadata
export const SITE_NAME = "Vinay Kumar";
export const SITE_TITLE = "Vinay Kumar — Software Engineer";
export const SITE_DESCRIPTION =
  "Portfolio of Vinay Kumar, Software Engineer at Light & Wonder — building embedded gaming UIs (C++/LVGL), full-stack web apps (React, Next.js, TypeScript), and AI/ML systems.";
// TODO: replace with the real production URL once deployed (used for SEO/OG tags & sitemap)
export const SITE_URL = "https://tvinaykumar.netlify.app/";

// Navigation links — hash links scroll within the home page (tracked by the
// header scrollspy); plain paths are separate pages.
export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
  { href: "/more", label: "Journey" },
] as const;

// Section ids on the home page, in display order (used by the scrollspy)
export const HOME_SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/vinayk028",
  linkedin: "https://www.linkedin.com/in/vinay-kumar-thungamitta-35668b252/",
  leetcode: "https://leetcode.com/u/thungamittavinaykumar07/",
  email: "thungamittavinaykumar07@gmail.com",
  phone: "+91 7670822528",
} as const;
