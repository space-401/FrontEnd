import { useImageCompress } from '@/hooks';
import { theme } from '@/styles';
import { ImagesArrType } from '@/types';
import { dataURItoFile } from '@/utils';
import { Box, Modal } from '@mui/material';
import { useRef, useState } from 'react';
import { ReactCropperElement } from 'react-cropper';
import { v4 } from 'uuid';
import { ReactComponent as PrevBtn } from '@/assets/svg/chevron/chevron_left.svg';
import { ReactComponent as NextBtn } from '@/assets/svg/chevron/chevron_right.svg';
import { ReactComponent as MultipleIcon } from '@/assets/svg/photo/multipleIcon.svg';
import { usePhotoModalStore } from '@/store/modal';
import {
  CharacterCounter,
  ImageCropper,
  MultipleImgBox,
} from '@/components/Create';
import { S } from './style';

type ModalType = {
  handleFileChange: any;
  currentIdx: number;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
  imageArr: ImagesArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImagesArrType>>;
};

export const ImagesEditModal = ({
  imageArr,
  setImageArr,
  currentIdx,
  setCurrentIdx,
}: ModalType) => {
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
  const [isMultipleBoxShow, setIsMultipleBoxShow] = useState(true);
  const sliderRef = useRef<any>();
  const { ModalClose, isOpen } = usePhotoModalStore();
  const [currentX, setCurrentX] = useState<number>(0);
  const imageNum = imageArr.images.length;

  const cropperWidth = 500;

  const { compressImage, isLoading: isCompressedLoading } = useImageCompress();

  //하나의 이미지를 크롭해서 저장함.
  const getCropData = async (cropperRef: any) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL(`image/jpeg`, 0.5);

      const convertedImage = dataURItoFile(newImage);
      const compressedImage = await compressImage(convertedImage);

      if (!isCompressedLoading && compressedImage) {
        setImageArr((prev) => ({
          ...prev,
          cropImages: [...prev.cropImages, newImage],
          convertedImages: [...prev.convertedImages, compressedImage],
        }));
      }
    }
  };

  //크롭한 이미지를 모두 저장함.
  const onSaveAllEditImg = async (e: React.MouseEvent) => {
    e.preventDefault();

    //기존에 크롭한 이미지가 존재하면 없애줌
    if (imageArr.cropImages.length > 0) {
      setImageArr((prev) => ({
        ...prev,
        cropImages: [],
      }));
    }
    myRefs.map((ref) => {
      getCropData(ref);
    });
    ModalClose();
  };

  //왼쪽 이미지 보기
  const onClickMoveLeft = () => {
    if (currentIdx > 0) {
      const newPosition = currentX + cropperWidth;
      setCurrentX(newPosition);
      sliderRef.current.style.transform = `translateX(${newPosition}px)`;
      setCurrentIdx((currentIdx) => currentIdx - 1);
    } else {
      const newPosition = cropperWidth * (imageNum - 1);
      setCurrentX(-newPosition);
      sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
      setCurrentIdx(imageArr.images.length - 1);
    }
  };

  //오른쪽 이미지 보기
  const onClickMoveRight = () => {
    if (currentIdx < imageNum - 1) {
      const newPosition = currentX - cropperWidth;
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
    setImageArr((prev) => ({
      ...prev,
      images: [],
    }));
    ModalClose();
  };

  //선택한 이미지를 보기
  const onClickCurrentImg = (idx: number) => {
    setCurrentIdx(idx);
    const newPosition = -(idx * cropperWidth);
    sliderRef.current.style.transform = `translateX(${newPosition}px)`;
    setCurrentX(newPosition);
  };

  return (
    <Modal
      open={isOpen}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      }}
    >
      <Box tabIndex={-1}>
        {/*모든 이미지 보이는 UI*/}
        {isMultipleBoxShow && (
          <MultipleImgBox
            imgCount={10}
            isBackground={true}
            imageArr={imageArr}
            setImageArr={setImageArr}
            setCurrentIdx={setCurrentIdx}
            currentIdx={currentIdx}
            onClickCurrentImg={onClickCurrentImg}
          />
        )}
        <S.Form>
          <PrevBtn
            style={{
              position: 'absolute',
              top: '50%',
              left: '30px',
              zIndex: 10000,
              cursor: 'pointer',
            }}
            onClick={onClickMoveLeft}
          />
          <NextBtn
            style={{
              position: 'absolute',
              top: '50%',
              right: '30px',
              zIndex: 1000,
              cursor: 'pointer',
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
              height: cropperWidth + 'px',
              width: cropperWidth + 'px',
              overflow: 'hidden',
              padding: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                gap: 20,
              }}
              ref={sliderRef}
            >
              {imageArr.images.map(
                (image: { id: number; img: string }, index: number) => {
                  return (
                    <div
                      style={{
                        height: cropperWidth - 20,
                        width: cropperWidth - 20,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      key={v4()}
                    >
                      <ImageCropper
                        width={cropperWidth - 20}
                        key={index}
                        image={image.img}
                        index={index}
                        myRef={myRefs[index]}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <S.Footer>
            <CharacterCounter
              currentNum={imageArr.images.length}
              maxNum={10}
              color={'white'}
              backgroundColor={theme.COLOR['gray-3']}
            />
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
          </S.Footer>
        </S.Form>
      </Box>
    </Modal>
  );
};
