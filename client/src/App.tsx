import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import CombinedProvider from './utils/CombinedProvider';

function App() {
  return (
    <CombinedProvider>
      <RouterProvider router={router} />
    </CombinedProvider>
  );
}

export default App;
