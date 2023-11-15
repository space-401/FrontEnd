import { SuggestionDataItem } from 'react-mentions';
import { UserType } from '@type/post.type';
import { ReactNode } from 'react';

export type OneMentionType = {
  suggestion: SuggestionDataItem;
  userList: UserType[];
  highlightedDisplay: ReactNode;
};

export type OneCommentType = {
  postId: number;
  item: CommentType;
  ReplyOpen: (id: number, refId: number) => void;
  ReplyClose: () => void;
  isReply:
    | { open: boolean; refId: number | undefined; id: number | undefined }
    | undefined;
  userList: UserType[];
};

export type CommentType = {
  id: number;
  // 참조하고 있는 아이디가 있는지 없으면 depth 0 댓글
  refId: number;
  // 댓글 작성자의 정보
  writer: {
    id: string;
    memberKey: string;
    nick: string;
    url: string;
  };
  replyMember?: {
    id: string;
    memberKey: string;
    nick: string;
  };
  content: string;
  createDate: string;
  updateDate: string;
  // 이 댓글은 참조중인가?
  isRef: boolean;
  // 이 댓글의 작성자인가?
  isMyComment: boolean;
};

export type SubmitCommentType = {
  postId: number;
  comment: string;
  refInfo?: {
    refId: number;
    refMemberKey: string;
  };
};
