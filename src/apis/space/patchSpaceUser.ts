import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

// export type SpaceUserPropsType = {
//   spaceId: number;
//   userId?: number; //해당 유저가 방장이 되는 경우에만 추가함.
//   isAdmin?: boolean;
//   image?: File | null;
//   userNickName?: string;
// };
export const patchSpaceUser = async (patchInfo: FormData) => {
  const { data } = await axiosInstance.patch<ApiResponseType>(
    END_POINTS.SPACE_USER,
    patchInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return data;
};
