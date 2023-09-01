import BasicBox from '@/components/common/BasicBox';
import S from './style';
import { ReactComponent as Logo } from '@assets/svg/KKIRI.svg';
import { ReactComponent as AlarmIcon } from '@assets/svg/alarmIcon.svg';
import { ReactComponent as PersonIcon } from '@assets/svg/personIcon.svg';

const Header = () => {
  return (
    <S.Wrapper>
      <S.IconBox padding={30}>
        <Logo />
      </S.IconBox>
      <S.SpaceBox>
        {Array.from({ length: 4 }).map(() => {
          return (
            <BasicBox
              color="lightgrey"
              key={Math.random() * 1000}
              borderradius={10}
              width={40}
            ></BasicBox>
          );
        })}
      </S.SpaceBox>
      <S.IconBox>
        <AlarmIcon />
        <PersonIcon />
      </S.IconBox>
    </S.Wrapper>
  );
};

export default Header;
