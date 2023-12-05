import { ImageArrType } from '@/types/image.type';
import { dataURItoFile } from '@/utils/fileConvertor';
import { Box, Modal } from '@mui/material';
import React, { useRef } from 'react';
import { ReactCropperElement } from 'react-cropper';
import { useImageCompress } from '@/hooks/common';
import { usePhotoModalStore } from '@/store/modal';
import { CircleCropper, ImageCropper } from '@/components/Create';
import { S } from './style';

type ModalType = {
  imageArr: ImageArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
  isCircle: boolean;
  onCloseIconModal?: () => void;
};

export const ImageEditModal = ({
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
  //사진을 압축함
  const { compressImage, isLoading: isCompressedLoading } = useImageCompress();

  //하나의 이미지를 크롭해서 저장함.
  const getCropData = async (cropperRef: any) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();

      const convertedImage = dataURItoFile(newImage);
      const compressedImage = await compressImage(convertedImage);

      if (!isCompressedLoading && compressedImage) {
        setImageArr((prev) => ({
          ...prev,
          cropImage: newImage,
          convertedImage: compressedImage,
        }));
        ModalClose();
      }
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
  };

  //모달 취소
  const onClickCancelModal = () => {
    ModalClose();
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
                  <CircleCropper
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
