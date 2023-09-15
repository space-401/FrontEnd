type ChangeProps = {
  e: React.ChangeEvent<HTMLInputElement>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  images: string[];
  hasManyImg: boolean;
  isAddImg: boolean;
};

export const handleFileChange = ({
  e,
  setImages,
  images,
  hasManyImg,
  isAddImg,
}: ChangeProps) => {
  e.preventDefault();

  const files = e.target.files;

  if (!files) return;

  if (hasManyImg) {
    //이미지를 처음 추가
    if (!isAddImg) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string') {
            if (!isAddImg) {
              setImages([result]);
              reader.readAsDataURL(files[i]);
            } else {
              setImages((prev) => [...prev, result]);
              reader.readAsDataURL(files[images.length - 1]);
            }
          }
        };
      }
    }
  } else {
    //이미지가 하나일 떄
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        setImages([result]);
      }
    };
    reader.readAsDataURL(files[0]);
  }
};

//이미지를 더 추가 (기존 이미지 o)
// } else {
//   const reader = new FileReader();

//   reader.onload = () => {
//     const result = reader.result;
//     if (typeof result === 'string') {
//       setImages((prev) => [...prev, result]);
//     }
//   };
//   reader.readAsDataURL(files[images.length - 1]);
// }

// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   e.preventDefault();
//   const files = e.target.files;
//   if (!files) return;
//   //여러개의 파일을 하나씩 순회하여 읽어오기
//   for (let i = 0; i < files.length; i++) {
//     const reader = new FileReader();

//     reader.onload = () => {
//       const result = reader.result;
//       if (typeof result === 'string') {
//         setImages((prev) => [...prev, result]);
//       }
//     };
//     reader.readAsDataURL(files[i]);
//   }
// };
