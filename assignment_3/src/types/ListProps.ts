export interface BlogPost {
  _id: string;
  visibility: string;
  title: string;
  content: string;
  user_id: string;
  updated_at: string;
  created_at: string;
}

export interface ListProps {
  data: BlogPost[];
}