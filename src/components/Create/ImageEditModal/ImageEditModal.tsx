import S from '@components/Create/ImageEditModal/style';
import ImageCropper from '@components/Create/ImageEditModal/Cropper';
import React, { useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { Box, Modal } from '@mui/material';
import { ImageArrType } from '@/types/image.type';
import CircleImageCropper from './CircleCropper';
import { dataURItoFile } from '@/utils/fileConvertor';

type ModalType = {
  imageArr: ImageArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
  isCircle: boolean;
  onCloseIconModal?: () => void;
};

const ImgEditModal = ({
  imageArr,
  setImageArr,
  isCircle,
  onCloseIconModal,
}: ModalType) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);
  const myRefs = [cropperRef1];
  const sliderRef = useRef<any>();

  //사진 편집 모달이 열렸는지?
  const { ModalClose, isOpen } = usePhotoModalStore();

  const cropperWidth = 500;

  //하나의 이미지를 크롭해서 저장함.
  const getCropData = (cropperRef: any) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();

      setImageArr((prev) => ({
        ...prev,
        cropImage: newImage,
        convertedImage: dataURItoFile(newImage),
      }));
      console.log('imageimage', imageArr);
      ModalClose();
    }
  };

  //크롭한 이미지를 모두 저장함.
  const onSaveAllEditImg = (e: React.MouseEvent) => {
    e.preventDefault();
    //기존에 크롭한 이미지가 있으면 없애줌
    if (imageArr.cropImage) {
      setImageArr((prev) => ({ ...prev, cropImage: null }));
    }
    getCropData(cropperRef1);
    ModalClose();
    onCloseIconModal && onCloseIconModal();
    console.log('imageArr', imageArr);
  };

  //모달 취소
  const onClickCancelModal = () => {
    ModalClose();
  };

  return isCircle ? (
    <Box tabIndex={-1}>
      <S.Form>
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
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: '10',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            ref={sliderRef}
          >
            {imageArr.image &&
              (isCircle ? (
                <CircleImageCropper
                  width={cropperWidth}
                  key={0}
                  image={imageArr.image.img}
                  index={0}
                  myRef={myRefs[0]}
                />
              ) : (
                <ImageCropper
                  width={cropperWidth}
                  key={0}
                  image={imageArr.image.img}
                  index={0}
                  myRef={myRefs[0]}
                />
              ))}
          </div>
        </div>
        <S.Footer />
      </S.Form>
    </Box>
  ) : (
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
        <S.Form>
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
            }}
          >
            <div
              style={{ display: 'flex', position: 'absolute' }}
              ref={sliderRef}
            >
              {imageArr.image &&
                (isCircle ? (
                  <CircleImageCropper
                    width={cropperWidth}
                    key={0}
                    image={imageArr.image.img}
                    index={0}
                    myRef={myRefs[0]}
                  />
                ) : (
                  <ImageCropper
                    width={cropperWidth}
                    key={0}
                    image={imageArr.image.img}
                    index={0}
                    myRef={myRefs[0]}
                  />
                ))}
            </div>
          </div>

          <S.Footer />
        </S.Form>
      </Box>
    </Modal>
  );
};
export default ImgEditModal;
