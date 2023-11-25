import { O } from './style';
import { KSkeleton } from '@/components/common';

export const OnePostMapCardSkeleton = () => {
  return (
    <O.OneWrapper isSelect={false}>
      <KSkeleton variant={'rounded'} width={107.5} height={107.5} />
      <O.CardInfo>
        <KSkeleton
          variant={'rounded'}
          width={Math.random() * 10 + 90}
          height={16}
        />
        <KSkeleton
          sx={{ marginTop: '4px' }}
          variant={'rounded'}
          width={Math.random() * 20 + 70}
          height={10}
        />
        <KSkeleton
          sx={{ marginTop: '2px' }}
          variant={'rounded'}
          width={Math.random() * 20 + 60}
          height={10}
        />
        <KSkeleton
          sx={{ marginTop: '6px' }}
          variant={'rounded'}
          width={Math.random() * 20 + 100}
          height={10}
        />
        <O.CardPlace>
          <KSkeleton
            sx={{ marginTop: '6px' }}
            variant={'rounded'}
            width={16}
            height={16}
          />
          <KSkeleton
            sx={{ marginTop: '6px' }}
            variant={'rounded'}
            width={50}
            height={16}
          />
        </O.CardPlace>
        <O.TagGroup>
          <KSkeleton
            variant={'rounded'}
            width={Math.random() * 20 + 40}
            height={21}
          />
          <KSkeleton
            variant={'rounded'}
            width={Math.random() * 30 + 40}
            height={21}
          />
        </O.TagGroup>
      </O.CardInfo>
    </O.OneWrapper>
  );
};
