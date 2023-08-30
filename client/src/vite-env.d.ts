//vite-env.d.ts : env 타입을 정의하는 파일

import 'vite/client';

declare global {
  interface ImportMetaEnv {
    // VITE_APP_API_KEY: string;
    // VITE_APP_DEBUG: boolean;
    // 추가 환경 변수들...
  }
}

//import.meta.env 를 통해 환경변수 접근 가능
//참고 : https://khj0426.tistory.com/238
