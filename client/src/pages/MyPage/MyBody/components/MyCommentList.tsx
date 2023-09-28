import { myCommentListMock } from '@mocks/data/MyPage/MyPageMock';
import Avatar from '@mui/material/Avatar';
import { CL } from '@pages/MyPage/MyBody/components/style';
import Pagination from '@components/common/Pagination';
import React, { useState } from 'react';
import { getFormatDate } from '@utils/formatter';

const MyCommentList = () => {
  const { myCommentList, page, total, ItemLength } = myCommentListMock;

  const [curPage, setCurPage] = useState(page);

  const movePage = (number: number) => {
    setCurPage(number);
  };
  return (
    <>
      <CL.CommentList>
        {myCommentList.map((item) => (
          <CL.OneCommentList key={item.id}>
            <CL.LeftCard>
              <CL.UserCard>
                <Avatar
                  sx={{ width: 28, height: 28, fontSize: 15 }}
                  src={item.writer.url}
                  alt={item.writer.nick}
                />
                <CL.UserNameSpan>{item.writer.nick}</CL.UserNameSpan>
              </CL.UserCard>
              <CL.CardInfo>
                <CL.Comment>{item.content}</CL.Comment>
                <CL.CardBottom>
                  <CL.SpaceTitle>{item.space_title}</CL.SpaceTitle>
                  <CL.CreateAt>{getFormatDate(item.createDate)}</CL.CreateAt>
                </CL.CardBottom>
              </CL.CardInfo>
            </CL.LeftCard>
            <CL.RightCard img_url={item.main_img_url} />
          </CL.OneCommentList>
        ))}
      </CL.CommentList>
      <Pagination
        movePage={movePage}
        page={curPage}
        total={total}
        item_length={ItemLength}
      />
    </>
  );
};

export default MyCommentList;
