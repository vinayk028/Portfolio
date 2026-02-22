"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { NAV_LINKS } from "@/lib/constants";
import { headerStyles, navLinkStyles } from "@/lib/styles";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={headerStyles({ scrolled })}>
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group"
          aria-label="Go to home"
        >
          {/* Custom Logo */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center shadow-lg group-hover:shadow-primary/25 group-hover:scale-105 transition-all duration-300">
            {/* Letter V with stylish design */}
            <span className="text-primary-foreground font-black text-xl tracking-tighter">
              V
            </span>
            {/* Decorative dot */}
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
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-[18px] font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navLinkStyles()}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
