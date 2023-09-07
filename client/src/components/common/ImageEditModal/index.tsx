import S from '@components/common/ImageEditModal/style';
import PhotoCropper from './photoCropper';
import { useCallback } from 'react';
import { Area } from 'react-easy-crop';

const ImgEditModal = () => {
  // const [croppedImage, setCroppedImage] = useState(null);
  // const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
      // setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  return (
    <S.Wrapper>
      <S.Form>
        <S.Header>
          <button>건너뛰기</button>
          <button>이미지 업로드</button>
          <button>완료</button>
        </S.Header>
        <PhotoCropper onCropComplete={onCropComplete} />
        <S.Footer></S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};
export default ImgEditModal;
