import S from '@pages/Main/style';
import MainHeader from '@pages/Main/MainHeader/MainHeader';
import MainBody from '@pages/Main/MainBody/MainBody';
import { useState } from 'react';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';
import { usePostListQuery } from '@hooks/api/post/usePostListQuery';
import { useParams, useSearchParams } from 'react-router-dom';

const MainPage = () => {
  const { spaceInfo, isAdmin, tagList, postList, total, page } = MainPageMock;
  const [selectState, setSelectState] = useState(false);
  const { spaceId } = useParams();
  const [searchParam] = useSearchParams();

  const searchPage: string = searchParam.get('page') ?? '1';
  const searchKeyWord: string = searchParam.get('keyword') ?? '';
  const userId: string = searchParam.get('tagId') ?? '';
  const tagId: string = searchParam.get('userId') ?? '';

  const { postList: test } = usePostListQuery(spaceId!, {
    page: searchPage,
    userId: userId,
    tagId: tagId,
    keyword: searchKeyWord,
  });

  console.log(test);

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
