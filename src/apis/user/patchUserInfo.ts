import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { AccountDataType } from '@type/user.type';

type UserInfoProps = {
  userName: string;
  imgUrl: string;
  spaceId: string;
};

export const patchUserInfo = async ({
  userName,
  imgUrl,
  spaceId,
}: UserInfoProps) => {
  const { data } = await axiosInstance.patch<AccountDataType>(
    END_POINTS.SPACE + `profile?spaceId=${spaceId}`,
    { userName, imgUrl }
  );

  return data;
};
