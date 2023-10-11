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
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
        <KSkeleton
          sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.BIG + 'px' }}
          variant={'rectangular'}
          width={FLIP_CARD.SIZE.BIG}
          height={FLIP_CARD.SIZE.BIG}
        />
      </S.PostList>
    </S.Wrapper>
  );
};

export default PostList;
