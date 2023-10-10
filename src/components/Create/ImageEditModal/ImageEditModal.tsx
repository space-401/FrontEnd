import S from '@components/Create/ImageEditModal/style';
import ImageCropper from '@components/Create/ImageEditModal/Cropper';
import { useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { Box, Modal } from '@mui/material';
import { ImageArrType } from '@/types/image.type';
import CircleImageCropper from './CircleCropper';

type ModalType = {
  imageArr: ImageArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
  isCircle: boolean;
  setImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImgEditModal = ({
  imageArr,
  setImageArr,
  isCircle,
  setImageModalOpen,
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
      setImageArr((prev) => ({ ...prev, cropImages: [newImage] }));
      ModalClose();
      if (isCircle) {
        setImageModalOpen!(false);
      }
    }
  };

  //크롭한 이미지를 모두 저장함.
  const onSaveAllEditImg = (e: React.MouseEvent) => {
    e.preventDefault();
    if (imageArr.cropImages.length > 0) {
      setImageArr((prev) => ({ ...prev, cropImages: [] }));
    }
    getCropData(cropperRef1);
    //기존에 크롭한 이미지가 존재하면 없애줌
    setImageModalOpen!(false);
  };

  //모달 취소
  const onClickCancelModal = () => {
    isCircle ? setImageModalOpen!(false) : ModalClose();
    setImageArr((prev) => ({ ...prev, images: [] }));
  };

  return isCircle ? (
    <Box tabIndex={-1}>
      <S.Form width={cropperWidth}>
        <S.Header>
          <button onClick={onClickCancelModal}>삭제</button>
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
            height: cropperWidth+'px',
            width: cropperWidth+'px',
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
            {imageArr.images.length &&
              (isCircle ? (
                <CircleImageCropper
                  width={cropperWidth}
                  key={0}
                  image={imageArr.images[0].img}
                  index={0}
                  myRef={myRefs[0]}
                />
              ) : (
                <ImageCropper
                  width={cropperWidth}
                  key={0}
                  image={imageArr.images[0].img}
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
        <S.Form width={cropperWidth}>
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
              height: cropperWidth+'px',
              width: cropperWidth+'px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{ display: 'flex', position: 'absolute' }}
              ref={sliderRef}
            >
              {imageArr.images.length &&
                (isCircle ? (
                  <CircleImageCropper
                    width={cropperWidth}
                    key={0}
                    image={imageArr.images[0].img}
                    index={0}
                    myRef={myRefs[0]}
                  />
                ) : (
                  <ImageCropper
                    width={cropperWidth}
                    key={0}
                    image={imageArr.images[0].img}
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
