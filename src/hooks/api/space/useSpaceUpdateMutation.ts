import type { ApiResponseType } from '@type/response.type';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { toastColorMessage } from '@/utils/toastMessage';
import { patchSpace } from '@/apis/space/patchSpace';
import { UpdateSpaceType } from '@/types/space.type';

export const useSpaceUpdateMutation = () => {
  const { mutate: updateSpaceAction } = useMutation<
    ApiResponseType,
    AxiosError,
    UpdateSpaceType
  >((spaceInfo) => patchSpace(spaceInfo), {
    //onError
    onError: (error) => {
      toastColorMessage(error.message);
    },
  });
  return { updateSpaceAction };
};
