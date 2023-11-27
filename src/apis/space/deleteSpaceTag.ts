// 완성
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export type DeleteSpaceTagType = {
  spaceId: number;
  tagId: number;
};

export const deleteSpaceTag = async (deleteTagInfo: DeleteSpaceTagType) => {
  const { spaceId, tagId } = deleteTagInfo;
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE_TAG,
    { params: { spaceId, tagId } }
  );

  return data;
};
