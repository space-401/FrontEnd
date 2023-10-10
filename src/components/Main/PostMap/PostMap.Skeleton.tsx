import S from '@components/Main/PostMap/style';
import LeftSectionSkeleton from '@components/Main/PostMap/components/LeftSection.Skeleton';
import KSkeleton from '@components/common/Skeleton';

const PostMapSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <LeftSectionSkeleton />
        <KSkeleton variant={'rectangular'} width={'100%'} height={'100%'} />
      </S.Container>
    </S.Wrapper>
  );
};

export default PostMapSkeleton;
