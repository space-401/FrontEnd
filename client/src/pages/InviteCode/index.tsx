import FullScreenModal from '@/layout/FullScreenModal/FullScreenModal';
import S from '@pages/InviteCode/style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
// import { z } from 'zod';

// type Inputs = {
//   spaceCode: string;
//   password: string;
// };

const InviteCode = () => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<Inputs>();

  //제출시 실행되는 함수
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <FullScreenModal
      isTitle={true}
      title="초대 코드 입력"
      detail="친구에게 초대받은 초대코드와 비밀번호를 입력해주세요."
    >
      <S.Form onSubmit={onSubmit}>
        {/*스페이스 코드*/}
        <S.TitleContainer number={1}>
          <div>스페이스 코드</div>
        </S.TitleContainer>
        <S.InputContainer number={1}>
          <InputBox
            type="text"
            height={60}
            placeholder="스페이스 코드를 입력해주세요"
            // {...register('spaceCode')}
          />
        </S.InputContainer>

        {/*스페이스 비밀번호 인풋*/}
        <S.TitleContainer number={2}>
          <div>스페이스 비밀번호</div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox
            type="password"
            height={60}
            placeholder="숫자 5자리를 입력해주세요"
          />
        </S.InputContainer>

        {/*완료 버튼*/}
        <S.ButtonContainer>
          <BasicButton children="완료" />
        </S.ButtonContainer>
      </S.Form>
    </FullScreenModal>
  );
};

export default InviteCode;
