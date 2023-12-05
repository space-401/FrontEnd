import type { CommentType } from '@/types';

/**
 * 포스트 게시물 댓글들의 목 데이터
 */
export const commentList: CommentType[] = [
  {
    id: 147394546,
    refId: 147394546,
    writer: {
      userId: 0,
      userName: '반달카레집사',
      imgUrl: 'https://source.unsplash.com/random/300×300',
    },
    content: '안녕하세요^^',
    createDate: String(new Date()),
    replyMember: {
      userId: 0,
      userName: '반달카레집사',
      imgUrl: 'https://source.unsplash.com/random/300×300',
    },
    isRef: false,
    isMyComment: false,
  },
];

export const postComment = {
  message: 'success',
};

export const deleteComment = {
  message: 'success',
};
