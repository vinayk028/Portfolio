import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import skillsData from "@/data/skills.json"
import { getSkillIcon, getSkillColor } from "@/lib/skill-icons"
import { 
  sectionStyles, 
  sectionContainerStyles, 
  sectionHeaderStyles,
} from "@/lib/styles"

export function Skills() {
  return (
    <section id="skills" className={sectionStyles({ background: "muted" })}>
      <div className={sectionContainerStyles({ maxWidth: "lg" })}>
        <header>
          <h2 className={sectionHeaderStyles()}>
            {skillsData.title}
          </h2>
        </header>

        {/* Single full-width card with same bg as Experience cards */}
        <Card className="h-full bg-background hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 border border-border/40">
          <CardContent className="p-8">
            {skillsData.categories.map((category, index) => (
              <div key={category.id}>
                {/* Category section */}
                <div className="mb-6">
                  <CardTitle className="text-xl font-bold text-primary flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {category.name}
                  </CardTitle>
                  
                  <ul className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = getSkillIcon(skill)
                      const skillColor = getSkillColor(skill)
                      return (
                        <li key={skill}>
                          <Badge 
                            variant="secondary" 
                            className="text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 cursor-default flex items-center gap-3 py-3 px-4 group hover:bg-primary/15 border border-border/30"
                          >
                            {SkillIcon && (
                              <SkillIcon 
                                className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-sm" 
                                style={{ color: skillColor }}
                              />
                            )}
                            <span>{skill}</span>
                          </Badge>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Separator between categories (except after last one) */}
                {index < skillsData.categories.length - 1 && (
                  <Separator className="my-6" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
