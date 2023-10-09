import S from '@layout/HeaderLayout/style';
import { ReactComponent as Logo } from '@assets/svg/KKIRI.svg';
import { ReactComponent as AlarmIcon } from '@assets/svg/alarmIcon.svg';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import { Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { END_POINTS } from '@constants/api';
import { PATH } from '@constants/path';
import { useSpaceListQuery } from '@hooks/api/space/useSpaceListQuery';

const Header = () => {
  const { spaceList } = useSpaceListQuery();
  const navigate = useNavigate();
  const moveSpace = (spaceId: number) => {
    navigate(END_POINTS.SPACE_INFO(spaceId));
  };

  const params = useParams();
  const currentSpaceId = Number(params.spaceId);

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.IconBox onClick={() => navigate(PATH.HOME)}>
          <Logo />
        </S.IconBox>
        <S.SpaceBox>
          <S.SpaceIconBox>
            {spaceList!.map((space) => {
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
            <AlarmIcon width={15} height={15} />
            <UserIcon
              width={15}
              height={15}
              onClick={() => navigate(PATH.USER_INFO)}
            />
          </S.IconGroup>
        </S.IconBox>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
