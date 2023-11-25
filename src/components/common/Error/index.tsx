import S from '@components/common/Error/style';
import { ReactComponent as ErrorIcon } from '@assets/svg/error/error.svg';
import BasicButton from '@/components/common/BasicButton';
import { useNavigate } from 'react-router-dom';
import { theme } from '@/styles/theme/theme';
import { HTTP_STATUS_CODE } from '@constants/api';

type PropsType = {
  statusCode: number;
  errorCode: number | undefined;
  resetError: () => void;
};

const ErrorPage = (props: Partial<PropsType>) => {
  const {
    statusCode = props.statusCode === HTTP_STATUS_CODE.CONTENT_TOO_LARGE
      ? HTTP_STATUS_CODE.BAD_REQUEST
      : props.statusCode,
    resetError = () => {},
  } = props;

  const navigate = useNavigate();

  const ResetErrorHandler = (callback: () => void) => {
    resetError();
    callback();
  };

  console.log('에러 페이지');
  return (
    <S.Wrapper>
      <ErrorIcon />
      <S.Title>{statusCode}</S.Title>
      <S.Detail>정보를 불러올 수 없습니다.</S.Detail>
      {/* <Loading /> */}
      <S.FlexContainer>
        <BasicButton
          border="1px solid #413F3F"
          onClick={() => {
            ResetErrorHandler(() => navigate(-1));
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
            ResetErrorHandler(() => navigate('/'));
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
