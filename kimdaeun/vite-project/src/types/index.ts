export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface InitPosts {
  isLoading: boolean;
  value?: Post[];
}
