import { flexCenter } from '@/styles/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.black};
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

const IconContainer = styled.div`
  padding-top: 24px;
  padding-left: 24px;
`;
const ContentWrapper = styled.div`
  width: 1200px;
  ${flexCenter}
  flex-direction: column;
`;
// const IconWrapper = styled.div`
//   left: 24px;
//   position: absolute;
//   top: 24px;
// `;

const S = {
  Wrapper,
  IconWrapper,
  IconContainer,
  ContentWrapper,
};

export default S;
