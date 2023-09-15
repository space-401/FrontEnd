import { create } from 'zustand';

type userType = {
  user: {
    id: number;
    nickname: string;
    token_key: string;
    img: string;
  } | null;
  // Login : ()=> void
  Logout: () => void;
};

export const useUserStore = create<userType>((setState) => ({
  user: {
    id: 222123,
    img: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/4464098951/B.jpg?995000000',
    token_key: 'undefined_token',
    nickname: '칸탐로봇',
  },
  Logout: () => setState(() => ({ user: null })),
}));
