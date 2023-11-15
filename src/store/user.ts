import { SocialType } from '@type/user.type';
import { create } from 'zustand';

type UserStateType = {
  isLogin: boolean;
  accessToken: string;
  socialType: SocialType | null;
  refreshToken: string;
  userEmail: string;
};

type UserActionType = {
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setUserEmail: (token: string) => void;
  setSocialType: (type: SocialType) => void;
  setIsLogin: (state: boolean) => void;
};

export const useUserStore = create<UserStateType & UserActionType>((set) => ({
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  socialType: null,
  userEmail: '',
  setIsLogin: (state: boolean) => set({ isLogin: state }),
  setAccessToken: (accessToken: string) => set({ accessToken }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
  setUserEmail: (userEmail: string) => set({ userEmail }),
  setSocialType: (socialType: SocialType) => set({ socialType }),
}));
