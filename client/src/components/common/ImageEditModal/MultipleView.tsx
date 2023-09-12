import S from './style';
import { ReactComponent as PlusPhotoIcon } from '@assets/svg/photo/plusIcon.svg';
import { useRef } from 'react';

const MultipleView = ({
  images, // handleFileChange,
  setImages,
  setCurrentIdx,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
  // handleFileChange: any;
}) => {
  console.log('images', images);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onAddImage = () => {
    inputRef.current && inputRef.current.click();
  };

  //중복 코드
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setImages((prev) => [...prev, result]);
      }
    };
    reader.readAsDataURL(files[0]);
    setCurrentIdx(images.length);
  };

  const onClickChangePhoto = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <S.MultiViewWrapper>
      <S.SmallPhotoBox onClick={onAddImage}>
        <PlusPhotoIcon />
        <input
          type="file"
          onChange={(e) => {
            handleFileChange(e);
          }}
          style={{ display: 'none' }}
          ref={inputRef}
        />
      </S.SmallPhotoBox>
      {images &&
        images.map((image, idx) => (
          <S.SmallPhotoBox
            image={image}
            onClick={() => {
              onClickChangePhoto(idx);
            }}
          />
        ))}
    </S.MultiViewWrapper>
  );
};
export default MultipleView;
