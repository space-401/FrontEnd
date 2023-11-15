import { SocialType } from '@type/user.type';
import { create } from 'zustand';

export type UserStateType = {
  userId: number;
  socialType: SocialType;
  userStatus: string;
  accessToken: string;
  refreshToken: string;
  userEmail: string;
};

export type UserActionType = {
  userInfo?: UserStateType;
  setUserInfo: (userInfo?: UserStateType) => void;
};

export const useUserStore = create<UserActionType>((setState) => ({
  userInfo: undefined,
  setUserInfo: (userInfo) => setState({ userInfo: userInfo }),
}));
