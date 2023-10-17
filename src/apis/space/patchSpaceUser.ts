import { axiosInstance } from '@apis/AxiosInstance';
import { SpacePostListProps } from '@type/main.type';
import { END_POINTS } from '@constants/api';

export const patchSpaceUser = async (patchInfo: any) => {
  const { data } = await axiosInstance.patch<SpacePostListProps>(
    END_POINTS.SPACE_USER,
    { patchInfo }
  );

  return data;
};
