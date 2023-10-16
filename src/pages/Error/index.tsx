import S from '@pages/Error/style';
import { ReactComponent as ErrorIcon } from '@assets/svg/error/error.svg';
import BasicButton from '@/components/common/BasicButton';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/styles/theme/theme';
// import Loading from '@/components/common/Loading';
const ErrorPage = () => {
  const navigate = useNavigate();
  console.log('에러 페이지');
  return (
    <S.Wrapper>
      <ErrorIcon />
      <S.Title>404 Not Found</S.Title>
      <S.Detail>정보를 불러올 수 없습니다.</S.Detail>
      {/* <Loading /> */}
      <S.FlexContainer>
        <BasicButton
          border="1px solid #413F3F"
          onClick={() => {
            navigate(-1);
          }}
          backgroundColor={theme.COLOR['gray-7']}
          color={theme.COLOR.white}
          width={119}
          height={44}
        >
          이전으로 가기
        </BasicButton>
        <BasicButton
          onClick={() => {
            navigate('/');
          }}
          backgroundColor={theme.COLOR['gray-1']}
          width={119}
          height={44}
        >
          메인으로 가기
        </BasicButton>
      </S.FlexContainer>
    </S.Wrapper>
  );
};
export default ErrorPage;
