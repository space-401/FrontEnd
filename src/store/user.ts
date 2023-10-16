import { create } from 'zustand';

type userType = {
  isLogin: boolean;
  setIsLogin: (bool: boolean) => void;
};

export const useUserStore = create<userType>((setState) => ({
  isLogin: false,
  setIsLogin: (bool) => setState(() => ({ isLogin: bool })),
}));
