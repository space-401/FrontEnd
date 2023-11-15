import { useMutation } from '@tanstack/react-query';
import { postSpaceInvite } from '@/apis/space/postSpaceInvite';
import { ApiResponseType } from '@/types/response.type';
import { AxiosError } from 'axios';
import { inviteProps } from '@/apis/space/postSpaceInvite';

export const useSpaceUserInviteMutation = () => {
  const { mutate: userInviteAction } = useMutation<
    ApiResponseType,
    AxiosError,
    inviteProps
  >((inviteInfo) => postSpaceInvite(inviteInfo));
  return { userInviteAction };
};
