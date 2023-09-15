import S from '@components/Main/Comments/style';
import React, { SetStateAction, useEffect, useState } from 'react';
import { CommentType } from '@type/space.type';
import commentMock from '@mocks/data/DetailPage/comment.mock';
import OneComment from '@components/Main/Comments/OneComment/OneComment';

type DetailCommentType = {
  isOpen: boolean;
  isReply: { open: boolean; id: number | undefined } | undefined;
  setIsReply: React.Dispatch<
    SetStateAction<{ open: boolean; id: number | undefined } | undefined>
  >;
};

const DetailComments = (props: DetailCommentType) => {
  const { setIsReply, isReply, isOpen } = props;
  const [list, setList] = useState<CommentType[]>([]);

  useEffect(() => {
    setList(commentMock);
  }, []);

  const ReplyClose = () => {
    setIsReply({ open: false, id: undefined });
  };

  const ReplyOpen = (id: number) => {
    if (isReply?.open) {
      ReplyClose();
    }
    setIsReply({ open: true, id: id });
  };

  return (
    <>
      <S.Wrapper>
        <S.CommentList isOpen={isOpen}>
          {list.map((item) => (
            <OneComment
              key={item.id}
              id={item.id}
              refId={item.refId}
              writer={item.writer}
              content={item.content}
              createDate={item.createDate}
              updateDate={item.updateDate}
              isRef={item.isRef}
              isMyComment={item.isMyComment}
              replyMember={item.replyMember}
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
