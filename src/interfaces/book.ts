export interface Book {
  title: string;
  description?: string;
  authors: string;
  favorite?: boolean;
  fileCover?: string;
  fileName?: string;
  comments: BookComment[];
}

export interface BookComment {
  author: string;
  content: string;
  createdAt: Date;
}
