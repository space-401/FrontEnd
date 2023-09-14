import S from '@components/common/MultipleImgBox/style';
import { ReactComponent as PlusPhotoIcon } from '@assets/svg/photo/plusIcon.svg';
import { useRef } from 'react';
import { handleFileChange } from '@/utils/handleFiles';

type props = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
  isAddPhoto: boolean;
};
const MultipleImgBox = ({
  images,
  setImages,
  setCurrentIdx,
  isAddPhoto, //사진 추가 기능이 들어가 있는지
}: props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onAddImage = () => {
    inputRef.current && inputRef.current.click();
  };

  const onClickChangeCurrentImg = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <S.Wrapper>
      {isAddPhoto && (
        <S.SmallPhotoBox onClick={onAddImage}>
          <PlusPhotoIcon />
          <input
            type="file"
            onChange={(e) => {
              handleFileChange(e, setImages);
            }}
            style={{ display: 'none' }}
            ref={inputRef}
          />
        </S.SmallPhotoBox>
      )}
      {images &&
        images.map((image, idx) => (
          <S.SmallPhotoBox
            key={Math.random() * 1000}
            image={image}
            onClick={() => {
              onClickChangeCurrentImg(idx);
            }}
          />
        ))}
    </S.Wrapper>
  );
};
export default MultipleImgBox;
