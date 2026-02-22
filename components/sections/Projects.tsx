import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "@/data/projects.json";
import { 
  sectionStyles, 
  sectionContainerStyles, 
  sectionHeaderStyles,
  projectCardStyles,
  projectGridStyles
} from "@/lib/styles";

interface ProjectsProps {
  searchQuery?: string;
  activeFilter?: string;
}

export function Projects({ searchQuery = "", activeFilter = "all" }: ProjectsProps) {
  // Filter projects based on search query and active filter
  const filteredProjects = projectsData.items.filter((project) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    if (activeFilter === "all") {
      return matchesSearch;
    }
    
    const matchesFilter = project.tags.some(tag => {
      const tagLower = tag.toLowerCase();
      switch (activeFilter) {
        case "frontend":
          return ["react", "next.js", "vue", "angular", "css", "tailwind", "html", "javascript", "typescript", "redux", "sass", "figma", "lvgl", "ui", "ux"].some(t => tagLower.includes(t));
        case "backend":
          return ["node", "express", "python", "java", "api", "database", "mongodb", "postgresql", "sql", "graphql", "rest", "docker", "backend", "c++", "debugging"].some(t => tagLower.includes(t));
        case "ai":
          return ["ai", "ml", "machine learning", "deep learning", "reinforcement learning", "tensorflow", "pytorch", "data visualization", "gnn", "probabilistic", "graphical models"].some(t => tagLower.includes(t));
        case "cloud":
          return ["aws", "azure", "gcp", "cloud", "cosmos", "graphdb", "redis", "kafka", "docker", "kubernetes", "microservices", "gremlin"].some(t => tagLower.includes(t));
        case "embedded":
          return ["c++", "lvgl", "embedded", "firmware", "iot", "hardware", "rtos"].some(t => tagLower.includes(t));
        default:
          return true;
      }
    });
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className={sectionStyles({ background: "default" })}>
      <div className={sectionContainerStyles({ maxWidth: "xl" })}>
        <header>
          <h2 className={sectionHeaderStyles()}>
            {projectsData.title}
          </h2>
        </header>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </div>
        ) : (
          <ul className={projectGridStyles()}>
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <Card className={projectCardStyles()}>
                  {/* Project Image */}
                  <figure className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </figure>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-3">
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge 
                            variant="secondary" 
                            className="text-xs font-medium hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex gap-3 pt-3 border-t border-border/40">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-muted/30 hover:bg-muted/50"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} code on GitHub`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    <Button asChild size="sm" className="flex-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
