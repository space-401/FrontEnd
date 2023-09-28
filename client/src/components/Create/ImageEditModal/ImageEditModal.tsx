import S from '@components/Create/ImageEditModal/style';
import ImageCropper from '@components/Create/ImageEditModal/Cropper';
import { useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { dataURLtoFile } from '@/utils/fileConvertor';
import { Box, Modal } from '@mui/material';
import { ImageArrType } from '@/types/image.type';

type ModalType = {
  imageArr: ImageArrType;
  setImageArr: React.Dispatch<React.SetStateAction<ImageArrType>>;
};

const ImgEditModal = ({ imageArr, setImageArr }: ModalType) => {
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
      console.log(imageArr);
      setImageArr((prev) => ({ ...prev, cropImages: [newImage] }));
      const filename = `SpaceImg`;
      const convertedImg = dataURLtoFile(newImage, filename);

      convertedImg &&
        setImageArr((prev) => ({ ...prev, convertedImages: [convertedImg] }));
      console.log(imageArr);
      ModalClose();
    }
  };

  //크롭한 이미지를 모두 저장함.
  const onSaveAllEditImg = (e: any) => {
    e.preventDefault();
    if (imageArr.cropImages.length > 0) {
      setImageArr((prev) => ({ ...prev, cropImages: [], convertedImages: [] }));
    }
    getCropData(cropperRef1);
    //기존에 크롭한 이미지가 존재하면 없애줌
  };

  //모달 취소
  const onClickCancelModal = () => {
    ModalClose();
    setImageArr((prev) => ({ ...prev, images: [] }));
  };

  //현재 화면 크기
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const cropperWidth = Math.floor(screenWidth / 2) + 20;

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

          {imageArr.images.length == 0 && (
            <S.FlexContainer>
              <div>이미지가 없습니다</div>
            </S.FlexContainer>
          )}
          <div
            style={{
              position: 'relative',
              height: cropperWidth,
              width: cropperWidth,
              overflow: 'hidden',
            }}
          >
            <div
              style={{ display: 'flex', position: 'absolute', left: 0 }}
              ref={sliderRef}
            >
              {imageArr.images.length && (
                <ImageCropper
                  width={cropperWidth}
                  key={0}
                  image={imageArr.images[0].img}
                  index={0}
                  myRef={myRefs[0]}
                />
              )}
            </div>
          </div>

          <S.Footer></S.Footer>
        </S.Form>
      </Box>
    </Modal>
  );
};
export default ImgEditModal;