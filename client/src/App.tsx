import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import KkliriProvider from '@router/KkliriProvider';

function App() {
  return (
    <KkliriProvider>
      <RouterProvider router={router} />
    </KkliriProvider>
  );
}

export default App;
