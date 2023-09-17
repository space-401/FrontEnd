import S from './style';
import { ReactComponent as Logo } from '@assets/svg/KKIRI.svg';
import { ReactComponent as AlarmIcon } from '@assets/svg/alarmIcon.svg';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import { HeaderMock } from '@mocks/data/Header/header.mock';
import { Tooltip } from '@mui/material';

const Header = () => {
  const { spaceInfo } = HeaderMock;

  const moveSpace = (spaceId: number) => {
    console.log(spaceId, '해당 스페이스로 이동합니다.');
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
              return (
                <Tooltip title={space.space_title} key={space.space_id}>
                  <S.SpaceIcon
                    onClick={() => moveSpace(space.space_id)}
                    img_url={space.space_url}
                  />
                </Tooltip>
              );
            })}
          </S.SpaceIconBox>
        </S.SpaceBox>
        <S.IconBox>
          <AlarmIcon />
          <UserIcon />
        </S.IconBox>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
