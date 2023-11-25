import { S } from './style';
import React, { useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { Box } from '@mui/material';
import { ImageArrType } from '@/types';
import { dataURItoFile } from '@/utils';
import { useImageCompress } from '@/hooks';
import { CircleCropper } from '@/components/Create';

type ModalType = {
  imageArr: ImageArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
  onCloseIconModal?: () => void;
};

export const CircleImgEditModal = ({
  imageArr,
  setImageArr,
  onCloseIconModal,
}: ModalType) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);
  const myRefs = [cropperRef1];
  const sliderRef = useRef<any>();

  //사진 편집 모달이 열렸는지?
  const { ModalClose } = usePhotoModalStore();

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
            {imageArr.image && (
              <CircleCropper
                width={cropperWidth}
                key={0}
                image={imageArr.image.img}
                index={0}
                myRef={myRefs[0]}
              />
            )}
          </div>
        </div>
        <S.Footer />
      </S.Form>
    </Box>
  );
};
