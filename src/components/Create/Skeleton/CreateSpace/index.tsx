import S from '@pages/CreateSpace/style';
import BasicBox from '@/components/common/BasicBox';
import KSkeleton from '@components/common/Skeleton';
const CreateSpaceSkeleton = () => {
  return (
    <S.Wrapper>
      <S.TitleSection>
        <div>
          <KSkeleton variant={'rounded'} width={230} height={38} />
        </div>
        <p>
          <KSkeleton variant={'rounded'} width={161} height={19} />
        </p>
      </S.TitleSection>
      <S.Form>
        <S.TitleContainer number={1} required={true}>
          <div>
            <KSkeleton variant={'rounded'} width={114} height={21} />
          </div>
        </S.TitleContainer>
        <S.InputContainer number={1}>
          <BasicBox width={160} borderradius={10}>
            <KSkeleton
              sx={{ borderRadius: '10px' }}
              variant={'rectangular'}
              width={160}
              height={160}
            />
          </BasicBox>
        </S.InputContainer>
        <S.TitleContainer number={2} required={true}>
          <div>
            <KSkeleton variant={'rounded'} width={83} height={21} />
          </div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <KSkeleton variant={'rounded'} width={628} height={'100%'} />
        </S.InputContainer>
        <S.TitleContainer number={3} required={false}>
          <div>
            <KSkeleton variant={'rounded'} width={98} height={21} />
          </div>
        </S.TitleContainer>
        <S.InputContainer number={3}>
          <KSkeleton variant={'rounded'} width={628} height={'100%'} />
        </S.InputContainer>
        <S.FlexContainer>
          <S.TitleContainer number={4} required={true}>
            <div>
              <KSkeleton variant={'rounded'} width={129} height={21} />
            </div>
          </S.TitleContainer>
        </S.FlexContainer>
        <S.InputContainer number={4}>
          <KSkeleton variant={'rounded'} width={628} height={'100%'} />
        </S.InputContainer>
        <S.EmptyContainer />
        <S.ButtonContainer>
          <KSkeleton variant={'rounded'} width={160} height={47} />
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
export default CreateSpaceSkeleton;
