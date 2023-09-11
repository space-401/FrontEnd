import S from '@components/common/ImageEditModal/style';
import ImageCropper from './Cropper';
import { useRef } from 'react';
import { ReactCropperElement } from 'react-cropper';

const ImgEditModal = ({
  setIsEditModalOpen,
  setCropImage,
  image,
  setImage,
}: {
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCropImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  cropImage: string;
}) => {
  const handleChildrenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropImage(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      setIsEditModalOpen(false);
      // setImage('');
    }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Header>
          <button
            onClick={() => {
              setIsEditModalOpen(false);
            }}
          >
            취소
          </button>
          <button>이미지 업로드</button>
          <button onClick={getCropData}>완료</button>
        </S.Header>
        <ImageCropper
          image={image}
          setImage={setImage}
          inputRef={inputRef}
          cropperRef={cropperRef}
          handleChildrenClick={handleChildrenClick}
        />
        <S.Footer />
      </S.Form>
    </S.Wrapper>
  );
};
export default ImgEditModal;
