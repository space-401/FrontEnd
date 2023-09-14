import S from '@components/common/ImageEditModal/style';
import ImageCropper from './Cropper';
import { useEffect, useRef, useState } from 'react';
import { ReactCropperElement } from 'react-cropper';
import { ReactComponent as SizeChangeIcon } from '@assets/svg/photo/sizeChangeIcon.svg';
import { ReactComponent as MultipleIcon } from '@assets/svg/photo/multipleIcon.svg';
import MultipleImgBox from '../MultipleImgBox';
import { usePhotoModalStore } from '@/store/modal';
import { useEditModeStore } from '@/store/modal';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ImgEditModal = ({
  images,
  setImages,
  setCropImages,
  currentIdx,
  setCurrentIdx,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);
  const cropperRef2 = useRef<ReactCropperElement>(null);
  const cropperRef3 = useRef<ReactCropperElement>(null);
  const sliderRef = useRef<any>();
  const { isMode, ModeOn, ModeClose } = useEditModeStore();
  const { ModalClose, ModalOpen } = usePhotoModalStore();
  const { currentX, setCurrentX } = useState();

  const imageNum = images.length;

  useEffect(() => {
    console.log(currentIdx);
  }, [imageNum, currentIdx]);

  //이미지를 크롭해서 저장함.
  // const getCropData = () => {
  //   if (typeof cropperRef.current?.cropper !== 'undefined') {
  //     const newImage = cropperRef.current?.cropper
  //       .getCroppedCanvas()
  //       .toDataURL();
  //     setCropImages([newImage]);
  //     // setCropImage((prev: string[]) => [...prev, newImage]);
  //     ModalClose();
  //   }
  // };

  const onClickMoveLeft = () => {
    if (currentIdx > 0) {
      const newPosition = currentX + 760;
      setCurrentX(newPosition);
      sliderRef.current.style.left(newPosition);
      setCurrentIdx((prevIdx) => prevIdx - 1);
    }
  };

  const onClickMoveRight = () => {
    if (currentIdx <= imageNum - 1) {
      const newPosition = currentX - 760;
      setCurrentX(newPosition);
      sliderRef.current.style.left(newPosition);
      setCurrentIdx((prevIdx) => prevIdx + 1);
    }
  };

  return (
    <S.Wrapper>
      <ArrowBackIosIcon
        sx={{ position: 'absolute', top: '50%', left: '13rem', zIndex: 10000 }}
        onClick={onClickMoveLeft}
      />
      <ArrowForwardIosIcon
        sx={{ position: 'absolute', top: '50%', right: '13rem', zIndex: 10000 }}
        onClick={onClickMoveRight}
      />
      <S.Form>
        <S.Header>
          <button onClick={ModalOpen}>취소</button>
          {isMode ? (
            <button onClick={ModeClose}>편집완료</button>
          ) : (
            <button onClick={ModeOn}>편집</button>
          )}

          <button
          //  onClick={getCropData}
          >
            완료
          </button>
        </S.Header>
        {/* <S.SlideShow>
          <S.Sliders ref={sliderRef} width={CropperWidth}> */}
        <div style={{ position: 'relative', height: '760px', width: '760px' }}>
          <div
            style={{ display: 'flex', position: 'absolute', left: 0 }}
            ref={sliderRef}
          >
            {images.map((img) => {
              return <ImageCropper image={img} cropperRef={cropperRef1} />;
            })}
          </div>
        </div>
        {/* </S.Sliders> */}
        {/* </S.SlideShow> */}

        <S.Footer>
          <SizeChangeIcon />
          <MultipleIcon />
          <MultipleImgBox
            isAddPhoto={true}
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
