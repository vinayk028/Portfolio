"use client";

import { useState, useCallback } from "react";
import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutData from "@/data/about.json";
import {
  sectionStyles,
  sectionContainerStyles,
  sectionHeaderStyles,
  buttonGroupStyles,
  searchContainerStyles,
  searchInputWrapperStyles,
  searchInputStyles,
  searchIconStyles,
  filterButtonStyles,
  filterContainerStyles,
  resumeButtonStyles
} from "@/lib/styles";

const FILTER_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI/ML" },
  { id: "cloud", label: "Cloud & Data" },
  { id: "embedded", label: "Embedded" }
] as const;

interface AboutProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
}

export function About({ onSearch, onFilterChange }: AboutProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch?.(query);
    },
    [onSearch]
  );

  const handleFilterClick = useCallback(
    (filterId: string) => {
      setActiveFilter(filterId);
      onFilterChange?.(filterId);
    },
    [onFilterChange]
  );

  return (
    <section id="about" className={sectionStyles({ background: "default" })}>
      <div className={sectionContainerStyles({ maxWidth: "md" })}>
        <header>
          <h2 className={sectionHeaderStyles()}>About Me</h2>
        </header>

        <div className="space-y-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
            {aboutData.introduction}
          </p>

          {/* Search Section */}
          <div className={searchContainerStyles()}>
            <div className={searchInputWrapperStyles()}>
              <input
                type="text"
                placeholder="Filter this portfolio by any Domain/Skill"
                value={searchQuery}
                onChange={handleSearchChange}
                className={searchInputStyles()}
                aria-label="Search portfolio by domain or skill"
              />
              <Search className={searchIconStyles()} />
            </div>

            {/* Filter Buttons */}
            <div className={filterContainerStyles()}>
              {FILTER_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleFilterClick(category.id)}
                  className={filterButtonStyles({
                    active: activeFilter === category.id
                  })}
                  aria-pressed={activeFilter === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <nav className={buttonGroupStyles()}>
            {aboutData.buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={button.variant as "default" | "outline"}
                className="rounded-full"
              >
                <a href={button.href} target="_blank" rel="noopener noreferrer">
                  {button.label}
                </a>
              </Button>
            ))}

            {/* Download Resume Button */}
            <a
              href="/resume/Thungamitta_VinayKumar_Resume.pdf"
              className={resumeButtonStyles()}
              download
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
