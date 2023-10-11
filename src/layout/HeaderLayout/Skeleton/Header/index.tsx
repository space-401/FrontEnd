import S from '@layout/HeaderLayout/style';
import { ReactComponent as Logo } from '@assets/svg/headerLogo.svg';
import { ReactComponent as AlarmIcon } from '@assets/svg/alarmIcon.svg';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import KSkeleton from '@components/common/Skeleton';

const HeaderSkeleton = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.IconBox onClick={() => navigate(PATH.HOME)}>
          <Logo />
        </S.IconBox>
        <S.SpaceBox>
          <S.SpaceIconBox>
            <KSkeleton variant="rounded" width={24} height={24} />
            <KSkeleton variant="rounded" width={24} height={24} />
            <KSkeleton variant="rounded" width={24} height={24} />
            <KSkeleton variant="rounded" width={24} height={24} />
            <KSkeleton variant="rounded" width={24} height={24} />
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

export default HeaderSkeleton;
