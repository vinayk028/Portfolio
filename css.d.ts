/**
 * CSS Type Declarations
 * 
 * This file provides TypeScript type definitions for CSS modules,
 * CSS custom properties, and style-related types used in the portfolio.
 * 
 * @lastUpdated December 31, 2025
 */

/* -------------------------------------------------------------------------- */
/*                           CSS MODULE DECLARATIONS                          */
/* -------------------------------------------------------------------------- */

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

/* -------------------------------------------------------------------------- */
/*                          CSS CUSTOM PROPERTIES                             */
/* -------------------------------------------------------------------------- */

/**
 * CSS Custom Properties (CSS Variables) used in the design system
 * These correspond to the variables defined in globals.css
 */
export interface CSSCustomProperties {
  // Core Colors
  "--background": string;
  "--foreground": string;

  // Component Colors
  "--card": string;
  "--card-foreground": string;
  "--popover": string;
  "--popover-foreground": string;

  // Brand Colors
  "--primary": string;
  "--primary-foreground": string;
  "--secondary": string;
  "--secondary-foreground": string;

  // Utility Colors
  "--muted": string;
  "--muted-foreground": string;
  "--accent": string;
  "--accent-foreground": string;
  "--destructive": string;

  // UI Colors
  "--border": string;
  "--input": string;
  "--ring": string;

  // Chart Colors
  "--chart-1": string;
  "--chart-2": string;
  "--chart-3": string;
  "--chart-4": string;
  "--chart-5": string;

  // Spacing
  "--radius": string;

  // Sidebar Colors
  "--sidebar": string;
  "--sidebar-foreground": string;
  "--sidebar-primary": string;
  "--sidebar-primary-foreground": string;
  "--sidebar-accent": string;
  "--sidebar-accent-foreground": string;
  "--sidebar-border": string;
  "--sidebar-ring": string;
}

/* -------------------------------------------------------------------------- */
/*                           THEME TYPE DEFINITIONS                           */
/* -------------------------------------------------------------------------- */

/**
 * Theme modes supported by the application
 */
export type ThemeMode = "light" | "dark" | "system";

/**
 * Color scheme type for CSS color-scheme property
 */
export type ColorScheme = "light" | "dark" | "light dark";

/* -------------------------------------------------------------------------- */
/*                          STYLE VARIANT TYPES                               */
/* -------------------------------------------------------------------------- */

/**
 * Section background variants
 */
export type SectionBackground = "default" | "muted" | "mutedDark";

/**
 * Section container max-width variants
 */
export type SectionMaxWidth = "sm" | "md" | "lg" | "xl";

/**
 * Card hover effect variants
 */
export type CardHoverVariant = "default" | "strong";

/**
 * Card border variants
 */
export type CardBorderVariant = "default" | "visible" | "accent" | "primary";

/**
 * Button size variants
 */
export type ButtonSize = "default" | "sm" | "lg" | "icon";

/**
 * Button style variants
 */
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

/* -------------------------------------------------------------------------- */
/*                         RESPONSIVE BREAKPOINTS                             */
/* -------------------------------------------------------------------------- */

/**
 * Tailwind CSS default breakpoints
 */
export interface Breakpoints {
  sm: "640px";
  md: "768px";
  lg: "1024px";
  xl: "1280px";
  "2xl": "1536px";
}

/**
 * Breakpoint keys
 */
export type BreakpointKey = keyof Breakpoints;

/* -------------------------------------------------------------------------- */
/*                           ANIMATION TYPES                                  */
/* -------------------------------------------------------------------------- */

/**
 * Common animation durations
 */
export type AnimationDuration = "150" | "200" | "300" | "500" | "700" | "1000";

/**
 * Common animation timing functions
 */
export type AnimationEasing =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out";

/* -------------------------------------------------------------------------- */
/*                         SPACING & SIZING TYPES                             */
/* -------------------------------------------------------------------------- */

/**
 * Common spacing values (in Tailwind units)
 */
export type SpacingValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64";

/**
 * Border radius values
 */
export type BorderRadius =
  | "none"
  | "sm"
  | "default"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

/* -------------------------------------------------------------------------- */
/*                         TYPOGRAPHY TYPES                                   */
/* -------------------------------------------------------------------------- */

/**
 * Font size scale
 */
export type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

/**
 * Font weight values
 */
export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

/* -------------------------------------------------------------------------- */
/*                         SHADOW TYPES                                       */
/* -------------------------------------------------------------------------- */

/**
 * Shadow size variants
 */
export type ShadowSize =
  | "sm"
  | "default"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "inner"
  | "none";

/* -------------------------------------------------------------------------- */
/*                      EXTEND CSS PROPERTIES                                 */
/* -------------------------------------------------------------------------- */

declare module "react" {
  interface CSSProperties {
    // Allow CSS custom properties
    [key: `--${string}`]: string | number | undefined;
  }
}
