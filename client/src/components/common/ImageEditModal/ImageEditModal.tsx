import S from '@components/common/ImageEditModal/style';
import ImageCropper from './Cropper';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as SizeChangeIcon } from '@assets/svg/photo/sizeChangeIcon.svg';
import { ReactComponent as MultipleIcon } from '@assets/svg/photo/multipleIcon.svg';
import MultipleImgBox from '../MultipleImgBox';
import { usePhotoModalStore } from '@/store/modal';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ReactCropperElement } from 'react-cropper';

const ImgEditModal = ({
  images,
  setImages,
  cropImages,
  setCropImages,
  currentIdx,
  setCurrentIdx,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  cropImages: string[];
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);
  const cropperRef2 = useRef<ReactCropperElement>(null);
  const cropperRef3 = useRef<ReactCropperElement>(null);
  const cropperRef4 = useRef<ReactCropperElement>(null);
  const cropperRef5 = useRef<ReactCropperElement>(null);

  const myRefs = [
    cropperRef1,
    cropperRef2,
    cropperRef3,
    cropperRef4,
    cropperRef5,
  ];

  const sliderRef = useRef<any>();
  const { ModalClose } = usePhotoModalStore();
  const [isMultipleBoxShow, setIsMultipleBoxShow] = useState(true);
  const [currentX, setCurrentX] = useState<number>(0);

  const imageNum = images.length;

  //추가된 이미지가 5개 초과이면 경고 모달을 띄워줌
  useEffect(() => {
    if (images.length > 5) {
      alert('이미지는 5개 이상 추가할 수 없습니다!');
    }
  }, [images]);

  //하나의 이미지를 크롭해서 저장함.
  const getCropData = (cropperRef: any) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();

      setCropImages((pre) => [...pre, newImage]);
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
    myRefs.map((ref) => {
      getCropData(ref);
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
    }
  };

  //오른쪽 이미지 보기
  const onClickMoveRight = () => {
    if (currentIdx < imageNum - 1) {
      const newPosition = currentX - 760;
      setCurrentX(newPosition);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`; // 스타일 직접 변경
      setCurrentIdx((currentIdx) => currentIdx + 1);
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
          <button onClick={ModalClose}>취소</button>
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
          <SizeChangeIcon />
          <MultipleIcon
            onClick={() => {
              setIsMultipleBoxShow((prev) => !prev);
            }}
          />
          <div
            style={{
              zIndex: 1000,
              position: 'absolute',
              right: '10px',
              bottom: '70px',
            }}
          >
            {isMultipleBoxShow && (
              <MultipleImgBox
                isBackground={true}
                isAddPhoto={true}
                images={images}
                setImages={setImages}
                onClickCurrentImg={onClickCurrentImg}
              />
            )}
          </div>
        </S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};
export default ImgEditModal;
