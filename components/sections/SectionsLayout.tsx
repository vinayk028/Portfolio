"use client";

import { useState, useCallback } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export function SectionsLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  return (
    <main>
      <Hero />
      <About onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Experience searchQuery={searchQuery} activeFilter={activeFilter} />
      <Projects searchQuery={searchQuery} activeFilter={activeFilter} />
      <Skills />
      <Contact />
    </main>
  );
}
