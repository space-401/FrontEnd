import S from '@components/Main/Comments/style';
import OneComment from '@components/Main/Comments/OneComment/OneComment';
import type { UserType } from '@type/post.type';
import { useCommentQuery } from '@hooks/api/comment/useCommentQuery';

type DetailCommentType = {
  isOpen: boolean;
  postId: string;
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

const DetailComments = (props: DetailCommentType) => {
  const { setIsReply, isReply, isOpen, userList, postId } = props;

  const { commentList } = useCommentQuery(postId);

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

export default DetailComments;
