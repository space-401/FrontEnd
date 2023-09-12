import S from '@components/common/ImageEditModal/style';
import ImageCropper from './Cropper';
import { useRef, useState } from 'react';
import { ReactCropperElement } from 'react-cropper';
import { ReactComponent as SizeChangeIcon } from '@assets/svg/photo/sizeChangeIcon.svg';
import { ReactComponent as MultipleIcon } from '@assets/svg/photo/multipleIcon.svg';
import MultipleView from './MultipleView';
const ImgEditModal = ({
  setIsEditModalOpen,
  images,
  setImages,
  setCropImages, // handleFileChange,
}: {
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
}) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  //현재 선택한 이미지의 index
  const [currentIdx, setCurrentIdx] = useState(0);
  //이미지를 크롭해서 저장함.
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      setCropImages([newImage]);
      // setCropImage((prev: string[]) => [...prev, newImage]);
      setIsEditModalOpen(false);
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
        <ImageCropper image={images[currentIdx]} cropperRef={cropperRef} />
        <S.Footer>
          <SizeChangeIcon />
          <MultipleIcon />
          <MultipleView
            images={images}
            setImages={setImages}
            setCurrentIdx={setCurrentIdx}
          />
        </S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};
export default ImgEditModal;
