import { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Point } from 'react-easy-crop';
import { Slider } from '@mui/material';
import S from './style';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCallback } from 'react';

const ImgCropper = ({
  // onCropComplete,
  setCroppedAreaPixels,
  image,
} // onChangeInputImage,
: {
  onCropComplete: any;
  image: string;
  setCroppedAreaPixels: any;
  onChangeInputImage: React.ChangeEvent<HTMLInputElement>;
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedAreaPixel: any) => {
    setCroppedAreaPixels(croppedAreaPixel);
  }, []);

  return (
    <S.CropperWrapper>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <S.SizeController>
        <RemoveIcon style={{ color: 'white', width: '17px' }} />
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(Number(zoom))}
          classes={{ root: 'slider' }}
        />
        <AddIcon style={{ color: 'white', width: '17px' }} />
      </S.SizeController>
    </S.CropperWrapper>
  );
};
export default ImgCropper;
