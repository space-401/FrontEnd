import { SocialType } from '@type/user.type';
import { create } from 'zustand';

type userType = {
  accessToken: string;
  socialType: SocialType;
  refreshToken: string;
  userEmail: string;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setUserEmail: (token: string) => void;
  setSocialType: (type: SocialType) => void;
};

export const useUserStore = create<userType>((setState) => ({
  accessToken: 'accesstoken1',
  refreshToken: 'refreshtoken1',
  userEmail: 'user1@kakao.com',
  socialType: 'kakao',
  setAccessToken: (accessToken: string) => setState({ accessToken }),
  setRefreshToken: (refreshToken: string) => setState({ refreshToken }),
  setUserEmail: (userEmail: string) => setState({ userEmail }),
  setSocialType: (socialType: SocialType) => setState({ socialType }),
}));
