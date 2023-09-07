import S from '@pages/main/style';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';
import { MainPageType } from '@type/main.type';

const MainPage = (props: MainPageType) => {
  const { spaceInfo, tagList, postList, total, page } = props;
  return (
    <HeaderLayout>
      <S.Wrapper>
        <MainHeader spaceInfo={spaceInfo} />
        <MainBody
          userList={spaceInfo.users}
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
