export interface Repository {
  id: string;
  name: string;
  stargazers_count: number;
  forks: string;
  full_name: string;
  html_url: string;
  description: string;
  archived: boolean;
  created_at: string;
  pushed_at: string;
  language: string;
  owner: {
    avatar_url: string;
  };
  [key: string]: unknown;
}
