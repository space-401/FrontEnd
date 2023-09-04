import styled from 'styled-components';
import { BasicBoxProp } from '.';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div<BasicBoxProp>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-color: ${(props) =>
    props.color == 'lightgrey' ? ' #3A3B41' : '#413F3F'};
  border-radius: ${(props) => props.borderradius}px;
  ${flexCenter}
`;

const S = {
  Wrapper,
};

export default S;
