import { axiosInstance } from '@apis/AxiosInstance';
import { SpacePostListProps } from '@type/main.type';
import { END_POINTS } from '@constants/api';

type userProps = {
  spaceId: number;
  userId?: number; //해당 유저가 방장이 되는 경우에만 추가함.
  isAdmin?: boolean;
  image?: File;
  userNickName?: string;
};
export const patchSpaceUser = async (patchInfo: userProps) => {
  const { data } = await axiosInstance.patch<SpacePostListProps>(
    END_POINTS.SPACE_USER,
    { ...patchInfo }
  );

  return data;
};
