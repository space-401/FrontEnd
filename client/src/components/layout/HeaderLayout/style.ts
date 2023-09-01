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

interface IIconBoxProps {
  padding?: number;
}

const IconBox = styled.div<IIconBoxProps>`
  background-color: #292a2f;
  height: inherit;
  width: 160px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    padding-left: ${(props) => (props.padding ? props.padding : 0)}px;
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
