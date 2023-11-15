import S from '@pages/Main/style';
import MainHeaderSkeleton from '@components/Main/MainHeader/MainHeader.skeleton';
import MainBodySkeleton from '@components/Main/MainBody/MainBodySkeleton';

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
