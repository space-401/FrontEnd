import { axiosInstance } from '@apis/AxiosInstance';
import { SpacePostListProps } from '@type/main.type';
import { END_POINTS } from '@constants/api';

export const getSpaceUser = async () => {
  const { data } = await axiosInstance.get<SpacePostListProps>(
    END_POINTS.SPACE_USER
  );

  return data;
};
