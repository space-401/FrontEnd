import React, { useState } from 'react';
import Navbar from '@pages/MyPage/Navbar';
import MyBody from '@pages/MyPage/MyBody';
import S from '@pages/MyPage/style';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';

const MyPage = () => {
  const [selectNumber, setSelectNumber] = useState<number>(0);

  return (
    <HeaderLayout>
      <S.MyPageWrapper>
        <Navbar selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
        <MyBody selectNumber={selectNumber} />
      </S.MyPageWrapper>
    </HeaderLayout>
  );
};

export default MyPage;
