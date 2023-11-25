import { useMutation } from '@tanstack/react-query';
import { inviteProps, postSpaceInvite } from '@/apis';
import { ApiResponseType } from '@/types';
import { AxiosError } from 'axios';

export const useSpaceUserInviteMutation = () => {
  const { mutate: userInviteAction } = useMutation<
    ApiResponseType,
    AxiosError,
    inviteProps
  >((inviteInfo) => postSpaceInvite(inviteInfo));
  return { userInviteAction };
};
