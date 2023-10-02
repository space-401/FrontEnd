import S from '@pages/Main/style';
import MainHeader from '@pages/Main/MainHeader/MainHeader';
import PostList from '@pages/Main/PostList/PostList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpaceInfoQuery } from '@hooks/api/space/useSpaceInfoQuery';

const MainPage = () => {
  const [selectState, setSelectState] = useState(false);
  const { spaceId } = useParams();
  const { spaceInfo } = useSpaceInfoQuery(spaceId!);
  const { userList, tagList } = spaceInfo!;
  return (
    <>
      <S.Wrapper>
        <MainHeader
          spaceInfo={spaceInfo!}
          selectState={selectState}
          setSelectState={setSelectState}
        />
        <PostList
          userList={userList}
          tagList={tagList}
          selectState={selectState}
          spaceId={spaceId!}
        />
      </S.Wrapper>
    </>
  );
};

export default MainPage;
