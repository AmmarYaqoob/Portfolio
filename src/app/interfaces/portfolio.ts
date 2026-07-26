export interface Portfolio {
  slug: string;
  title: string;
  country: string;
  techStack: string[];
  description: string;

  challenge: {
    title: string;
    content: string;
    image: string;
  };

  solution: {
    title: string;
    content: string;
    image: string;
  };

  features: string[];

  services: string[];
}