import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface PropsType {
  image: string;
  cropperRef: any;
}

const ImageCropper = ({ image, cropperRef }: PropsType) => {
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
};

export default ImageCropper;
