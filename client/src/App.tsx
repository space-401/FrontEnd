import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import KkiriProvider from './utils/KkiriProvider';
import '@styles/fonts/font.css';
function App() {
  return (
    <KkiriProvider>
      <RouterProvider router={router} />
    </KkiriProvider>
  );
}

export default App;
