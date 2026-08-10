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
import { Reveal } from "@/components/ui/reveal";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "@/data/projects.json";
import { matchesFilter, matchesSearch } from "@/lib/filters";
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
  const filteredProjects = projectsData.items.filter(
    (project) =>
      matchesSearch(
        [project.title, project.description, project.tags],
        searchQuery
      ) && matchesFilter(project.tags, activeFilter)
  );

  return (
    <section id="projects" className={sectionStyles({ background: "default" })}>
      <div className={sectionContainerStyles({ maxWidth: "xl" })}>
        <Reveal>
          <header>
            <h2 className={sectionHeaderStyles()}>
              {projectsData.title}
            </h2>
          </header>
        </Reveal>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
          </div>
        ) : (
          <ul className={projectGridStyles()}>
            {filteredProjects.map((project, index) => (
              <li key={project.id}>
                <Reveal delay={Math.min(index * 0.08, 0.24)} className="h-full">
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

                    {project.liveUrl && (
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
                    )}
                  </CardFooter>
                </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
