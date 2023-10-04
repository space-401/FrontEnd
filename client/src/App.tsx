import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import KkiriProvider from './utils/KkiriProvider';
import '@styles/fonts/font.css';
import { Dev } from '@constants/api';
import { worker } from '@mocks/browser';

function App() {
  if (Dev) {
    worker.start();
  }
  return (
    <KkiriProvider>
      <RouterProvider router={router} />
    </KkiriProvider>
  );
}

export default App;
