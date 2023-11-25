import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import '@styles/fonts/font.css';
import { queryClient } from '@hooks/api/queryClient';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GlobalStyles from '@styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme/theme';
import {
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { worker } from '@mocks/browser';
import { Dev } from '@constants/api';

function App() {
  if (Dev) {
    worker.start();
  }

  return (
    <QueryErrorResetBoundary>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <Toaster position={'top-center'} />
            <RouterProvider router={router} />
          </ThemeProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </QueryErrorResetBoundary>
  );
}

export default App;
