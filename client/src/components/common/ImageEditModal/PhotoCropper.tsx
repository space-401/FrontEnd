import { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Point } from 'react-easy-crop';
import { Slider } from '@mui/material';
import S from './style';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const PhotoCropper = ({ onCropComplete }: any) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  return (
    <S.CropperWrapper>
      <Cropper
        image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
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
export default PhotoCropper;
