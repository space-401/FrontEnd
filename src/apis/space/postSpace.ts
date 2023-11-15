import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';
import tokenStorage from '@utils/tokenStorage';

export const postNewSpace = async (props: FormData) => {
  const response = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE,
    props,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${tokenStorage.getAccessToken()}`,
      },
    }
  );
  return response.data;
};

// export const postNewSpace = async (props: CreateSpaceType) => {
//   console.log('token', tokenStorage.getAccessToken());
//   console.log('spaceInfo', props);
//   const { spaceTitle, spaceDescription, spacePw, imgUrl, defaultImg } = props;
//   const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.SPACE, {
//     spaceTitle,
//     spaceDescription,
//     imgUrl,
//     spacePw,
//     defaultImg,
//   });
//   return data;
// };
