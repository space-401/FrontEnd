import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@styles/global';
import { theme } from '@/styles/theme/theme';
import { ThemeProvider } from 'styled-components';
import { queryClient } from '@hooks/api/queryClient';
import { GoogleOAuthProvider } from '@react-oauth/google';

const KkiriProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default KkiriProvider;
