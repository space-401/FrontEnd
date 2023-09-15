import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

type PropsType = {
  image: string;
  index: number;
  setCropImages: any;
  cropImages: string[];
  myRef: any;
};

const ImageCropper = ({ image, myRef }: PropsType) => {
  return (
    <div style={{ position: 'relative' }}>
      <Cropper
        ref={myRef}
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
    </div>
  );
};

export default ImageCropper;
