import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';

export type PostSpaceTagType = {
  spaceId: string;
  tagName: string;
};

export const postSpaceTag = async (postSpaceInfo: PostSpaceTagType) => {
  const { tagName, spaceId } = postSpaceInfo;
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE_TAG(spaceId),
    { tagName }
  );
  return data;
};
