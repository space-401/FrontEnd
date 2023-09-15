import S from '@components/common/MultipleImgBox/style';
import { ReactComponent as PlusPhotoIcon } from '@assets/svg/photo/plusIcon.svg';
import { useRef } from 'react';

type props = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  isAddPhoto: boolean;
  onClickCurrentImg?: any;
  isBackground: boolean;
};

const MultipleImgBox = ({
  images,
  setImages,
  isAddPhoto, //사진 추가 기능이 들어가 있는지
  isBackground,
  onClickCurrentImg,
}: props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onAddImage = () => {
    inputRef.current && inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files) return;
    //여러개의 파일을 하나씩 순회하여 읽어오기
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setImages((prev) => [...prev, result]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <S.Wrapper isBackground={isBackground}>
      {isAddPhoto && images.length < 5 && (
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
      )}
      {images &&
        images.map((image, idx) => (
          <S.SmallPhotoBox
            key={Math.random() * 1000}
            image={image}
            onClick={() => {
              onClickCurrentImg(idx);
            }}
          />
        ))}
    </S.Wrapper>
  );
};
export default MultipleImgBox;
