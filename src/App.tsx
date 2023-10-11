import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import KkiriProvider from './utils/KkiriProvider';
import '@styles/fonts/font.css';
import { worker } from '@mocks/browser';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  worker.start();
  return (
    <KkiriProvider>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, zIndex: 900 }}
      />
      <RouterProvider router={router} />
    </KkiriProvider>
  );
}

export default App;
