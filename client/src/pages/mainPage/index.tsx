import MainHeader, {
  MainHeaderPropType,
} from '@pages/MainPage/components/MainHeader/MainHeader';
import MainBody, {
  MainBodyPropType,
} from '@pages/MainPage/components/MainBody/MainBody';
import S from '@pages/MainPage/style';
import HeaderLayout from '@/components/layout/HeaderLayout/HeaderLayout';
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
