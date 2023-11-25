import { axiosInstance } from '@/apis';
import type { ApiResponseType } from '@/types';
import { END_POINTS } from '@/constants';

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
