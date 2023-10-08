import { axiosInstance } from '@apis/AxiosInstance';
import { SpacePostListProps } from '@type/main.type';
import { END_POINTS } from '@constants/api';

export const patchUserStatus = async (userId: number) => {
  const { data } = await axiosInstance.patch<SpacePostListProps>(
    END_POINTS.SPACE_USER(userId),
    { data: { userId } }
  );

  return data;
};
