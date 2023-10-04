import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { OneSpaceType } from '@type/space.type';

export const getSpaceList = async () => {
  const { data } = await axiosInstance.get<OneSpaceType[]>(END_POINTS.SPACE_LIST);
  return data;
};
