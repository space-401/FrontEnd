import S from '@components/common/ImageEditModal/style';
import ImgCropper from './ImgCropper';
// import { useCallback } from 'react';
// import { Area } from 'react-easy-crop';
// import { useState } from 'react';

const ImgEditModal = ({
  image,
  setIsEditModalOpen,
}: {
  image: string;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const [croppedImage, setCroppedImage] = useState<string | ArrayBuffer | null>(
  //   null
  // );
  // const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onChangeInputImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target?.files?.[0]) {
      setIsEditModalOpen(true);
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        // setCroppedImage(reader.result);
      };
    }
  };

  const onCropImage = async () => {
    // try {
    //   const cropped = await getCroppedImg(croppedImage, croppedAreaPixels);
    //   const data = new FormData();
    //   data.append('background', dataURLtoFile(cropped, 'background.png'));
    //   await api.put('/mypage/background', data);
    //   setIsEditModalOpen(false);
    //   setCroppedImage(null);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Header>
          <button
            onClick={() => {
              setIsEditModalOpen(false);
            }}
          >
            취소
          </button>
          <button>이미지 업로드</button>
          <button>완료</button>
        </S.Header>
        {/* <ImgCropper
          onChangeInputImage={onChangeInputImage}
          onCropComplete={onCropImage}
          image={image}
        /> */}
        <S.Footer></S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};
export default ImgEditModal;
