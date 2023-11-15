import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toastColorMessage } from '@/utils/toastMessage';
import { patchSpace } from '@/apis/space/patchSpace';

export const useSpaceUpdateMutation = () => {
  const { mutate: updateSpaceAction, isSuccess: isUpdateSuccess } = useMutation<
    ApiResponseType,
    AxiosError,
    FormData
  >((spaceInfo) => patchSpace(spaceInfo), {
    //onError
    onError: (error) => {
      toastColorMessage(error.message);
    },
  });
  return { updateSpaceAction, isUpdateSuccess };
};
