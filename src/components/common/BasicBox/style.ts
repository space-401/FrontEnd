import styled from 'styled-components';
import { BasicBoxProp } from '.';
import { flexCenter } from '@/styles';

const Wrapper = styled.div<BasicBoxProp>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-color: ${({ color, theme }) =>
    color ? color : theme.COLOR['gray-5']};
  border-radius: ${(props) => props.borderradius}px;
  ${flexCenter};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

const S = {
  Wrapper,
};

export default S;
