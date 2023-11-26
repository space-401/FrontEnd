import { lazy } from 'react';

const MyPage = lazy(() => import('@/pages/MyPage'));
const MainPage = lazy(() => import('@/pages/Main'));
const CreateSpacePage = lazy(() => import('@/pages/CreateSpace'));
const CreatePostPage = lazy(() => import('@/pages/CreatePost'));
const SelectSpacePage = lazy(() => import('@/pages/SelectSpace'));
const SignPage = lazy(() => import('@/pages/Login'));
const InviteCodePage = lazy(() => import('@/pages/InviteCode'));

export const Lazy = {
  MyPage,
  MainPage,
  InviteCodePage,
  SignPage,
  CreateSpacePage,
  CreatePostPage,
  SelectSpacePage,
};
