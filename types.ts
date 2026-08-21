export type ProjectCategory =
  | 'Mobility'
  | 'Finance'
  | 'Commerce'
  | 'Public systems'
  | 'Health & media'
  | 'Travel'
  | 'Consumer';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface LinkedInSource {
  id: string;
  kind: 'Post' | 'Newsletter';
  title: string;
  url: string;
  date: string;
  summary: string;
}

export interface ProjectArticle {
  standfirst: string;
  sections: ArticleSection[];
  takeaway: string;
  publicSurface: string;
  automationLens: string;
  sourceIds: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  liveBrand: string;
  label: string;
  url: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  accent: string;
  icon: string;
  article: ProjectArticle;
}

export interface LinkedInProfile {
  url: string;
  status: string;
}
