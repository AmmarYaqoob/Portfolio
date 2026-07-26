export interface Skill {
  name: string;
  progress: number;
}

export interface Card {
  title: string;
  skills: Skill[];
}