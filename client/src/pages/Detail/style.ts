import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 452px;
  height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
`;

const S = {
  Wrapper,
};

export default S;
