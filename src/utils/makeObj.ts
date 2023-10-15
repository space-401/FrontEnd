import { ImageType } from '@/types/image.type';

export const convertImgArrToObj = (imgUrl: string[]) => {
  const newObj: ImageType[] = [];
  imgUrl.map((img, idx) => {
    newObj.push({
      id: idx + 1,
      img: img,
    });
  });
  return newObj;
};
