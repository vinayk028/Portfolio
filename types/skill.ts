export interface Skill {
  id: number;
  name: string;
  skills: string[];
}

export interface SkillsData {
  title: string;
  categories: Skill[];
}
