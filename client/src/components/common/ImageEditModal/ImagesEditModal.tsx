import S from '@components/common/ImageEditModal/style';
import ImageCropper from '@components/common/ImageEditModal/Cropper';
import { useRef, useState } from 'react';
import { ReactComponent as PrevBtn } from '@assets/svg/leftArrow.svg';
import { ReactComponent as NextBtn } from '@assets/svg/rightArrow.svg';
import { ReactComponent as MultipleIcon } from '@assets/svg/photo/multipleIcon.svg';
import MultipleImgBox from '@components/common/MultipleImgBox/index';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { dataURLtoFile } from '@/utils/fileConvertor';
import ImgCounter from './ImgCounter';

const ImagesEditModal = ({
  images,
  setImages,
  cropImages,
  setCropImages,
  currentIdx,
  setCurrentIdx,
  setConvertedImages,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  cropImages: string[];
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
  setConvertedImages: React.Dispatch<React.SetStateAction<File[]>>;
}) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);
  const cropperRef2 = useRef<ReactCropperElement>(null);
  const cropperRef3 = useRef<ReactCropperElement>(null);
  const cropperRef4 = useRef<ReactCropperElement>(null);
  const cropperRef5 = useRef<ReactCropperElement>(null);
  const cropperRef6 = useRef<ReactCropperElement>(null);
  const cropperRef7 = useRef<ReactCropperElement>(null);
  const cropperRef8 = useRef<ReactCropperElement>(null);
  const cropperRef9 = useRef<ReactCropperElement>(null);
  const cropperRef10 = useRef<ReactCropperElement>(null);

  const myRefs = [
    cropperRef1,
    cropperRef2,
    cropperRef3,
    cropperRef4,
    cropperRef5,
    cropperRef6,
    cropperRef7,
    cropperRef8,
    cropperRef9,
    cropperRef10,
  ];

  const sliderRef = useRef<any>();
  const { ModalClose } = usePhotoModalStore();
  const [isMultipleBoxShow, setIsMultipleBoxShow] = useState(true);
  const [currentX, setCurrentX] = useState<number>(0);

  const imageNum = images.length;

  //하나의 이미지를 크롭해서 저장함.
  const getCropData = (cropperRef: any, index: number) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();

      setCropImages((pre) => [...pre, newImage]);
      const filename = `${index}postImg`;
      const convertedImg = dataURLtoFile(newImage, filename);
      convertedImg && setConvertedImages((prev) => [...prev, convertedImg]);
      ModalClose();
    }
  };

  //크롭한 이미지를 모두 저장함.
  const onSaveAllEditImg = (e: any) => {
    e.preventDefault();

    //기존에 크롭한 이미지가 존재하면 없애줌
    if (cropImages.length > 0) {
      setCropImages([]);
    }
    myRefs.map((ref, index) => {
      getCropData(ref, index);
    });
  };

  //선택한 이미지가 보기
  const onClickCurrentImg = (idx: number) => {
    setCurrentIdx(idx);
    const newPosition = idx * 760;
    sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
  };

  //왼쪽 이미지 보기
  const onClickMoveLeft = () => {
    if (currentIdx > 0) {
      const newPosition = currentX + 760;
      setCurrentX(newPosition);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;
      setCurrentIdx((currentIdx) => currentIdx - 1);
    } else {
      const newPosition = -760 * (imageNum - 1);
      setCurrentX(newPosition);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;
      setCurrentIdx(images.length - 1);
    }
  };

  //오른쪽 이미지 보기
  const onClickMoveRight = () => {
    if (currentIdx < imageNum - 1) {
      const newPosition = currentX - 760;
      setCurrentX(newPosition);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;
      setCurrentIdx((currentIdx) => currentIdx + 1);
    } else {
      const newPosition = 0;
      setCurrentX(newPosition);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;
      setCurrentIdx(0);
    }
  };

  //취소
  const onClickCancelModal = () => {
    ModalClose();
    setImages([]);
  };

  return (
    <S.Wrapper>
      <S.Form>
        <PrevBtn
          style={{
            position: 'absolute',
            top: '50%',
            left: '30px',
            zIndex: 10000,
          }}
          onClick={onClickMoveLeft}
        />
        <NextBtn
          style={{
            position: 'absolute',
            top: '50%',
            right: '30px',
            zIndex: 1000,
          }}
          onClick={onClickMoveRight}
        />
        <S.Header>
          <button onClick={onClickCancelModal}>취소</button>
          <button
            onClick={(e) => {
              onSaveAllEditImg(e);
            }}
          >
            완료
          </button>
        </S.Header>

        <div
          style={{
            position: 'relative',
            height: '760px',
            width: '760px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{ display: 'flex', position: 'absolute', left: 0 }}
            ref={sliderRef}
          >
            {images.map((img, index) => {
              return (
                <ImageCropper
                  key={index}
                  setCropImages={setCropImages}
                  image={img}
                  index={index}
                  cropImages={cropImages}
                  myRef={myRefs[index]}
                />
              );
            })}
          </div>
        </div>

        <S.Footer>
          <ImgCounter currentNum={images.length} maxNum={10} />
          <MultipleIcon
            style={{
              zIndex: 1000,
              position: 'absolute',
              right: '20px',
            }}
            onClick={() => {
              setIsMultipleBoxShow((prev) => !prev);
            }}
          />
          {isMultipleBoxShow && (
            <MultipleImgBox
              isBackground={true}
              isAddPhoto={true}
              images={images}
              setImages={setImages}
              onClickCurrentImg={onClickCurrentImg}
            />
          )}
        </S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};
export default ImagesEditModal;
