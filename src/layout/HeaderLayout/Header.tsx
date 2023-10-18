import S from '@layout/HeaderLayout/style';
import { ReactComponent as Logo } from '@assets/svg/headerLogo.svg';
import { ReactComponent as AlarmIcon } from '@assets/svg/alarmIcon.svg';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import { Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH } from '@constants/path';
import { useSpaceListQuery } from '@hooks/api/space/useSpaceListQuery';
import { toastColorMessage } from '@utils/toastMessage';
import ErrorBoundary from '@/components/common/Error/errorBoundary';
import ErrorPage from '@/components/common/Error';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

const Header = () => {
  const { spaceList } = useSpaceListQuery();
  const navigate = useNavigate();
  const moveSpace = (spaceId: number) => {
    navigate(PATH.SPACE_MAIN(spaceId));
  };

  const params = useParams();
  const currentSpaceId = Number(params.spaceId);
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary fallback={ErrorPage} onReset={reset}>
          <S.HeaderWrapper>
            <S.Container>
              <S.IconBox onClick={() => navigate(PATH.SPACE)}>
                <Logo />
              </S.IconBox>
              <S.SpaceBox>
                <S.SpaceIconBox>
                  {spaceList?.map((space) => {
                    const { spaceId, spaceTitle, imgUrl } = space;
                    return (
                      <Tooltip title={spaceTitle} key={spaceId}>
                        <S.SpaceIcon
                          isCurrentSpace={currentSpaceId === spaceId}
                          onClick={() => moveSpace(spaceId)}
                          img_url={imgUrl}
                        />
                      </Tooltip>
                    );
                  })}
                </S.SpaceIconBox>
              </S.SpaceBox>
              <S.IconBox>
                <S.IconGroup>
                  <AlarmIcon
                    width={15}
                    height={15}
                    onClick={() =>
                      toastColorMessage('알림 기능은 출시 예정입니다.')
                    }
                  />
                  <UserIcon
                    width={15}
                    height={15}
                    onClick={() => navigate(PATH.USER_INFO)}
                  />
                </S.IconGroup>
              </S.IconBox>
            </S.Container>
          </S.HeaderWrapper>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default Header;
