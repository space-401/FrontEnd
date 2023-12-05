import { useCommentQuery } from '@/hooks';
import type { UserType } from '@/types';
import { OneComment } from './OneComment/OneComment';
import S from './style';

export type ReplyType = {
  open: boolean;
  refId?: number;
  id?: number;
};

type DetailCommentType = {
  spaceId: number;
  isOpen: boolean;
  postId: number;
  isReply: ReplyType;
  setIsReply: (newIsReply: ReplyType) => void;
  userList: UserType[];
};

export const DetailComments = (props: DetailCommentType) => {
  const { setIsReply, isReply, spaceId, isOpen, userList, postId } = props;

  const { commentList } = useCommentQuery(postId, spaceId);

  const ReplyClose = () => {
    setIsReply({ open: false, refId: undefined, id: undefined });
  };

  const ReplyOpen = (id: number, refId: number) => {
    if (isReply?.open) {
      ReplyClose();
    }
    setIsReply({ open: true, refId: refId, id: id });
  };

  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <S.CommentList isOpen={isOpen}>
          {commentList?.length ? (
            commentList.map((item) => (
              <OneComment
                spaceId={spaceId}
                postId={postId}
                key={item.id}
                userList={userList}
                item={item}
                ReplyOpen={ReplyOpen}
                ReplyClose={ReplyClose}
                isReply={isReply}
              />
            ))
          ) : (
            <S.EmptyList>작성된 댓글이 없습니다.</S.EmptyList>
          )}
        </S.CommentList>
      </S.Wrapper>
    </>
  );
};
