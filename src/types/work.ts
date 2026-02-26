export interface IExperience {
  id: number;
  title: string;
  description: string;
  company: string;
  date: string;
  imageSrc: string;
  detailPageUrl?: string; // Optional URL for detail page
  fulldescription?: string; // Optional full description for detail page
  techStack: string[];
}
