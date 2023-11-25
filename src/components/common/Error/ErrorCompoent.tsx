import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/constants';
import { useResetError } from '@/hooks';
import { theme } from '@/styles';
import { isObjectKey } from '@/utils';
import { ReactComponent as ErrorIcon } from '@/assets/svg/error/error.svg';
import { BasicButton } from '@/components/common';
import S from './style';

type PropsType = {
  statusCode?: number;
  resetError?: () => void;
};

export const ErrorComponent = ({
  statusCode = HTTP_STATUS_CODE.NOT_FOUND,
  resetError = () => {},
}: PropsType) => {
  const { resetHandling } = useResetError(resetError);

  if (!isObjectKey(HTTP_ERROR_MESSAGE, statusCode)) return null;

  const { HEADING, BUTTON, BODY } = HTTP_ERROR_MESSAGE[statusCode];

  return (
    <S.Wrapper>
      <ErrorIcon />
      <S.Title>{HEADING}</S.Title>
      <S.Detail>{BODY}</S.Detail>
      <S.FlexContainer>
        {HTTP_ERROR_MESSAGE[statusCode] !==
        HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR] ? (
          <BasicButton
            border="1px solid #413F3F"
            onClick={() => {
              resetHandling(false);
            }}
            backgroundColor={theme.COLOR['gray-7']}
            color={theme.COLOR.white}
            width={119}
            height={44}
          >
            {BUTTON}
          </BasicButton>
        ) : (
          <>
            <BasicButton
              border="1px solid #413F3F"
              onClick={() => {
                resetHandling(true);
              }}
              backgroundColor={theme.COLOR['gray-7']}
              color={theme.COLOR.white}
              width={119}
              height={44}
            >
              {BUTTON}
            </BasicButton>
            <BasicButton
              onClick={() => {
                resetHandling(false);
              }}
              backgroundColor={theme.COLOR['gray-1']}
              width={119}
              height={44}
            >
              홈으로 가기
            </BasicButton>
          </>
        )}
      </S.FlexContainer>
    </S.Wrapper>
  );
};
export default ErrorComponent;
