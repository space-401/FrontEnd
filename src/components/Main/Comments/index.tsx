import { useCommentQuery } from '@/hooks';
import type { UserType } from '@/types';
import { OneComment } from './OneComment/OneComment';
import S from './style';

type DetailCommentType = {
  spaceId: number;
  isOpen: boolean;
  postId: number;
  isReply:
    | {
        open: boolean;
        refId: number | undefined;
        id: number | undefined;
      }
    | undefined;
  setIsReply: (
    newReply:
      | { open: boolean; refId: number | undefined; id: number | undefined }
      | undefined
  ) => void;
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
          {commentList?.map((item) => (
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
          ))}
        </S.CommentList>
      </S.Wrapper>
    </>
  );
};
