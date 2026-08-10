"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { NAV_LINKS, HOME_SECTION_IDS } from "@/lib/constants";
import { headerStyles, navLinkStyles } from "@/lib/styles";
import { cn, isNavActive } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the nav link of the section currently in view
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      // A narrow horizontal band around the upper-middle of the viewport:
      // a section becomes "active" once it crosses into it
      { rootMargin: "-35% 0px -60% 0px" }
    );

    for (const id of HOME_SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={headerStyles({ scrolled })}>
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Go to home"
        >
          {/* Custom Logo */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg group-hover:shadow-primary/25 group-hover:scale-105 transition-all duration-300">
            <span className="text-primary-foreground font-black text-xl tracking-tighter">
              V
            </span>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
              Vinay Kumar
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-[18px] font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                navLinkStyles(),
                isNavActive(link.href, pathname, activeSection) &&
                  "glow-border bg-primary/15 text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Navbar activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}
