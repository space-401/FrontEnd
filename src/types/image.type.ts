export type ImageType = {
  id: number;
  img: string;
};

export type ImagesArrType = {
  images: ImageType[];
  cropImages: string[];
  convertedImages: File[];
};

export type ImageArrType = {
  image: ImageType | null;
  cropImage: string | null;
  convertedImage: File | null;
};
