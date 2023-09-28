import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import '@components/Create/ImageEditModal/CircleCropper.css';

type PropsType = {
  image: string;
  index: number;
  myRef: any;
  width: number;
};

const CircleImageCropper = ({ image, myRef, width }: PropsType) => {
  return (
    <div style={{ position: 'relative' }}>
      <Cropper
        // cropBoxResizable={false}
        // // cropBoxMovable={false}
        ref={myRef}
        aspectRatio={1}
        src={image}
        viewMode={1}
        width={width}
        height={width}
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

export default CircleImageCropper;
