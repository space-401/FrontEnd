import { PATH } from '@/constants';
import { useSpaceListQuery } from '@/hooks';
import { OneSpaceType } from '@/types';
import { toastColorMessage } from '@/utils';
import { Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as AlarmIcon } from '@/assets/svg/alarmIcon.svg';
import { ReactComponent as Logo } from '@/assets/svg/headerLogo.svg';
import { ReactComponent as UserIcon } from '@/assets/svg/userIcon.svg';
import { S } from './style';

export const Header = () => {
  const { spaceList } = useSpaceListQuery().spaceList!;
  const navigate = useNavigate();
  const moveSpace = (spaceId: number) => {
    navigate(PATH.SPACE_MAIN(spaceId));
  };

  const params = useParams();
  const currentSpaceId = Number(params.spaceId);
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.IconBox onClick={() => navigate(PATH.SPACE)}>
          <Logo />
        </S.IconBox>
        <S.SpaceBox>
          <S.SpaceIconBox>
            {spaceList?.map((space: OneSpaceType) => {
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
              onClick={() => toastColorMessage('알림 기능은 출시 예정입니다.')}
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
  );
};
