import { END_POINTS } from '@/constants/api';
import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';

export type inviteProps = {
  spaceCode: string;
  spacePw: number;
};

export const postSpaceInvite = async (props: inviteProps) => {
  const { spaceCode, spacePw } = props;

  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE_USER,
    {
      spaceCode,
      spacePw,
    }
  );

  return data;
};
