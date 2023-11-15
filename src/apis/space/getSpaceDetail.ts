//완성

import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { SpaceInfoType } from '@type/space.type';

export const getSpaceDetail = async (spaceId: number) => {
  const { data } = await axiosInstance.get<SpaceInfoType>(END_POINTS.SPACE, {
    params: { spaceId },
  });
  return data;
};
