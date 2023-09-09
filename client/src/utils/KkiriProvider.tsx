import { ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@styles/global';
import { theme } from '@/styles/theme/theme';
import { ThemeProvider } from 'styled-components';

const KkiriProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_KEY;
    const scriptURL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services,clusterer`;

    const script = document.createElement('script');
    script.src = scriptURL;
    document.head.appendChild(script);
  }, []);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default KkiriProvider;
