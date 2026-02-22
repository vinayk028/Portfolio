"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { mobileNavLinkStyles } from "@/lib/styles";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-background shadow-lg p-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={mobileNavLinkStyles()}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
