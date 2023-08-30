import styled from 'styled-components';

type propsType = {
  length: number;
  color?: string;
  children?: string;
  borderradius: number;
};

const BasicBox = (props: propsType) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.div<propsType>`
  width: ${(props) => props.length}px;
  height: ${(props) => props.length}px;
  background-color: ${(props) => (props.color ? props.color : '#3A3B41')};
  border-radius: ${(props) => props.borderradius}px;
`;

export default BasicBox;
