export const dataURItoFile = (dataURI: string) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  return new File([blob], 'uploadImage', { type: mimeString });
};

// export const onBlobToUrl = (Blob: Blob) => {
//   return window.URL.createObjectURL(Blob);
// };

// export const base64ToBlob = async (dataURI: string) => {
//   const byteString = atob(dataURI.split(',')[1]);

//   const ab = new ArrayBuffer(byteString.length);
//   const ia = new Uint8Array(ab);
//   for (let i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }
//   const blob = new Blob([ia], {
//     type: 'image/jpeg',
//   });
//   const file = new File([blob], 'image.jpg');
//   return file;
// };

// export const blobToBase64 = (blob: Blob) => {
//   const reader = new FileReader();
//   reader.onload = () => {
//     const base64data = reader.result;
//     console.log(base64data);
//   };
//   reader.readAsDataURL(blob);
// };

// export const blobToUrl = (blob: Blob) => {
//   const url = URL.createObjectURL(blob);
//   return url;
// };
