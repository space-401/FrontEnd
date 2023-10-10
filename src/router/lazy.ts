import { lazy } from 'react';

export const MyPage = lazy(() => import('@pages/MyPage'));
export const MainPage = lazy(() => import('@pages/Main'));
export const CreateSpacePage = lazy(() => import('@pages/CreateSpace'));
export const CreatePostPage = lazy(() => import('@pages/CreatePost'));
export const BackLayout = lazy(() => import('@layout/BackLayout'));
export const AuthPage = lazy(() => import('@pages/Auth'));
export const HeaderLayout = lazy(() => import('@layout/HeaderLayout'));
export const SelectSpacePage = lazy(() => import('@pages/SelectSpace'));
export const SignPage = lazy(() => import('src/pages/Sign'));
export const InviteCodePage = lazy(() => import('@pages/InviteCode'));
