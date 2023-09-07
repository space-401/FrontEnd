import FullScreenModal from '@/layout/FullScreenModal/FullScreenModal';
import S from './style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
import TextAreaBox from '@/components/common/TextAreaBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import BasicBox from '@/components/common/BasicBox';
import { ReactComponent as QuestionIcon } from '@assets/svg/QuestionIcon.svg';
import useSelectPhoto from '@/hooks/common/useSelectPhoto';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';

// const schema = z.object({
//   title: z.string().min(16, '16자 이내의 제목을 입력해주세요'),
//   content: z.string().min(500,'내용은 500자 이내로 인력'),
// });

const CreateSpace = () => {
  const { fileInputRef, handleFileChange, handleBoxClick } = useSelectPhoto();

  return (
    <FullScreenModal
      isTitle={true}
      title="스페이스 설정하기"
      detail="우리만을 위한 스페이스를 새로 만들어요."
    >
      <S.Wrapper>
        {/*아이콘 지정 인풋*/}
        <S.TitleContainer number={1} required={true}>
          <div>스페이스 아이콘</div>
        </S.TitleContainer>
        <S.InputContainer number={1}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <BasicBox
            width={160}
            borderradius={10}
            color="grey"
            onClick={handleBoxClick}
          >
            <PhotoIcon />
          </BasicBox>
          <S.EditButton>편집하기</S.EditButton>
        </S.InputContainer>

        {/*이름 지정 인풋*/}
        <S.TitleContainer number={2} required={true}>
          <div>스페이스 명 </div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox
            type="text"
            height={60}
            placeholder="스페이스 명 입력"
            maxLength={20}
          />
        </S.InputContainer>

        {/*설명 지정 인풋*/}
        <S.TitleContainer number={3} required={false}>
          <div>스페이스 설명</div>
        </S.TitleContainer>
        <S.InputContainer number={3}>
          <TextAreaBox
            height={160}
            placeholder="스페이스 설명 입력"
            maxLength={100}
          />
        </S.InputContainer>

        {/*비밀번호 지정 인풋*/}
        <S.FlexContainer>
          <S.TitleContainer number={4} required={true}>
            <div>스페이스 비밀번호</div>
          </S.TitleContainer>
          <QuestionIcon />
        </S.FlexContainer>
        <S.InputContainer number={4}>
          <InputBox
            height={60}
            type={'password'}
            placeholder="숫자 5자리를 입력해주세요"
            maxLength={5}
          />
        </S.InputContainer>
        {/*스페이스 생성 버튼*/}
        <S.ButtonContainer>
          <BasicButton children="스페이스 생성하기" />
        </S.ButtonContainer>
      </S.Wrapper>
    </FullScreenModal>
  );
};
export default CreateSpace;
