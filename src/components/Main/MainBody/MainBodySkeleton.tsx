import S from '@components/Main/MainBody/style';
import KSkeleton from '@components/common/Skeleton';
import { FLIP_CARD } from '@constants/policy';

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
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
        <KSkeleton
          variant={'rounded'}
          width={FLIP_CARD.BIG_SIZE}
          height={FLIP_CARD.BIG_SIZE}
        />
      </S.PostList>
    </S.Wrapper>
  );
};

export default PostList;
