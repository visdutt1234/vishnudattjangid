export interface Project {
  ix: string;
  name: string;
  url: string;
  desc: string;
  tags: string[];
}

export interface Post {
  featured: boolean;
  title: string;
  embed: string;
  height: number;
  url: string;
}

export interface Job {
  company: string;
  role: string;
  location: string;
  dates: string;
  impact: string;
  bullets: string[];
  metric?: string;
}

export interface QuarterWork {
  title: string;
  status: "shipping" | "wip" | "writing" | "exploring";
  statusLabel: string;
  desc: string;
  tags: string[];
}

export interface StackModule {
  tag: string;
  title: string;
  desc: string;
  chips: string[];
}
