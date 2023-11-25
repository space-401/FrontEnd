import S from './style';
import { LeftSectionSkeleton } from '@/components/Main';
import { KSkeleton } from '@/components/common';

export const PostMapSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <LeftSectionSkeleton />
        <KSkeleton variant={'rectangular'} width={'100%'} height={'100%'} />
      </S.Container>
    </S.Wrapper>
  );
};
