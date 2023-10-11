import S from '@pages/CreatePost/style';
import KSkeleton from '@components/common/Skeleton';

const CreatePostSkeleton = () => {
  return (
    <S.Wrapper>
      <S.BoxWrapper>
        <KSkeleton
          sx={{ borderRadius: '20px' }}
          variant={'rectangular'}
          width={348}
          height={348}
        />
      </S.BoxWrapper>
      <S.GridWrapper>
        {/*스페이스 정보*/}
        <S.SpaceInfoContainer>
          <KSkeleton variant={'circular'} width={48} height={48} />
          <div>
            <KSkeleton variant={'rounded'} width={120} height={22} />
          </div>
        </S.SpaceInfoContainer>

        {/*게시글 제목*/}
        <S.Label number={1} required={true}>
          <KSkeleton variant={'rounded'} width={73} height={22} />
        </S.Label>
        <S.InputContainer number={1}>
          <KSkeleton variant={'rounded'} width={500} height={62} />
        </S.InputContainer>

        {/*함께한 친구들*/}
        <S.Label number={2} required={false}>
          <KSkeleton variant={'rounded'} width={87} height={22} />
        </S.Label>
        <S.InputContainer number={2}>
          <KSkeleton variant={'rounded'} width={500} height={60} />
        </S.InputContainer>

        {/*태그*/}
        <S.FlexContainer>
          <S.Label number={3} required={false}>
            <KSkeleton variant={'rounded'} width={28} height={22} />
          </S.Label>
        </S.FlexContainer>

        <S.InputContainer number={3}>
          <KSkeleton variant={'rounded'} width={500} height={60} />
        </S.InputContainer>

        {/*장소*/}
        <S.Label number={4} required={true}>
          <KSkeleton variant={'rounded'} width={28} height={22} />
        </S.Label>
        <S.InputContainer number={4}>
          <KSkeleton variant={'rounded'} width={500} height={56} />
        </S.InputContainer>

        {/*날짜*/}
        <S.Label number={5} required={true}>
          <KSkeleton variant={'rounded'} width={28} height={22} />
        </S.Label>
        <S.InputContainer number={5}>
          <KSkeleton variant={'rounded'} width={270} height={60} />
        </S.InputContainer>

        {/*내용*/}
        <S.Label number={6} required={true}>
          <KSkeleton variant={'rounded'} width={28} height={22} />
        </S.Label>
        <S.InputContainer number={6}>
          <KSkeleton variant={'rounded'} width={500} height={212} />
        </S.InputContainer>

        <S.EmptyContainer />
        <S.ButtonContainer paddingLeft={340}>
          <KSkeleton variant={'rounded'} width={160} height={44} />
        </S.ButtonContainer>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default CreatePostSkeleton;
