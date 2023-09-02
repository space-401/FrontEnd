import HeaderLayout from '@/components/layout/HeaderLayout/HeaderLayout';
import S from './style';
import BasicBox from '@/components/common/BasicBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import InputBox from '@/components/common/InputBox';
import TextAreaBox from '@/components/common/TextAreaBox';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import Cat from '@assets/cat.jpg';
import BasicButton from '@/components/common/BasicButton';

const CreatePost = () => {
  return (
    <HeaderLayout>
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
          <S.TitleContainer number={1} required={true}>
            <div>
              게시글 제목
              {/* 게시글 제목<span>(필수)</span> */}
            </div>
          </S.TitleContainer>
          <S.InputContainer number={1}>
            <InputBox
              height={60}
              placeholder="16자 이내의 제목을 입력해 주세요."
            />
          </S.InputContainer>

          {/*함께한 친구들*/}
          <S.TitleContainer number={2} required={false}>
            <div>함께한 친구들</div>
          </S.TitleContainer>
          <S.InputContainer number={2}>
            <InputBox height={60} placeholder="함께한 친구들을 추가해주세요" />
          </S.InputContainer>

          {/*장소*/}
          <S.TitleContainer number={3} required={true}>
            <div>
              장소
              {/* 장소<span>(필수)</span> */}
            </div>
          </S.TitleContainer>
          <S.InputContainer number={3}>
            <InputBox height={60} placeholder="등록할 장소를 입력해주세요." />
          </S.InputContainer>

          {/*날짜*/}
          <S.TitleContainer number={4} required={true}>
            <div>
              날짜
              {/* 날짜<span>(필수)</span> */}
            </div>
          </S.TitleContainer>
          <S.InputContainer number={4}>
            <InputBox height={60} placeholder="YYYY.MM.DD" />
          </S.InputContainer>

          {/*내용*/}
          <S.TitleContainer number={5} required={true}>
            <div>
              내용
              {/* 내용<span>(필수)</span> */}
            </div>
          </S.TitleContainer>
          <S.InputContainer number={5}>
            <TextAreaBox
              height={212}
              placeholder="500자 이내의 내용을 입력해 주세요."
            />
          </S.InputContainer>

          {/*태그*/}
          <S.TitleContainer number={6} required={false}>
            <div>스페이스 명</div>
          </S.TitleContainer>
          <S.InputContainer number={6}>
            <InputBox height={60} placeholder="스페이스 명 입력" />
          </S.InputContainer>
        </S.GridWrapper>

        {/*게시 버튼*/}
        <BasicButton children="게시" />
      </S.Wrapper>
    </HeaderLayout>
  );
};
export default CreatePost;
