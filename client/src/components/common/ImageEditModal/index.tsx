// import S from '@components/common/ImageEditModal/style';
// import { useState, useCallback, useEffect } from 'react';
// import { Area } from 'react-easy-crop';
// import Cropper from 'react-easy-crop';
// const ImgEditModal = ({
//   image,
//   setIsEditModalOpen,
//   setCroppedImg,
// }: {
//   image: string;
//   setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   setCroppedImg: React.Dispatch<React.SetStateAction<any>>;
// }) => {
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>();

//   // type area = {
//   //   x: number;
//   //   y: number;
//   //   width: number;
//   //   height: number;
//   // };
//   useEffect(() => {
//     console.log(croppedAreaPixels);
//   }, [croppedAreaPixels]);

//   const showCroppedImage = async () => {};

//   // const onCropComplete = useCallback((croppedAreaPixels: Area) => {
//   //   setCroppedAreaPixels(croppedAreaPixels);
//   // }, []);

//   return (
//     <S.Wrapper>
//       <S.Form>
//         <S.Header>
//           <button
//             onClick={() => {
//               setIsEditModalOpen(false);
//             }}
//           >
//             취소
//           </button>
//           <button>이미지 업로드</button>
//           <button onClick={showCroppedImage}>완료</button>
//         </S.Header>
//         <Cropper />
//         <S.Footer></S.Footer>
//       </S.Form>
//     </S.Wrapper>
//   );
// };
// export default ImgEditModal;
