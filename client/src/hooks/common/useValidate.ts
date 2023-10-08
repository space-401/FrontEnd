import { useState } from 'react';

const useValidate = (password: string) => {
  const [error, setError] = useState('');
  const regex = /^[0-9]*$/;
  const passwordTest = regex.test(password);

  if (!passwordTest) {
    setError('비밀번호는 5자리의 숫자여야 합니다');
  }
  return error;
};
export default useValidate;
