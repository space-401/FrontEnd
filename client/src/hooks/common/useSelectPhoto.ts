import { useState } from 'react';
import { ChangeEvent } from 'react';

const useSelectPhoto = () => {
  // const fileInputRef = useRef<HTMLInputElement | null>(null);
  //이미지 파일을 저장하는 곳
  const [image, setImage] = useState('');

  const handleInputClick = () => {
    // 클릭 이벤트가 발생했을 때 파일 입력 요소를 클릭
    // if (fileInputRef.current) {
    //   fileInputRef.current.click();
    // }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      if (selectedFile) {
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setImage(reader.result);
          }
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  return {
    handleInputClick,
    handleFileChange,
    image,
    setImage,
  };
};

export default useSelectPhoto;
