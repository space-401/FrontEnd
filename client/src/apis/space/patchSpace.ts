import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

type postSpacePropType = {
  spaceId: number;
  spaceTitle: string;
  spaceDescription: string;
  imgUrl: string;
  spacePassword: number;
};

export const patchSpace = async (props: postSpacePropType) => {
  const { spaceId, spaceTitle, spaceDescription, spacePassword, imgUrl } =
    props;
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE_INFO(spaceId),
    {
      spaceTitle,
      spaceDescription,
      imgUrl,
      spacePassword,
    }
  );
  return data;
};
