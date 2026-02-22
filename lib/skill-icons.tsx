import { IconType } from "react-icons"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiHtml5, 
  SiCss3,
  SiMongodb,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiUbuntu,
  SiWireshark,
  SiYaml,
  SiGithubactions,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiPerforce,
  SiMysql,
  SiGraphql,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si"
import { FaJava, FaPython, FaDatabase } from "react-icons/fa"
import { TbApi, TbNetwork, TbDatabase, TbBraces } from "react-icons/tb"

export const skillIcons: Record<string, IconType> = {
  // Programming Languages
  "C++": SiCplusplus,
  "Java": FaJava,
  "Python": FaPython,
  "C": SiC,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "SQL": FaDatabase,

  // Software Development (Web)
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Redux": TbDatabase,
  "Zustand": TbDatabase,
  "Express.js": SiExpress,
  "RESTful API": TbApi,
  "GraphQL": SiGraphql,
  "WebSocket": SiSocketdotio,
  "JSON": TbBraces,

  // Databases
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,

  // DevOps & Deployment
  "Git": SiGit,
  "GitHub Actions": SiGithubactions,
  "CI/CD": TbApi,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "YAML": SiYaml,
  "Perforce": SiPerforce,

  // Tools & Technologies
  "Linux": SiLinux,
  "Ubuntu": SiUbuntu,
  "NetworkMiner": TbNetwork,
  "Wireshark": SiWireshark,
}

// Bright, vibrant colors visible on both light and dark themes
export const skillColors: Record<string, string> = {
  // Programming Languages
  "C++": "#659AD2",
  "Java": "#F89820",
  "Python": "#4B8BBE",
  "C": "#6295CB",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "SQL": "#E38C00",

  // Software Development (Web)
  "HTML": "#E44D26",
  "CSS": "#2965F1",
  "React.js": "#61DAFB",
  "Next.js": "#808080",
  "Redux": "#764ABC",
  "Zustand": "#F59E0B",
  "Express.js": "#68A063",
  "RESTful API": "#26C6DA",
  "GraphQL": "#E535AB",
  "WebSocket": "#50C878",
  "JSON": "#F5A623",

  // Databases
  "MySQL": "#00758F",
  "MongoDB": "#4DB33D",

  // DevOps & Deployment
  "Git": "#F05032",
  "GitHub Actions": "#2088FF",
  "CI/CD": "#42A5F5",
  "Docker": "#2496ED",
  "Kubernetes": "#326CE5",
  "YAML": "#E04E4E",
  "Perforce": "#A0A0A0",

  // Tools & Technologies
  "Linux": "#FCC624",
  "Ubuntu": "#E95420",
  "NetworkMiner": "#66BB6A",
  "Wireshark": "#5CC4E8",
}

export function getSkillIcon(skillName: string): IconType | null {
  return skillIcons[skillName] || null
}

export function getSkillColor(skillName: string): string {
  return skillColors[skillName] || "#6B7280"
}
