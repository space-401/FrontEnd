import S from '@components/Create/ImageEditModal/style';
import ImageCropper from '@components/Create/ImageEditModal/Cropper';
import { useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { dataURLtoFile } from '@/utils/fileConvertor';
import { Box, Modal } from '@mui/material';
import { ImageType } from '@/types/image.type';

type ModalType = {
  images: ImageType[];
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  cropImages: string[];
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
  setConvertedImages: React.Dispatch<React.SetStateAction<File[]>>;
};

const ImgEditModal = ({
  images,
  setImages,
  cropImages,
  setCropImages,
  setConvertedImages,
}: ModalType) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);

  const myRefs = [cropperRef1];
  const sliderRef = useRef<any>();
  const { ModalClose, isOpen } = usePhotoModalStore();

  //하나의 이미지를 크롭해서 저장함.
  const getCropData = (cropperRef: any) => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const newImage = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();

      setCropImages([newImage]);
      const filename = `SpaceImg`;
      const convertedImg = dataURLtoFile(newImage, filename);
      convertedImg && setConvertedImages([convertedImg]);
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
    getCropData(cropperRef1);
  };

  //모달 취소
  const onClickCancelModal = () => {
    ModalClose();
    setImages([]);
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

          {images.length == 0 && (
            <S.FlexContainer>
              <div>이미지가 없습니다</div>
            </S.FlexContainer>
          )}
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
                    image={img.img}
                    index={index}
                    cropImages={cropImages}
                    myRef={myRefs[index]}
                  />
                );
              })}
            </div>
          </div>

          <S.Footer></S.Footer>
        </S.Form>
      </Box>
    </Modal>
  );
};
export default ImgEditModal;
