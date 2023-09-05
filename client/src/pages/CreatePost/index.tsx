import S from './style';
import BasicBox from '@/components/common/BasicBox';
import InputBox from '@/components/common/InputBox';
import TextAreaBox from '@/components/common/TextAreaBox';
import CircleIcon from '@/components/common/CircleIcon/CircleIcon';
import BasicButton from '@/components/common/BasicButton';
import Calendar from '@/components/common/Calender';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import { ReactComponent as QuestionIcon } from '@assets/svg/QuestionIcon.svg';
import FullScreenModal from '@/components/layout/FullScreenModal/FullScreenModal';
import Cat from '@assets/cat.jpg';
import useSelectPhoto from '@/hooks/common/useSelectPhoto';
import { useEffect } from 'react';

const CreatePost = () => {
  const { fileInputRef, handleFileChange, handleBoxClick, imgFile } =
    useSelectPhoto();
  useEffect(() => {
    console.log('asdfsd', imgFile);
  }, [imgFile]);
  console.log(imgFile);

  return (
    <FullScreenModal isTitle={false}>
      <S.Wrapper>
        <BasicBox
          color="grey"
          width={348}
          borderradius={20}
          onClick={handleBoxClick}
        >
          {/*이미지 파일 있을 때, 없을 때*/}
          {imgFile ? (
            <S.SelectedImgContainer src={imgFile} />
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <S.PhotoContainer>
                <PhotoIcon />
                <S.PhotoText>
                  <div>사진 선택</div>
                </S.PhotoText>
              </S.PhotoContainer>
            </>
          )}
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
              type="text"
              disabled={true}
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
            <Calendar />
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
          <S.FlexContainer>
            <S.Label number={6} required={false}>
              태그
            </S.Label>
            <S.IconContainer>
              <QuestionIcon />
            </S.IconContainer>
          </S.FlexContainer>

          <S.InputContainer number={6}>
            <InputBox type="button" height={60} />
          </S.InputContainer>
          <S.EmptyContainer />
          <S.ButtonContainer>
            <BasicButton children="게시글 올리기" fontSize={14} />
          </S.ButtonContainer>
        </S.GridWrapper>
      </S.Wrapper>
    </FullScreenModal>
  );
};
export default CreatePost;
