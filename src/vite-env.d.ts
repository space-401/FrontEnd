
import 'vite/client';

declare global {
  interface ImportMetaEnv {
    VITE_BASE_URL: string;
    VITE_BACK_URL: string;
    VITE_KAKAO_KEY: string;
    VITE_KAKAO_REST_API: string;
    VITE_NAVER_CLIENT_ID: string;
    VITE_NAVER_CLIENT_KEY: string;
    VITE_GOOGLE_CLIENT_ID: string;
  }
}

interface ImportMeta {
  readonly env : ImportMetaEnv
}