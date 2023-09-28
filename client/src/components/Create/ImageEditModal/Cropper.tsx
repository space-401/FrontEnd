import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import '@components/Create/ImageEditModal/Cropper.css';

type PropsType = {
  image: string;
  index: number;
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
        width={740}
        height={740}
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
