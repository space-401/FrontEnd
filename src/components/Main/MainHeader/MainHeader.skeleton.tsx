import S from '@components/Main/MainHeader/style';
import KSkeleton from '@components/common/Skeleton';

const MainHeaderSkeleton = () => {
  return (
    <S.Wrapper>
      <S.HeaderHeader>
        <S.ButtonGroup>
          <KSkeleton variant={'rounded'} width={76} height={28} />
          <S.ControlButton color={'white'}>
            <KSkeleton variant={'rounded'} width={55} height={28} />
          </S.ControlButton>
        </S.ButtonGroup>
      </S.HeaderHeader>
      <S.HeaderMain>
        <KSkeleton variant={'rounded'} width={104} height={104} />
        <S.MainInfo>
          <S.MainTitle>
            <KSkeleton variant={'rounded'} width={450} height={40} />
          </S.MainTitle>
          <S.Description>
            <KSkeleton
              sx={{ marginBottom: '10px' }}
              variant={'rounded'}
              width={440}
              height={15}
            />
            <KSkeleton variant={'rounded'} width={400} height={15} />
          </S.Description>
        </S.MainInfo>
      </S.HeaderMain>
      <S.HeaderFooter>
        <S.LeftEmpty></S.LeftEmpty>
        <S.FilterState>
          <KSkeleton variant={'rounded'} width={105} height={28} />
          <KSkeleton variant={'rounded'} width={105} height={28} />
        </S.FilterState>
        <KSkeleton variant={'rounded'} width={105} height={28} />
      </S.HeaderFooter>
    </S.Wrapper>
  );
};

export default MainHeaderSkeleton;
