import styled from 'styled-components';

const Input = styled.input`
  background-color: #323339;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => props.height}px;
  border-radius: 10px;
  padding: 1rem;
`;

const S = {
  Input,
};

export default S;
