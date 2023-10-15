import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import '@styles/fonts/font.css';
import { worker } from '@mocks/browser';
import { queryClient } from '@hooks/api/queryClient';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GlobalStyles from '@styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme/theme';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  worker.start();
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
