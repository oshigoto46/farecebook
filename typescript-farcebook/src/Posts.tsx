export type Posts = {
    id: string;
    body: string;
    author_id: number;
    receiver_id: string;
    updated_at: string;
    comment_ids: number[];
    imageUrl: string;
    liker_ids: number[];
    currentUserLikes: boolean;
  };
