import tokenStorage from '@/utils/tokenStorage';
import { END_POINTS, HTTP_STATUS_CODE } from '@constants/api';
import axios from 'axios';

export type TokenData = {
  newRefreshToken: string;
};

export const getRefreshToken = async () => {
  try {
    const response = await axios.get<TokenData>(END_POINTS.TOKEN, {
      headers: {
        Authorization: `Bearer ${tokenStorage.getRefreshToken()}`,
      },
    });

    if (response.status === HTTP_STATUS_CODE.SUCCESS) {
      return {
        newRefreshToken: response.data.newRefreshToken,
      };
    } else {
      throw new Error('리프레시 토큰 발급 실패');
    }
  } catch (error) {
    console.error('리프레시 토큰 발급 실패');
    throw error;
  }
};
