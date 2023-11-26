import { OnePostMapCardSkeleton } from './One-PostMapCard.Skeleton';
import { S } from './style';

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
