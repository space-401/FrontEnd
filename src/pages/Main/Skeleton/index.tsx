import S from '@pages/Main/style';
import MainHeaderSkeleton from '@pages/Main/MainHeader/MainHeader.skeleton';
import MainBodySkeleton from '@pages/Main/MainBody/MainBodySkeleton';

const MainPageSkeleton = () => {
  return (
    <>
      <S.Wrapper>
        <MainHeaderSkeleton />
        <MainBodySkeleton />
      </S.Wrapper>
    </>
  );
};

export default MainPageSkeleton;
