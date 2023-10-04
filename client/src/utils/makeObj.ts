import { ImageType } from '@/types/image.type';

export const makeObj = (array: string[]) => {
  const newObj: ImageType[] = [];
  array.map((imgFile, idx) => {
    newObj.push({
      id: idx + 1,
      img: imgFile,
    });
  });
  return newObj;
};
