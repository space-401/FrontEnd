import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import KirriProvider from '@router/KirriProvider';

function App() {
  return (
    <KirriProvider>
      <RouterProvider router={router} />
    </KirriProvider>
  );
}

export default App;
