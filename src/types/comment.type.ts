import { UserType } from '@/types';
import { ReactNode } from 'react';
import { SuggestionDataItem } from 'react-mentions';
import { ReplyType } from '@/components/Main';

export type OneMentionType = {
  suggestion: SuggestionDataItem;
  userList: UserType[];
  highlightedDisplay: ReactNode;
};

export type OneCommentType = {
  postId: number;
  spaceId: number;
  item: CommentType;
  ReplyOpen: (id: number, refId: number) => void;
  ReplyClose: () => void;
  isReply: ReplyType;
  userList: UserType[];
};

export type CommentType = {
  id: number;
  isRef: boolean;
  refId: number;
  createDate: string;
  content: string;
  replyMember: UserType;
  writer: UserType;
  isMyComment: boolean;
};

export type SubmitCommentType = {
  comment: string;
  refId?: number;
};
