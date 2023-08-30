import LoginLayout from '@components/layout/LoginLayout';
import MainLayout from '@components/layout/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/login',
    element: <LoginLayout />,
  },
]);

export default router;
