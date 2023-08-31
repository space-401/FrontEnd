import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  height: 64px;
  margin: 32px;
  ${flexCenter}
  div {
    margin: 3.5px;
  }
`;

type IconBoxProps = {
  paddingLeft?: number;
};

const IconBox = styled.div<IconBoxProps>`
  background-color: #292a2f;
  height: inherit;
  width: 160px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : 0)}px;
  }
`;

const SpaceBox = styled.div`
  width: calc(100% - 320px - 64px);
  min-width: 200px;
  height: inherit;
  background-color: #292a2f;
  ${flexCenter};
  border-radius: 15px;
`;

const S = {
  Wrapper,
  IconBox,
  SpaceBox,
};

export default S;
