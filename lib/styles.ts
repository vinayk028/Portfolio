import { cva, type VariantProps } from "class-variance-authority";

/* -------------------------------------------------------------------------- */
/*                              SECTION STYLES                                */
/* -------------------------------------------------------------------------- */

export const sectionStyles = cva("py-24 px-4", {
  variants: {
    background: {
      default: "bg-background",
      muted: "bg-muted/50",
      mutedDark: "bg-muted/40 dark:bg-background",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

export const sectionContainerStyles = cva("container mx-auto grid gap-16", {
  variants: {
    maxWidth: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
    },
  },
  defaultVariants: {
    maxWidth: "lg",
  },
});

export const sectionHeaderStyles = cva(
  "text-4xl md:text-5xl lg:text-6xl font-black text-center text-foreground"
);

/* -------------------------------------------------------------------------- */
/*                               CARD STYLES                                  */
/* -------------------------------------------------------------------------- */

export const cardStyles = cva(
  "transition-all duration-300",
  {
    variants: {
      hover: {
        default: "hover:shadow-lg hover:-translate-y-1",
        strong: "hover:shadow-2xl hover:-translate-y-2",
      },
      border: {
        default: "",
        visible: "border border-border/40",
        accent: "hover:border-accent/50",
        primary: "hover:border-primary/30 border border-border/40",
      },
    },
    defaultVariants: {
      hover: "default",
      border: "default",
    },
  }
);

export const projectCardStyles = cva(
  "overflow-hidden h-full group bg-muted/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 border border-border/40"
);

export const skillCardStyles = cva(
  "h-full bg-background hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 border border-border/40"
);

export const experienceCardStyles = cva(
  "ml-8 bg-background hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 border border-border/40"
);

/* -------------------------------------------------------------------------- */
/*                              HERO STYLES                                   */
/* -------------------------------------------------------------------------- */

export const heroCardStyles = cva(
  "max-w-[55rem] w-full bg-background border border-border/40 mb-8 mt-30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/40"
);

export const profileImageWrapperStyles = cva(
  "relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
);

export const heroTitleStyles = cva(
  "text-4xl md:text-5xl font-black mb-3 text-foreground text-balance"
);

export const heroSubtitleStyles = cva(
  "text-sm md:text-base text-muted-foreground font-bold tracking-wider"
);

export const heroTagContainerStyles = cva(
  "flex flex-wrap items-center justify-center gap-3 mt-4"
);

export const resumeButtonStyles = cva(
  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
);

/* -------------------------------------------------------------------------- */
/*                            NAVIGATION STYLES                               */
/* -------------------------------------------------------------------------- */

export const navLinkStyles = cva(
  "px-5 py-2 rounded-xl text-foreground/90 bg-white/3 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:text-foreground active:scale-95"
);

export const mobileNavLinkStyles = cva(
  "block text-sm font-medium hover:text-primary"
);

/* -------------------------------------------------------------------------- */
/*                              BUTTON STYLES                                 */
/* -------------------------------------------------------------------------- */

export const buttonGroupStyles = cva("flex flex-wrap justify-center gap-4");

/* -------------------------------------------------------------------------- */
/*                            SEARCH STYLES                                   */
/* -------------------------------------------------------------------------- */

export const searchContainerStyles = cva(
  "w-full max-w-3xl mx-auto"
);

export const searchInputWrapperStyles = cva(
  "relative flex items-center w-full bg-muted/30 border border-border/60 rounded-full shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 overflow-hidden"
);

export const searchInputStyles = cva(
  "w-full py-4 px-6 pr-14 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
);

export const searchIconStyles = cva(
  "absolute right-5 h-5 w-5 text-muted-foreground"
);

export const filterButtonStyles = cva(
  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
  {
    variants: {
      active: {
        true: "bg-primary text-primary-foreground shadow-md",
        false: "bg-muted/30 border border-border/60 text-muted-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/40",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export const filterContainerStyles = cva(
  "flex flex-wrap justify-center gap-2 mt-6"
);

/* -------------------------------------------------------------------------- */
/*                              LAYOUT STYLES                                 */
/* -------------------------------------------------------------------------- */

export const headerStyles = cva(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
  {
    variants: {
      scrolled: {
        true: "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm",
        false: "bg-background/60 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }
);

export const footerStyles = cva(
  "site-footer bg-muted/50 border-t border-border/40 py-8 px-4"
);

/* -------------------------------------------------------------------------- */
/*                              IMAGE STYLES                                  */
/* -------------------------------------------------------------------------- */

export const projectImageStyles = cva(
  "relative h-52 overflow-hidden bg-muted flex items-center justify-center"
);

export const projectImageInnerStyles = cva(
  "object-contain group-hover:scale-105 transition-transform duration-300"
);

/* -------------------------------------------------------------------------- */
/*                            TIMELINE STYLES                                 */
/* -------------------------------------------------------------------------- */

export const timelineLineStyles = cva(
  "absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent translate-x-1.75"
);

export const timelineDotStyles = cva(
  "absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md shadow-primary/20"
);

/* -------------------------------------------------------------------------- */
/*                            CONTACT STYLES                                  */
/* -------------------------------------------------------------------------- */

export const contactIconWrapperStyles = cva(
  "shrink-0 rounded-full bg-primary/10 p-3 transition-all duration-300 hover:bg-primary/20 hover:scale-110"
);

export const contactIconStyles = cva(
  "h-5 w-5 text-primary"
);

export const contactLinkStyles = cva(
  "text-sm text-muted-foreground hover:text-primary transition-colors break-all"
);

/* -------------------------------------------------------------------------- */
/*                              GRID STYLES                                   */
/* -------------------------------------------------------------------------- */

export const projectGridStyles = cva(
  "grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
);

export const skillGridStyles = cva("grid sm:grid-cols-2 lg:grid-cols-3 gap-6");

/* -------------------------------------------------------------------------- */
/*                           SUCCESS MESSAGE STYLES                           */
/* -------------------------------------------------------------------------- */

export const successIconWrapperStyles = cva(
  "w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg mb-6"
);

/* -------------------------------------------------------------------------- */
/*                              TYPE EXPORTS                                  */
/* -------------------------------------------------------------------------- */

export type SectionStylesProps = VariantProps<typeof sectionStyles>;
export type CardStylesProps = VariantProps<typeof cardStyles>;
export type HeaderStylesProps = VariantProps<typeof headerStyles>;
export type FilterButtonStylesProps = VariantProps<typeof filterButtonStyles>;
