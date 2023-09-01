import styled from 'styled-components';
import { TextAreaBoxProps } from './TextAreaBox';

const Wrapper = styled.textarea<TextAreaBoxProps>`
  background-color: #323339;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => props.height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const S = {
  Wrapper,
};

export default S;
