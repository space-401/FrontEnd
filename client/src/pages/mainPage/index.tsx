import MainBody, {
  MainBodyPropType,
} from '@pages/MainPage/components/MainBody/MainBody';
import MainHeader, {
  MainHeaderPropType,
} from '@pages/MainPage/components/MainHeader/MainHeader';
import S from '@pages/MainPage/style';
import HeaderLayout from '@/components/layout/HeaderLayout/HeaderLayout';

export type MainPageType = MainHeaderPropType & MainBodyPropType;

const MainPage = (props: MainPageType) => {
  const { spaceInfo, tagList, postList, total, page } = props;
  return (
    <HeaderLayout $isContentBox={true}>
      <S.Wrapper>
        <MainHeader spaceInfo={spaceInfo} tagList={tagList} />
        <MainBody total={total} postList={postList} page={page} />
      </S.Wrapper>
    </HeaderLayout>
  );
};

export default MainPage;
