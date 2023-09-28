import S from '@pages/main/style';
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';
import { useState } from 'react';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';

const MainPage = () => {
  const { spaceInfo, isAdmin, tagList, postList, total, page } = MainPageMock;

  const [selectState, setSelectState] = useState(false);

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
