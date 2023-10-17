import { axiosInstance } from '@apis/AxiosInstance';
import { SpacePostListProps } from '@type/main.type';
import { END_POINTS } from '@constants/api';

type userProps = {
  spaceId: number;
  isAdmin?: boolean;
  image?: File;
  userNickName?: string;
};
export const patchSpaceUser = async (patchInfo: userProps) => {
  const { data } = await axiosInstance.patch<SpacePostListProps>(
    END_POINTS.SPACE_USER,
    { patchInfo }
  );

  return data;
};
