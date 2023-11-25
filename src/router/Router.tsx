import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '@router/Private';
import { PATH } from '@constants/path';
import { Suspense } from 'react';
import * as Lazy from '@router/lazy';
import MainPageSkeleton from '@components/Main/Skeleton';
import MyPageSkeleton from '@components/MyPage/Skeleton';
import CreatePostSkeleton from '@components/Create/Skeleton/CreatePost';
import HeaderLayout from '@layout/HeaderLayout';
import BackLayout from '@layout/BackLayout';
import SelectSpaceSkeleton from '@components/SelectSpace/Skeleton';
import CreateSpaceSkeleton from '@components/Create/Skeleton/CreateSpace';
import LandingPage from '@pages/Landing';
import Loading from '@pages/Loading';
import Auth from '@pages/Auth';
import ErrorPage from '@/components/common/Error';
import VisitorRoute from '@router/Visitor';
import ErrorBoundary from '@components/common/Error/errorBoundary';

const createRouter = (reset: () => void) => {
  return createBrowserRouter([
    {
      element: <ErrorBoundary onReset={reset} />,
      children: [
        {
          element: <PrivateRoute />,
          children: [
            {
              element: <HeaderLayout />,
              children: [
                {
                  path: PATH.SPACE,
                  element: (
                    <Suspense fallback={<SelectSpaceSkeleton />}>
                      <Lazy.SelectSpacePage />
                    </Suspense>
                  ),
                },
                {
                  path: PATH.SPACE_MAIN(':spaceId'),
                  element: (
                    <Suspense fallback={<MainPageSkeleton />}>
                      <Lazy.MainPage />
                    </Suspense>
                  ),
                },
                {
                  path: PATH.USER_INFO,
                  element: (
                    <Suspense fallback={<MyPageSkeleton />}>
                      <Lazy.MyPage />
                    </Suspense>
                  ),
                },
              ],
            },
            {
              element: <BackLayout />,
              children: [
                {
                  path: PATH.POST_CREATE(':spaceId'),
                  element: (
                    <Suspense fallback={<CreatePostSkeleton />}>
                      <Lazy.CreatePostPage />
                    </Suspense>
                  ),
                },
                {
                  path: PATH.POST_UPDATE(':spaceId', ':postId'),
                  element: (
                    <Suspense fallback={<CreatePostSkeleton />}>
                      <Lazy.CreatePostPage />
                    </Suspense>
                  ),
                },
                {
                  path: PATH.SPACE_CREATE,
                  element: (
                    <Suspense fallback={<CreateSpaceSkeleton />}>
                      <Lazy.CreateSpacePage />
                    </Suspense>
                  ),
                },
                {
                  path: PATH.SPACE_UPDATE(':spaceId'),
                  element: (
                    <Suspense fallback={<CreateSpaceSkeleton />}>
                      <Lazy.CreateSpacePage />
                    </Suspense>
                  ),
                },
                {
                  path: PATH.INVITE,
                  element: (
                    <Suspense fallback={<Loading />}>
                      <Lazy.InviteCodePage />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          element: <VisitorRoute />,
          children: [
            {
              path: PATH.LOGIN,
              element: (
                <Suspense fallback={<Loading />}>
                  <Lazy.SignPage />
                </Suspense>
              ),
            },
            {
              path: PATH.AUTH + '/:socialType',
              element: (
                <Suspense fallback={<Loading />}>
                  <Auth />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: PATH.HOME,
          element: (
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          ),
        },
        {
          path: '/*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);
};

export default createRouter;
