import S from '@pages/main/style';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import type { MainBodyPropType, MainHeaderPropType } from '@type/main.type';
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';

export type MainPageType = MainHeaderPropType & MainBodyPropType;

const MainPage = (props: MainPageType) => {
  const { spaceInfo, userList, tagList, postList, total, page } = props;
  return (
    <HeaderLayout>
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
    </HeaderLayout>
  );
};

export default MainPage;
