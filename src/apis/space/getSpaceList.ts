import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { OneSpaceType } from '@type/space.type';
import tokenStorage from '@utils/tokenStorage';

export const getSpaceList = async () => {
  console.log('tokenStorage', tokenStorage.getAccessToken());
  try {
    const { data } = await axiosInstance.get<{ spaceList: OneSpaceType[] }>(
      END_POINTS.SPACE_LIST
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
