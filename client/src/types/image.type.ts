export type ImageType = {
  id: number;
  img: string;
};

export type ImageArrType = {
  images: ImageType[];
  cropImages: string[];
  // convertedImages: File[];
};
