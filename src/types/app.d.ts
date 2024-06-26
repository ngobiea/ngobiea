interface Project {
  title: string;
  rationale: string;
  description: string;
  features: string[];
  technologies: Technology[];
  tools: Tool[];

  url: string;
  github: {
    url: string;
    name: string;
    author: string;
    stars?: number;
    forks?: number;
    isPublic: boolean;
    downloadUrl: string | null;
  }
  images: { alt: string; src: string }[];
  lessonsLearned: string[];
  startDate: Date;
  endDate: Date | null;
  published: boolean;
  status: ProjectStatus;
  slug: string;
  youtube: string|null;
}

interface Technology {
  title: string;
  icon: JSX.Element;
  url: string;
}
interface Tool {
  title: string;
  icon: JSX.Element;
  url: string;
}
interface ProjectStatus{
  status: string;
  comment: string;
}