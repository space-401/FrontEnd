import { S } from '@/pages/SelectSpace/style';
import { KSkeleton } from '@/components/common';
import { FLIP_CARD } from '@/constants/policy';

export const SelectSpaceSkeleton = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <KSkeleton
          variant={'rounded'}
          sx={{ margin: '115.23px auto 61.16px' }}
          width={233}
          height={68.6}
        />
        <S.Content>
          <S.ButtonContainer>
            <KSkeleton variant={'rounded'} width={86} height={32} />
          </S.ButtonContainer>
          <S.SpaceContainer>
            <KSkeleton
              variant={'rectangular'}
              sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.MEDIUM + 'px' }}
              width={FLIP_CARD.SIZE.MEDIUM}
              height={FLIP_CARD.SIZE.MEDIUM}
            />
            <KSkeleton
              variant={'rectangular'}
              sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.MEDIUM + 'px' }}
              width={FLIP_CARD.SIZE.MEDIUM}
              height={FLIP_CARD.SIZE.MEDIUM}
            />
            <KSkeleton
              variant={'rectangular'}
              sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.MEDIUM + 'px' }}
              width={FLIP_CARD.SIZE.MEDIUM}
              height={FLIP_CARD.SIZE.MEDIUM}
            />
            <KSkeleton
              variant={'rectangular'}
              sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.MEDIUM + 'px' }}
              width={FLIP_CARD.SIZE.MEDIUM}
              height={FLIP_CARD.SIZE.MEDIUM}
            />
            <KSkeleton
              variant={'rectangular'}
              sx={{ borderRadius: FLIP_CARD.BORDER_RADIUS.MEDIUM + 'px' }}
              width={FLIP_CARD.SIZE.MEDIUM}
              height={FLIP_CARD.SIZE.MEDIUM}
            />
          </S.SpaceContainer>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
