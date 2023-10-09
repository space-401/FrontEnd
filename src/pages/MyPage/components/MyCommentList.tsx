import { A, CL } from '@pages/MyPage/components/style';
import Pagination from '@components/common/Pagination';
import { useState } from 'react';
import { getFormatDate } from '@utils/formatter';
import { useMyCommentListQuery } from '@hooks/api/user/useMyCommentListQuery';
import { timeHelper } from '@utils/time-helper';
import { ReactComponent as FeatherSvg } from '@assets/svg/feather.svg';
import { useDetailModalOpen } from '@hooks/common/useDetailModalOpen';

const MyCommentList = () => {
  const [curPage, setCurPage] = useState(0);

  const { MyCommentListData } = useMyCommentListQuery(curPage);

  const { myCommentList, page, total, itemLength } = MyCommentListData!;

  const movePage = (number: number) => {
    setCurPage(number);
  };

  const detailModalOpen = useDetailModalOpen();

  return (
    <>
      <>
        {myCommentList.map((item) => {
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
            <>
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
                      <CL.CreateAt>{timeHelper(commentCreateDate)}</CL.CreateAt>
                    </CL.CommentInfoBox>
                  </CL.CommentInfo>
                </CL.CardInfo>
                <CL.RightCard img_url={mainImgUrl} />
              </CL.OneCommentList>
              <A.Bar margin_top={0} />
            </>
          );
        })}
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

export default MyCommentList;
