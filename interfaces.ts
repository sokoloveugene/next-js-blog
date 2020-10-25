export interface Post {
  title: string;
  body: string;
  id: number;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  postId: number;
  body: string;
}
