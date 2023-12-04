import { useDetailModalOpen, useMyCommentListQuery } from '@/hooks';
import { getFormatDate, timeHelper } from '@/utils';
import { Fragment, useState } from 'react';
import { v4 } from 'uuid';
import { ReactComponent as FeatherSvg } from '@/assets/svg/feather.svg';
import { Pagination } from '@/components/common';
import { A, CL } from './style';

export const MyCommentList = () => {
  const [curPage, setCurPage] = useState(1);

  const { MyCommentListData } = useMyCommentListQuery(curPage);

  const { myCommentList, page, total, itemLength } = MyCommentListData!;

  const movePage = (number: number) => {
    setCurPage(number);
  };

  const detailModalOpen = useDetailModalOpen();

  return (
    <>
      <>
        {myCommentList.length ? (
          myCommentList.map((item) => {
            const {
              mainImgUrl,
              postContent,
              postCreateDate,
              commentCreateDate,
              commentId,
              postTitle,
              spaceTitle,
              commentContent,
              postId,
            } = item;
            return (
              <Fragment key={v4()}>
                <CL.OneCommentList
                  onClick={() => detailModalOpen(postId)}
                  key={commentId}
                >
                  <CL.CardInfo>
                    <CL.PostTitle>{postTitle}</CL.PostTitle>
                    <CL.PostContent>{postContent}</CL.PostContent>
                    <CL.CardBottom>
                      <CL.SpaceTitle>{spaceTitle}</CL.SpaceTitle>
                      <CL.CreateAt>{getFormatDate(postCreateDate)}</CL.CreateAt>
                    </CL.CardBottom>
                    <CL.CommentInfo>
                      <CL.CommentIconBox>
                        <FeatherSvg />
                      </CL.CommentIconBox>
                      <CL.CommentInfoBox>
                        <CL.Comment>{commentContent}</CL.Comment>
                        <CL.CreateAt>
                          {timeHelper(commentCreateDate)}
                        </CL.CreateAt>
                      </CL.CommentInfoBox>
                    </CL.CommentInfo>
                  </CL.CardInfo>
                  <CL.RightCard img_url={mainImgUrl} />
                </CL.OneCommentList>
                <A.Bar margin_top={0} />
              </Fragment>
            );
          })
        ) : (
          <CL.EmptyList>작성된 댓글이 없습니다.</CL.EmptyList>
        )}
      </>
      <A.PaginationBox>
        <Pagination
          movePage={movePage}
          page={page}
          total={total}
          itemLength={itemLength}
        />
      </A.PaginationBox>
    </>
  );
};
