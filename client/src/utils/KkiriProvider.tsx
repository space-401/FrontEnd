import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@styles/global';
import { theme } from '@/styles/theme/theme';
import { ThemeProvider } from 'styled-components';
import { queryClient } from '@hooks/api/queryClient';

const KkiriProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default KkiriProvider;
