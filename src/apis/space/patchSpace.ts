// 수정 완료

import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';
import { UpdateSpaceType } from '@/types/space.type';

export const patchSpace = async (props: UpdateSpaceType) => {
  const { spaceId, spaceTitle, spaceDescription, spacePw, imgUrl, defaultImg } =
    props;

  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.SPACE, {
    spaceId,
    spaceTitle,
    spaceDescription,
    imgUrl,
    spacePw,
    defaultImg,
  });
  return data;
};
