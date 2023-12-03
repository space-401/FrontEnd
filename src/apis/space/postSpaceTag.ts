// 완성
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';


export type PostSpaceTagType = {
  spaceId: number;
  tagName: string;
};

export const postSpaceTag = async (postSpaceInfo: PostSpaceTagType) => {
  const { tagName, spaceId } = postSpaceInfo;
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE_TAG,
    { spaceId, tagName }
  );

  return data;
};