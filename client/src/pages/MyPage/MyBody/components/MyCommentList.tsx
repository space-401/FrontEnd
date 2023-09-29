import Avatar from '@mui/material/Avatar';
import { CL } from '@pages/MyPage/MyBody/components/style';
import Pagination from '@components/common/Pagination';
import { useState } from 'react';
import { getFormatDate } from '@utils/formatter';
import { useMyCommentListQuery } from '@hooks/api/user/useMyCommentListQuery';

const MyCommentList = () => {
  const [curPage, setCurPage] = useState(0);

  const { MyCommentListData } = useMyCommentListQuery(curPage);

  const { myCommentList, page, total, itemLength } = MyCommentListData!;

  const movePage = (number: number) => {
    setCurPage(number);
  };

  console.log(myCommentList);
  return (
    <>
      <CL.CommentList>
        {myCommentList.map((item) => {
          const { content, id, writer, createDate, spaceTitle, mainImgUrl } =
            item;
          return (
            <CL.OneCommentList key={id}>
              <CL.LeftCard>
                <CL.UserCard>
                  <Avatar
                    sx={{ width: 28, height: 28, fontSize: 15 }}
                    src={writer.url}
                    alt={writer.nick}
                  />
                  <CL.UserNameSpan>{writer.nick}</CL.UserNameSpan>
                </CL.UserCard>
                <CL.CardInfo>
                  <CL.Comment>{content}</CL.Comment>
                  <CL.CardBottom>
                    <CL.SpaceTitle>{spaceTitle}</CL.SpaceTitle>
                    <CL.CreateAt>{getFormatDate(createDate)}</CL.CreateAt>
                  </CL.CardBottom>
                </CL.CardInfo>
              </CL.LeftCard>
              <CL.RightCard img_url={mainImgUrl} />
            </CL.OneCommentList>
          );
        })}
      </CL.CommentList>
      <Pagination
        movePage={movePage}
        page={page}
        total={total}
        itemLength={itemLength}
      />
    </>
  );
};

export default MyCommentList;
