import CreateSpace from '@/pages/CreateSpace';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/createSpace',
        element: <CreateSpace />,
      },
    ],
  },
]);

export default router;
