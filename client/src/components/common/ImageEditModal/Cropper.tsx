import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
// import { useEditModeStore } from '@/store/editMode';

import useFindLocation from '@/hooks/common/use-location';

interface PropsType {
  image: string;
  cropperRef: any;
}

const ImageCropper = ({ image, cropperRef }: PropsType) => {
  // const { isEditMode } = useEditModeStore();
  // .cropper-crop-box 요소를 선택합니다
  // const EditBox = document.querySelector('.cropper-crop-box');

  const [width, height, transform] = useFindLocation();

  console.log(width, height, transform);

  return (
    <>
      <Cropper
        ref={cropperRef}
        aspectRatio={1}
        src={image}
        viewMode={1}
        width={760}
        height={760}
        background={false}
        responsive
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
        minCropBoxWidth={200}
        minCropBoxHeight={200}
      />
    </>
  );
  // : (
  //   <BasicBox width={720} borderradius={0} color={'grey'}>
  //     <img src={image} />
  //   </BasicBox>
  // );
};

export default ImageCropper;
