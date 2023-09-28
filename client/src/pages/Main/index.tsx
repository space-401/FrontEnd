import S from '@pages/Main/style';
import MainHeader from '@pages/Main/MainHeader/MainHeader';
import MainBody from '@pages/Main/MainBody/MainBody';
import { useState } from 'react';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';
import * as process from 'process';

const MainPage = () => {
  const { spaceInfo, isAdmin, tagList, postList, total, page } = MainPageMock;

  const [selectState, setSelectState] = useState(false);
  console.log(process.env.NODE_ENV);
  return (
    <>
      <S.Wrapper>
        <MainHeader
          isAdmin={isAdmin}
          selectState={selectState}
          setSelectState={setSelectState}
          spaceInfo={spaceInfo}
        />
        <MainBody
          selectState={selectState}
          userList={spaceInfo.users}
          tagList={tagList}
          total={total}
          postList={postList}
          page={page}
        />
      </S.Wrapper>
    </>
  );
};

export default MainPage;
