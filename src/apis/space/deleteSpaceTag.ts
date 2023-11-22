// 완성

import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export type DeleteSpaceTagType = {
  spaceId: number;
  tagId: string;
};

export const deleteSpaceTag = async (deleteTagInfo: DeleteSpaceTagType) => {
  const { spaceId, tagId } = deleteTagInfo;
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE_TAG,
    { params: { spaceId, tagId } }
  );

  return data;
};
