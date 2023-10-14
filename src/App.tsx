import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import KkiriProvider from './utils/KkiriProvider';
import '@styles/fonts/font.css';
import { worker } from '@mocks/browser';
import { motion, useScroll } from 'framer-motion';

function App() {
  worker.start();
  return (
    <KkiriProvider>
      <RouterProvider router={router} />
    </KkiriProvider>
  );
}

export default App;
