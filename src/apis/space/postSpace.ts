//수정 완료

import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';
import { CreateSpaceType } from '@/types/space.type';

export const postNewSpace = async (props: CreateSpaceType) => {
  const { spaceTitle, spaceDescription, spacePassword, imgUrl } = props;
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.SPACE, {
    spaceName: spaceTitle,
    spaceDescription,
    imgUrl: imgUrl,
    spacePw: spacePassword,
  });
  return data;
};
