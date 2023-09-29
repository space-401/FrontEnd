import S from '@components/Main/Comments/style';
import { useEffect, useState } from 'react';
import { CommentType } from '@type/space.type';
import commentMock from '@mocks/data/DetailPage/comment.mock';
import OneComment from '@components/Main/Comments/OneComment/OneComment';
import type { UserType } from '@type/post.type';

type DetailCommentType = {
  isOpen: boolean;
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
  const { setIsReply, isReply, isOpen, userList } = props;
  const [list, setList] = useState<CommentType[]>([]);

  useEffect(() => {
    setList(commentMock);
  }, []);

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
          {list.map((item) => (
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
