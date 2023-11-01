export type LoginResponseType = {
  isSuccess: boolean;
};

// export const useLogOutMutation = () => {
//   const setIsLogin = useUserStore((e) => e.setIsLogin);
//   const { mutate: logoutAction } = useMutation<
//     LoginResponseType,
//     AxiosError,
//   >(['logout'], postLogout, {
//     onSuccess: () => {
//       setIsLogin(false);
//     },
//     onError: (error) => {
//       toastColorMessage(error.message);
//     },
//   });
//
//   return { logoutAction };
// };
