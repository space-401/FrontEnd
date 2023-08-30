import BasicBox from '@/components/common/BasicBox';
import { flexCenter } from '@/styles/common';
import styled from 'styled-components';
// import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/svg/alarmIcon.svg';
import { ReactComponent as PersonIcon } from '../../../assets/svg/personIcon.svg';

const Header = () => {
  return (
    <Wrapper>
      <IconBox>{/* <Logo /> */}</IconBox>
      <SpaceBox>
        {Array.from({ length: 4 }).map(() => {
          return (
            <BasicBox
              key={Math.random() * 1000}
              borderradius={10}
              length={40}
            ></BasicBox>
          );
        })}
      </SpaceBox>
      <IconBox>
        <AlarmIcon />
        <PersonIcon />
      </IconBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 64px;
  margin: 32px;
  ${flexCenter}
  div {
    margin: 3.5px;
  }
`;

const IconBox = styled.div`
  background-color: #292a2f;
  height: inherit;
  width: 160px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SpaceBox = styled.div`
  width: calc(100% - 320px - 64px);
  min-width: 200px;
  height: inherit;
  background-color: #292a2f;
  ${flexCenter};
  border-radius: 15px;
`;
