import type { ApiResponseType } from '@/types';

/**
 * 성공했을 때의 응답
 */
export const successResponse: ApiResponseType = {
  message: 'success',
};
/**
 * 실패했을 때의 응답
 */
export const failureResponse: ApiResponseType = {
  message: 'failure',
};
