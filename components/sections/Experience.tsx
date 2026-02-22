import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import experienceData from "@/data/experience.json";
import {
  sectionStyles,
  sectionContainerStyles,
  sectionHeaderStyles,
  experienceCardStyles,
  timelineLineStyles,
  timelineDotStyles
} from "@/lib/styles";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo?: string;
  period: string;
  description: string | string[];
  skills?: string[];
}

interface ExperienceProps {
  searchQuery?: string;
  activeFilter?: string;
}

export function Experience({
  searchQuery = "",
  activeFilter = "all"
}: ExperienceProps) {
  // Filter experience based on search query and active filter
  const filteredExperience = experienceData.items.filter(
    (exp: ExperienceItem) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        exp.role.toLowerCase().includes(searchLower) ||
        exp.company.toLowerCase().includes(searchLower) ||
        (Array.isArray(exp.description)
          ? exp.description.some((desc) =>
              desc.toLowerCase().includes(searchLower)
            )
          : exp.description.toLowerCase().includes(searchLower)) ||
        (exp.skills &&
          exp.skills.some((skill) =>
            skill.toLowerCase().includes(searchLower)
          ));

      if (activeFilter === "all") {
        return matchesSearch;
      }

      const matchesFilter =
        exp.skills &&
        exp.skills.some((skill) => {
          const skillLower = skill.toLowerCase();
          switch (activeFilter) {
            case "frontend":
              return [
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
                "ux"
              ].some((t) => skillLower.includes(t));
            case "backend":
              return [
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
                "debugging"
              ].some((t) => skillLower.includes(t));
            case "ai":
              return [
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
                "graphical models"
              ].some((t) => skillLower.includes(t));
            case "cloud":
              return [
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
                "gremlin"
              ].some((t) => skillLower.includes(t));
            case "embedded":
              return [
                "c++",
                "lvgl",
                "embedded",
                "firmware",
                "iot",
                "hardware",
                "rtos"
              ].some((t) => skillLower.includes(t));
            default:
              return true;
          }
        });

      return matchesSearch && matchesFilter;
    }
  );

  return (
    <section id="experience" className={sectionStyles({ background: "muted" })}>
      <div className={sectionContainerStyles({ maxWidth: "md" })}>
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h2 className={sectionHeaderStyles()}>{experienceData.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve had the
            privilege to work with.
          </p>
        </header>

        {filteredExperience.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No experience found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className={timelineLineStyles()} aria-hidden="true" />

            <ul className="grid gap-10">
              {filteredExperience.map((exp: ExperienceItem, index: number) => (
                <li key={exp.id} className="relative group">
                  {/* Timeline dot */}
                  <div className={timelineDotStyles()} aria-hidden="true" />

                  <Card
                    className={`${experienceCardStyles()} group-hover:shadow-2xl`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        {exp.logo && (
                          <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 border-border/60 bg-background shadow-md group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Role & Company Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between flex-wrap gap-2">
                            <CardTitle className="text-lg md:text-xl font-bold text-foreground leading-tight">
                              {exp.role}
                            </CardTitle>
                            <time className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground whitespace-nowrap bg-primary/5 border border-primary/10 px-3 py-1 rounded-full font-medium">
                              <Calendar className="h-3.5 w-3.5" />
                              {exp.period}
                            </time>
                          </div>
                          <CardDescription className="text-primary font-semibold text-sm md:text-base mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 pt-2">
                      {/* Subtle divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

                      {Array.isArray(exp.description) ? (
                        <ul className="list-disc list-inside text-muted-foreground text-sm md:text-base space-y-2 leading-relaxed">
                          {exp.description.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base whitespace-pre-line">
                          {exp.description}
                        </p>
                      )}

                      {/* Skills tags */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs font-medium bg-primary/5 hover:bg-primary/15 border border-primary/10 text-foreground/80 transition-colors duration-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
