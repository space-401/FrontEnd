import S from '@pages/MainPage/style';
import type { MainBodyPropType, MainHeaderPropType } from '@type/main.type';
import MainHeader from '@pages/MainPage/components/MainHeader/MainHeader';
import MainBody from '@pages/MainPage/components/MainBody/MainBody';

export type MainPageType = MainHeaderPropType & MainBodyPropType;

const MainPage = (props: MainPageType) => {
  const { spaceInfo, userList, tagList, postList, total, page } = props;
  return (
    <S.Wrapper>
      <MainHeader spaceInfo={spaceInfo} />
      <MainBody
        userList={userList}
        tagList={tagList}
        total={total}
        postList={postList}
        page={page}
      />
    </S.Wrapper>
  );
};

export default MainPage;
