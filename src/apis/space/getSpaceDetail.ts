import { END_POINTS } from '@constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { SpaceInfoType } from '@type/space.type';

export const getSpaceDetail = async (spaceId: number) => {
  //스페이스Id가 제대로 전달 안되었을 때 에러 처리
  // if (!spaceId && spaceId !== null) {
  //   return;
  // }
  const { data } = await axiosInstance.get<SpaceInfoType>(END_POINTS.SPACE, {
    params: { spaceId },
  });
  console.log('스페이스 정보', data);
  return data;
};
