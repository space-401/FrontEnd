import S from '@components/common/ImageEditModal/style';
import ImageCropper from '@components/common/ImageEditModal/Cropper';
import { useRef } from 'react';
import { usePhotoModalStore } from '@/store/modal';
import { ReactCropperElement } from 'react-cropper';
import { dataURLtoFile } from '@/utils/fileConvertor';
import ImgCounter from './ImgCounter';

const ImgEditModal = ({
  images,
  cropImages,
  setCropImages,
  setConvertedImages,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  cropImages: string[];
  setCropImages: React.Dispatch<React.SetStateAction<string[]>>;
  handleFileChange: any;
  setConvertedImages: React.Dispatch<React.SetStateAction<File[]>>;
}) => {
  const cropperRef1 = useRef<ReactCropperElement>(null);

  const sliderRef = useRef<any>();
  const { ModalClose } = usePhotoModalStore();

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

  return (
    <S.Wrapper>
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
                  key={index}
                  setCropImages={setCropImages}
                  image={img}
                  index={index}
                  cropImages={cropImages}
                  myRef={cropperRef1}
                />
              );
            })}
          </div>
        </div>

        <S.Footer>
          <ImgCounter currentNum={images.length} maxNum={10} />
        </S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};
export default ImgEditModal;
