import S from '@pages/Main/MainBody/style';
import KSkeleton from '@components/common/Skeleton';

const PostList = () => {
  return (
    <S.Wrapper>
      <S.FilterGroup>
        <KSkeleton variant={'rounded'} width={105} height={28} />
        <KSkeleton variant={'rounded'} width={105} height={28} />
        <KSkeleton variant={'rounded'} width={105} height={28} />
        <KSkeleton variant={'rounded'} width={105} height={28} />
      </S.FilterGroup>
      <S.PostList>
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
        <KSkeleton variant={'rounded'} width={274} height={274} />
      </S.PostList>
    </S.Wrapper>
  );
};

export default PostList;
