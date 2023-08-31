import FullScreenModal from '@/components/layout/FullScreenModal';
import S from './style';
import InputBox from '@/components/common/InputBox/InputBox';
import BasicButton from '@/components/common/BasicButton';

const InviteCode = () => {
  return (
    <FullScreenModal
      title="초대 코드 입력"
      detail="친구에게 초대받은 초대코드와 비밀번호를 입력해주세요."
    >
      <S.Wrapper>
        {/*스페이스 코드 인풋*/}
        <S.TitleContainer number={1}>
          <div>스페이스 코드</div>
        </S.TitleContainer>
        <S.InputContainer number={1}>
          <InputBox height={60} placeholder="스페이스 코드를 입력해주세요" />
        </S.InputContainer>

        {/*스페이스 비밀번호 인풋*/}
        <S.TitleContainer number={2}>
          <div>스페이스 비밀번호</div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox height={60} placeholder="숫자 5자리를 입력해주세요" />
        </S.InputContainer>

        {/*완료 버튼*/}
        <S.ButtonContainer>
          <BasicButton children="완료" />
        </S.ButtonContainer>
      </S.Wrapper>
    </FullScreenModal>
  );
};

export default InviteCode;
