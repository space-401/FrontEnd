import S from '@components/common/ImageEditModal/style';
import ImageCropper from './Cropper';
import { useRef, useState } from 'react';
import { ReactCropperElement } from 'react-cropper';
import { ReactComponent as SizeChangeIcon } from '@assets/svg/photo/sizeChangeIcon.svg';
import { ReactComponent as MultipleIcon } from '@assets/svg/photo/multipleIcon.svg';
import MultipleView from './MultipleView';
import { usePhotoModalStore } from '@/store/modal';
import { useEditModeStore } from '@/store/modal';

const ImgEditModal = ({
  images,
  setImages,
  setCropImages, // handleFileChange,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
}) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  //현재 선택한 이미지의 index
  const [currentIdx, setCurrentIdx] = useState(0);
  // const [isEditMode, setIsEditMode] = useState(false);
  const { isMode, ModeOn, ModeClose } = useEditModeStore();
  const { ModalClose, ModalOpen } = usePhotoModalStore();

  //이미지를 크롭해서 저장함.
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      setCropImages([newImage]);
      // setCropImage((prev: string[]) => [...prev, newImage]);
      ModalClose();
    }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Header>
          <button onClick={ModalOpen}>취소</button>
          {isMode ? (
            <button onClick={ModeClose}>편집완료</button>
          ) : (
            <button onClick={ModeOn}>편집</button>
          )}

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
