import { useState } from 'react';
import Navbar from '@pages/MyPage/Navbar';
import MyBody from '@pages/MyPage/MyBody';
import S from '@pages/MyPage/style';

const MyPage = () => {
  const [selectNumber, setSelectNumber] = useState<number>(0);

  return (
    <S.MyPageWrapper>
      <Navbar selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
      <MyBody selectNumber={selectNumber} />
    </S.MyPageWrapper>
  );
};

export default MyPage;
