export interface Project {
  id: string;
  unitIndex: string;
  name: string;
  badge: 'Live' | 'Coming Soon';
  iconType: 'pedi' | 'cdn' | 'spam' | 'file';
  description: string;
  tags: string[];
  status: string;
  statusType: 'live' | 'dev';
  link?: string;
  details?: {
    overview: string;
    features: string[];
    tech: string[];
    highlights: string;
  };
}

export type ThemeMode = 'dark' | 'light';
