import { axiosInstance } from '@apis/AxiosInstance';
import { SpaceFormResponse } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const patchSpace = async (spaceInfo: FormData) => {
  const { data } = await axiosInstance.patch<SpaceFormResponse>(
    END_POINTS.SPACE,
    spaceInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};
