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
  const [curPage, setCurPage] = useState(0);

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

  const totalCnt = list.length; // 총 건수
  const disPageCnt = 5; // 화면출력 댓글수
  const totalCommentPage = Math.ceil(totalCnt / disPageCnt); // 댓글의 페이지수

  const selectItem = list.filter(
    (_, i) => curPage * disPageCnt <= i && (curPage + 1) * disPageCnt > i
  );
  const height = 60;

  const Buttons = new Array(totalCommentPage).fill('').map((_, i) => i + 1);

  const changePage = (i: number) => {
    setCurPage(i);
    ReplyClose();
  };

  return (
    <>
      <S.Wrapper>
        <S.CommentList
          isOpen={isOpen}
          height={
            isReply?.open
              ? height * (selectItem.length + 2)
              : height * (selectItem.length + 1)
          }
        >
          {selectItem.map((item) => (
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
        <S.PaginationGroup>
          {Buttons.map((_, i) => (
            <S.PaginationButton
              select={curPage === i}
              onClick={() => changePage(i)}
              key={_}
            >
              {i + 1}
            </S.PaginationButton>
          ))}
        </S.PaginationGroup>
      </S.Wrapper>
    </>
  );
};

export default DetailComments;
