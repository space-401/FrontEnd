import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

type PropsType = {
  image: string;
  index: number;
  myRef: React.RefObject<HTMLImageElement>;
  width: number;
};

const CircleImageCropper = ({ image, myRef, width }: PropsType) => {
  return (
    <div style={{ position: 'relative' }}>
      <style>
        {`
          .cropper-crop-box, .cropper-view-box {
            border-radius: 50%;
            color : #56C9CC !important;
          }
          .cropper-view-box {
            box-shadow: 0 0 0 1px #56C9CC;
            outline: 0;
          }
          .cropper-face {
            background-color: inherit !important;
          }
          .cropper-dashed, .cropper-line {
            display: none !important;
          }
          .cropper-view-box {
            outline: inherit !important;
          }
          .cropper-point{
            background-color : #56C9CC !important;
          }
          .cropper-point.point-se {
            top: calc(85% + 1px);
            right: 14%;
          }
          .cropper-point.point-sw {
            top: calc(85% + 1px);
            left: 14%;
            display:none;
          }
          .cropper-point.point-nw {
            top: calc(15% - 5px);
            left: 14%;
            display:none;
          }
          .cropper-point.point-ne {
            top: calc(15% - 5px);
            right: 14%;
            display:none;
          }
        `}
      </style>
      <Cropper
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
