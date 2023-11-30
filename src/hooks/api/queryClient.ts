import { NETWORK } from '@/constants';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: NETWORK.RETRY_COUNT,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});
