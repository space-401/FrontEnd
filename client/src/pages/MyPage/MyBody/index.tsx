import S from '@pages/MyPage/MyBody/style';
import AccountManagement from '@pages/MyPage/MyBody/components/AccountManagement';
import React from 'react';
import BookMarkList from '@pages/MyPage/MyBody/components/BookMarkList';
import MyPostOrCommentList from '@pages/MyPage/MyBody/components/MyPostOrCommentList';

type MyPageBodyProps = {
  selectNumber: number;
};

const MyPageBody = (props: MyPageBodyProps) => {
  const { selectNumber } = props;
  let BodyInner: React.FC;

  switch (selectNumber) {
    case 0:
      BodyInner = <AccountManagement />;
      break;
    case 1:
      BodyInner = <BookMarkList />;
      break;
    case 2:
      BodyInner = <MyPostOrCommentList />;
      break;
  }

  return <S.Container>{BodyInner}</S.Container>;
};

export default MyPageBody;
