import { S } from './style';
import { OnePostMapCardSkeleton } from './One-PostMapCard.Skeleton';

export const LeftSectionSkeleton = () => {
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
