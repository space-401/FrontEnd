import { S } from '@components/Main/PostMap/components/style';
import OnePostMapCardSkeleton from '@components/Main/PostMap/components/One-PostMapCard.Skeleton';

const LeftSectionSkeleton = () => {
  return (
    <S.Wrapper>
      <OnePostMapCardSkeleton />
      <OnePostMapCardSkeleton />
      <OnePostMapCardSkeleton />
      <OnePostMapCardSkeleton />
      <OnePostMapCardSkeleton />
    </S.Wrapper>
  );
};

export default LeftSectionSkeleton;
