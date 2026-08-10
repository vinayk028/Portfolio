/**
 * Shared search/filter matching for the Experience and Projects sections,
 * driven by the filter categories defined in the About section.
 */

const FILTER_KEYWORDS: Record<string, string[]> = {
  frontend: [
    "react",
    "next.js",
    "vue",
    "angular",
    "css",
    "tailwind",
    "html",
    "javascript",
    "typescript",
    "redux",
    "sass",
    "figma",
    "lvgl",
    "ui",
    "ux",
  ],
  backend: [
    "node",
    "express",
    "python",
    "java",
    "api",
    "database",
    "mongodb",
    "postgresql",
    "sql",
    "graphql",
    "rest",
    "docker",
    "backend",
    "c++",
    "debugging",
  ],
  ai: [
    "ai",
    "ml",
    "machine learning",
    "deep learning",
    "reinforcement learning",
    "tensorflow",
    "pytorch",
    "data visualization",
    "gnn",
    "probabilistic",
    "graphical models",
  ],
  cloud: [
    "aws",
    "azure",
    "gcp",
    "cloud",
    "cosmos",
    "graphdb",
    "redis",
    "kafka",
    "docker",
    "kubernetes",
    "microservices",
    "gremlin",
  ],
  embedded: ["c++", "lvgl", "embedded", "firmware", "iot", "hardware", "rtos"],
};

/** True when any term (skill/tag) matches the active filter's keywords. */
export function matchesFilter(terms: string[], activeFilter: string): boolean {
  if (activeFilter === "all") return true;
  const keywords = FILTER_KEYWORDS[activeFilter];
  if (!keywords) return true;
  return terms.some((term) => {
    const termLower = term.toLowerCase();
    return keywords.some((keyword) => termLower.includes(keyword));
  });
}

/** True when the query appears in any of the given text fields. */
export function matchesSearch(
  fields: Array<string | string[] | undefined>,
  query: string
): boolean {
  if (!query) return true;
  const queryLower = query.toLowerCase();
  return fields.some((field) => {
    if (!field) return false;
    if (Array.isArray(field)) {
      return field.some((value) => value.toLowerCase().includes(queryLower));
    }
    return field.toLowerCase().includes(queryLower);
  });
}
