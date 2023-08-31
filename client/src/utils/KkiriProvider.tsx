import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@styles/global';
import { theme } from '@styles/themes';
import { ThemeProvider } from 'styled-components';

const KkiriProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default KkiriProvider;
