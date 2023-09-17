import { TagType } from '@type/tag.type';
import { UserType } from '@type/user.type';

export type SpacePostType = {
  post_id: number;
  post_title: string;
  place_title: string;
  place_tag: TagType[];
  post_created_at: string;
  post_updated_at: string;
  users: UserType[];
  main_img_url: string;
  sub_img_url?: string[];
  position: { lat: number; lng: number };
};

export type PostDetailType = {
  isMine: boolean;
  post_id: number;
  post_title: string;
  post_description: string;
  place_title: string;
  place_tag: TagType[];
  post_created_at: string;
  post_updated_at: string;
  // 해당 포스트의 태그된 유저 정보
  users: UserType[];
  // 자동완성을 하기 위한 유저 리스트
  user_List: UserType[];
  main_img_url: string;
  sub_img_url: string[];
  position: { lat: number; lng: number };
  commentCount: number;
  isBookMark: boolean;
};

export type SelectSpacePropType = {
  space_id: number;
  space_title: string;
  isLike: boolean;
  user: UserType[];
};

export type CommentType = {
  id: number;
  // 참조하고 있는 아이디가 있는지 없으면 depth 0 댓글
  refId: number;
  // 댓글 작성자의 정보
  writer: {
    id: string;
    // 토큰키 또는 소켓 아이디
    memberKey: string;
    nick: string;
    url: string;
  };
  replyMember?: {
    id: string;
    // 토큰키 또는 소켓 아이디
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
