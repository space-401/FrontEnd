export const dataURLtoFile = (
  dataurl: string,
  filename: string
): File | null => {
  const arr: string[] = dataurl.split(',');
  const mime: string | undefined = arr[0].match(/:(.*?);/)?.[1];
  const bstr: string = atob(arr[arr.length - 1]);
  const n: number = bstr.length;
  const u8arr: Uint8Array = new Uint8Array(n);

  for (let i: number = 0; i < n; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  try {
    return new File([u8arr], filename, { type: mime });
  } catch (error) {
    console.error('Error creating File object:', error);
    return null;
  }
};

// 파일 변환
export const onConvertToFile = (originalImg: string, filename: string) => {
  const convertedImg = dataURLtoFile(originalImg, filename);
  return convertedImg;
};
