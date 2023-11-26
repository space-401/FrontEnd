import { S } from '@/pages/Main/style';
import { MainBodySkeleton, MainHeaderSkeleton } from '@/components/Main';

export const MainPageSkeleton = () => {
  return (
    <>
      <S.Wrapper>
        <MainHeaderSkeleton />
        <MainBodySkeleton />
      </S.Wrapper>
    </>
  );
};
