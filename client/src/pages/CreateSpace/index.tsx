import FullScreenModal from '@/layout/FullScreenModal/FullScreenModal';
import S from '@pages/createSpace/style';
import InputBox from '@/components/common/InputBox';
import BasicButton from '@/components/common/BasicButton';
import TextAreaBox from '@/components/common/TextAreaBox';
import { ReactComponent as PhotoIcon } from '@assets/svg/photoIcon.svg';
import BasicBox from '@/components/common/BasicBox';
import { ReactComponent as QuestionIcon } from '@assets/svg/QuestionIcon.svg';
import { useState, useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import ImgEditModal from '@/components/common/ImageEditModal/ImageEditModal';

const CreateSpace = () => {
  //이미지 파일을 저장하는 곳
  const [images, setImages] = useState<string[]>([]);
  //편집된 이미지 파일을 저장하는 곳
  const [cropImages, setCropImages] = useState<string[]>([]);
  //file형태의 이미지로 저장하는 곳
  const [convertedImages, setConvertedImages] = useState<File[]>([]);
  //현재 편집 모달이 열려있는지
  const { ModalOpen, isOpen } = usePhotoModalStore();
  const inputRef = useRef<HTMLInputElement>(null);

  //파일 변경 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    //여러개의 파일을 하나씩 순회하여 읽어오기
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setImages([result]);
      }
    };
    reader.readAsDataURL(files[0]);
  };

  //자식 inputRef 요소를 클릭하는 함수
  const onClickImgEditModal = () => {
    if (inputRef.current && images.length == 0) inputRef.current.click();
    if (cropImages.length > 0) {
      if (confirm('기존에 편집사항들이 삭제됩니다. 다시 편집하시겠습니까?')) {
        ModalOpen();
      }
    }
    ModalOpen();
  };

  return (
    <FullScreenModal
      isTitle={true}
      title="스페이스 설정하기"
      detail="우리만을 위한 스페이스를 새로 만들어요."
    >
      {isOpen && (
        <ImgEditModal
          setConvertedImages={setConvertedImages}
          cropImages={cropImages}
          setCropImages={setCropImages}
          images={images}
          setImages={setImages}
          handleFileChange={handleFileChange}
        />
      )}
      <S.Wrapper>
        {/*아이콘 지정 인풋*/}
        <S.TitleContainer number={1} required={true}>
          <div>스페이스 아이콘</div>
        </S.TitleContainer>
        {images.length == 0 ? (
          <S.InputContainer number={1} onClick={onClickImgEditModal}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                handleFileChange(e);
              }}
              ref={inputRef}
            />
            <BasicBox
              width={160}
              borderradius={10}
              color="grey"
              // onClick={handleBoxClick}
            >
              <PhotoIcon />
            </BasicBox>
          </S.InputContainer>
        ) : (
          <BasicBox
            backgroundImage={cropImages[0]}
            width={160}
            borderradius={10}
            color="grey"
          />
        )}
        <S.EditButton>편집하기</S.EditButton>
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
