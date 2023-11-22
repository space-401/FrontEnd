import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postNewSpace } from '@/apis/space/postSpace';
import { toastColorMessage } from '@/utils/toastMessage';

export const useSpaceCreateMutation = () => {
  const { mutate: postSpaceAction, isSuccess: isPostSuccess } = useMutation<
    ApiResponseType,
    AxiosError,
    FormData
  >((spaceInfo) => postNewSpace(spaceInfo), {
    //onError
    onSuccess: () => {
      console.log('스페이스 만들기 성공');
    },
    onError: (error) => {
      toastColorMessage(error.message);
    },
  });
  return { postSpaceAction, isPostSuccess };
};
