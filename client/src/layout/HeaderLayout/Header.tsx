import S from './style';
import { ReactComponent as Logo } from '@assets/svg/KKIRI.svg';
import { ReactComponent as AlarmIcon } from '@assets/svg/alarmIcon.svg';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import { HeaderMock } from '@mocks/data/Header/header.mock';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { END_POINTS } from '@constants/api';
import { PATH } from '@constants/path';

const Header = () => {
  const { spaceInfo } = HeaderMock;
  const navigate = useNavigate();

  const moveSpace = (spaceId: number) => {
    navigate(END_POINTS.SPACE_INFO(String(spaceId)));
  };

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.IconBox padding={30}>
          <Logo />
        </S.IconBox>
        <S.SpaceBox>
          <S.SpaceIconBox>
            {spaceInfo.map((space) => {
              const { spaceId, spaceTitle, imgUrl } = space;

              return (
                <Tooltip title={spaceTitle} key={spaceId}>
                  <S.SpaceIcon
                    onClick={() => moveSpace(spaceId)}
                    img_url={imgUrl}
                  />
                </Tooltip>
              );
            })}
          </S.SpaceIconBox>
        </S.SpaceBox>
        <S.IconBox>
          <AlarmIcon />
          <UserIcon onClick={() => navigate(PATH.USER_INFO)} />
        </S.IconBox>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
