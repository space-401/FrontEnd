import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export type inviteProps = {
  spaceCode: string;
  spacePw: string;
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
