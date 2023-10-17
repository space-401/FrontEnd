import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';

export const getSpaceTag = async (spaceId: number) => {
  const { data } = await axiosInstance.get<any>(END_POINTS.SPACE_TAG, {
    params: { spaceId },
  });

  return data?.tagList;
};
