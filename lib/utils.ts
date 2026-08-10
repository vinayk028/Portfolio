import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns true when the given nav link is active. Hash links (e.g. "/#about")
 * are active when the matching home-page section is in view (activeSection,
 * tracked by the header scrollspy); plain paths match the pathname.
 */
export function isNavActive(
  href: string,
  pathname: string,
  activeSection?: string
): boolean {
  if (href.startsWith("/#")) {
    return pathname === "/" && href === `/#${activeSection}`;
  }
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}
