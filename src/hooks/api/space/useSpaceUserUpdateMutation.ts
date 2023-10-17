// import { useMutation, useQuery } from '@tanstack/react-query';
// import type { AxiosError } from 'axios';
// import { patchSpaceUser } from '@/apis/space/patchSpaceUser';
// import type { AccountDataType } from '@type/user.type';

// type userProps = {
//   spaceId: number;
//   isAdmin?: boolean;
//   image?: File;
//   userNickName?: string;
// };

// export const useSpaceUserUpdateMutation = (spaceId: string) => {
//   const NumberSpaceId = Number(spaceId);
//   const { data: MySpaceUserData } = useMutation(
//     ['spaceUserInfo', NumberSpaceId],
//     () => patchSpaceUser()
//   );
// };
// const {  data: MySpaceUserData } = useMutation<
// ApiResponseType,
// AxiosError,
// deleteSpaceType
// >((deleteInfo) => deleteSpaceUser(deleteInfo.spaceId, deleteInfo.spaceId));
// return { deleteSpaceAction };

//   return { MySpaceUserData };
// };
