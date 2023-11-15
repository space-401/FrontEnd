import { SocialType } from '@type/user.type';
import { create } from 'zustand';

type userType = {
  isLogin: boolean;
  accessToken: string;
  socialType: SocialType;
  refreshToken: string;
  userEmail: string;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setUserEmail: (token: string) => void;
  setSocialType: (type: SocialType) => void;
  setIsLogin: (state: boolean) => void;
};

export const useUserStore = create<userType>((setState) => ({
  isLogin: false,
  accessToken: 'accesstoken1',
  refreshToken: 'refreshtoken1',
  userEmail: 'user1@kakao.com',
  socialType: 'kakao',
  setIsLogin: (state: boolean) => setState({ isLogin: state }),
  setAccessToken: (accessToken: string) => setState({ accessToken }),
  setRefreshToken: (refreshToken: string) => setState({ refreshToken }),
  setUserEmail: (userEmail: string) => setState({ userEmail }),
  setSocialType: (socialType: SocialType) => setState({ socialType }),
}));
