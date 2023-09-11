import { Project, jaxsProjects } from "./project"

export type Job = {
  company: string,
  role: string,
  timespan: string,
  summary: string,
  projects: Project[]
}

export const jaxsJobs: Job[] = [
  {
    company: 'General Motors IT Innovation Center',
    role: 'Full-Stack Web Developer',
    timespan: `June '21 - October '23`,
    summary: 'My journey in the realm of software development commenced during my tenure at GM, marking a pivotal point in my professional experience. Over the course of three years as a full-stack developer, I found my passion gravitating towards the captivating realm of front-end technologies and web development. While honing my development skills, I also delved into the realm of DevOps, embracing strategies that facilitated Continuous Integration and Continuous Deployment (CI/CD) processes. However, one of the most significant aspects of my time at GM was the opportunity to engage with a diverse array of business clients. This invaluable experience allowed me to refine my communication skills within a professional context, a skill set I consider of paramount importance in my career journey.',
    projects: jaxsProjects
  }
]