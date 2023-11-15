import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { CreateSpaceType } from '@/types/space.type';
import { postNewSpace } from '@/apis/space/postSpace';
import { toastColorMessage } from '@/utils/toastMessage';

export const useSpaceCreateMutation = () => {
  const { mutate: postSpaceAction } = useMutation<
    ApiResponseType,
    AxiosError,
    CreateSpaceType
  >((spaceInfo) => postNewSpace(spaceInfo), {
    //onError
    onError: (error) => {
      toastColorMessage(error.message);
    },
  });
  return { postSpaceAction };
};
