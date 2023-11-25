import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { OneSpaceType } from '@type/space.type';

export const getSpaceList = async () => {
  try {
    const { data } = await axiosInstance.get<{ spaceList: OneSpaceType[] }>(
      END_POINTS.SPACE_LIST
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
