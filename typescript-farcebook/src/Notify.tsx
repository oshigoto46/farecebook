export type Notify = {
    id: string;
    created_at: string;
    sourceItemId: number;
    sourceItemType: string;
    notifierId: number;
    likeNotification: boolean;
    topLevelComment: boolean;
    unread: boolean;
  };