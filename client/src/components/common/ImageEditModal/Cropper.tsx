import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface PropsType {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  handleChildrenClick: any;
  inputRef: any;
  cropperRef: any;
}

const ImageCropper = ({
  setImage,
  image,
  //handleChildrenClick,
  inputRef,
  cropperRef,
}: PropsType) => {
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

  return image == '' ? (
    <input type="file" ref={inputRef} onChange={handleFileChange} />
  ) : (
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
