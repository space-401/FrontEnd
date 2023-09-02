import HeaderLayout from '@/components/layout/HeaderLayout/HeaderLayout';
import S from './style';
import BasicBox from '@/components/common/BasicBox';
import InputBox from '@/components/common/InputBox';
import TextAreaBox from '@/components/common/TextAreaBox';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import BasicButton from '@/components/common/BasicButton';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import Cat from '@assets/cat.jpg';
// import { useForm } from 'react-hook-form';

// type Inputs = {
//   title: string;
//   place: string;
//   content: string;
//   space: string;
// };

const CreatePost = () => {
  // const {
  // register,
  // formState: { errors },
  // } = useForm<Inputs>();

  return (
    <HeaderLayout $isContentBox={false}>
      <S.Wrapper>
        <BasicBox color="grey" width={360} borderradius={20}>
          <S.PhotoText>
            <PhotoIcon />
            <div>사진 선택</div>
          </S.PhotoText>
        </BasicBox>

        <S.GridWrapper>
          {/*스페이스 정보*/}
          <S.SpaceInfoContainer>
            <CircleIcon img_url={Cat}></CircleIcon>
            <div>스페이스 이름</div>
          </S.SpaceInfoContainer>

          {/*게시글 제목*/}
          <S.Label number={1} required={true}>
            게시글 제목
          </S.Label>
          <S.InputContainer number={1}>
            <InputBox
              height={60}
              placeholder="16자 이내의 제목을 입력해 주세요."
              type="text"
              maxLength={16}
            />
          </S.InputContainer>

          {/*함께한 친구들*/}
          <S.Label number={2} required={false}>
            함께한 친구들
          </S.Label>
          <S.InputContainer number={2}>
            <InputBox
              height={60}
              placeholder="함께한 친구들을 추가해주세요"
              type="button"
            />
          </S.InputContainer>

          {/*장소*/}
          <S.Label number={3} required={true}>
            장소
          </S.Label>
          <S.InputContainer number={3}>
            <InputBox
              height={60}
              placeholder="등록할 장소를 입력해주세요."
              type="text"
              maxLength={20}
            />
          </S.InputContainer>

          {/*날짜*/}
          <S.Label number={4} required={true}>
            날짜
          </S.Label>
          <S.InputContainer number={4}>
            <InputBox
              type="text"
              width={150}
              height={60}
              placeholder="YYYY.MM.DD"
            />
          </S.InputContainer>

          {/*내용*/}
          <S.Label number={5} required={true}>
            내용
          </S.Label>
          <S.InputContainer number={5}>
            <TextAreaBox
              height={212}
              placeholder="500자 이내의 내용을 입력해 주세요."
              maxLength={500}
            />
          </S.InputContainer>

          {/*태그*/}
          <S.Label number={6} required={false}>
            스페이스 명
          </S.Label>
          <S.InputContainer number={6}>
            <InputBox
              type="button"
              height={60}
              placeholder="스페이스 명 입력"
            />
          </S.InputContainer>
        </S.GridWrapper>

        {/*게시 버튼*/}
        <S.PostButtonWrapper>
          <BasicButton children="게시" />
        </S.PostButtonWrapper>
      </S.Wrapper>
    </HeaderLayout>
  );
};
export default CreatePost;
