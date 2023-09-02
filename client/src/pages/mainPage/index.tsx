import MainBody, {
  MainBodyPropType,
} from '@pages/mainPage/components/MainBody/MainBody';
import MainHeader, {
  MainHeaderPropType,
} from '@pages/mainPage/components/MainHeader/MainHeader';
import S from '@pages/mainPage/style';

export type MainPageType = MainHeaderPropType & MainBodyPropType;

const MainPage = (props: MainPageType) => {
  const { spaceInfo, tagList, postList, total, page } = props;
  return (
    <S.Wrapper>
      <MainHeader spaceInfo={spaceInfo} tagList={tagList} />
      <MainBody total={total} postList={postList} page={page} />
    </S.Wrapper>
  );
};

export default MainPage;
