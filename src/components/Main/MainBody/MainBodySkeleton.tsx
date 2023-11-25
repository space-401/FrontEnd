import S from '@/components/Main/MainBody/style';
import { KSkeleton } from '@/components/common';
import { FLIP_CARD } from '@/constants';

export const MainBodySkeleton = () => {
  return (
    <S.Wrapper>
      <S.FilterGroup>
        <KSkeleton variant={'rounded'} width={150} height={40} />
        <KSkeleton variant={'rounded'} width={200} height={40} />
        <KSkeleton variant={'rounded'} width={150} height={40} />
        <KSkeleton variant={'rounded'} width={150} height={40} />
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
      </S.PostList>
    </S.Wrapper>
  );
};
