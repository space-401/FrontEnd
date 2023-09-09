import { useRef } from 'react';
import { Cropper, ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import BasicButton from '../BasicButton';

interface PropsType {
  // onCrop: (image: string) => void;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageCropper = ({ setImage, image, setIsEditModalOpen }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleChildrenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;

    if (!files) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setImage(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      console.log(image);
      setIsEditModalOpen(false);
      // setImage('');
    }
  };

  return (
    <>
      <input type="file" ref={inputRef} onChange={handleFileChange} />
      <span onClick={handleChildrenClick}>완성</span>
      {image && (
        <div className="container">
          <div className="backdrop" />
          <div className="modal">
            <h3>이미지 편집하기</h3>
            <div className="content-wrapper">
              <div className="content">
                <Cropper
                  ref={cropperRef}
                  aspectRatio={1}
                  src={image}
                  viewMode={1}
                  width={800}
                  height={500}
                  background={false}
                  responsive
                  autoCropArea={1}
                  checkOrientation={false}
                  guides
                />
              </div>
            </div>
            <div className="footer">
              <button onClick={() => setImage('')}>취소</button>
              <BasicButton onClick={getCropData}>적용하기</BasicButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCropper;
