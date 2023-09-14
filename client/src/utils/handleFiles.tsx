export const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setImages: React.Dispatch<React.SetStateAction<string | string[]>>,
  hasManyImg: boolean
) => {
  e.preventDefault();

  const files = e.target.files;

  if (!files) return;

  if (hasManyImg) {
    //여러개의 파일을 하나씩 순회하여 읽어오기
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setImages((prev) => [...prev, result]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  } else {
    //이미지가 하나일 떄
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setImages(result);
      }
    };
    reader.readAsDataURL(files[0]);
  }
};
