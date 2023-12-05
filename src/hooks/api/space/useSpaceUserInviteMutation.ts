import { inviteProps, postSpaceInvite } from '@/apis';
import { ApiResponseType } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useSpaceUserInviteMutation = () => {
  const { mutate: userInviteAction, isSuccess: inviteSuccess } = useMutation<
    ApiResponseType,
    AxiosError,
    inviteProps
  >((inviteInfo) => postSpaceInvite(inviteInfo));
  return { userInviteAction, inviteSuccess };
};
