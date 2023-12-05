import { flexCenter } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 16px 0 24px 0;
  border-radius: 20px;
  overflow: hidden;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    height: auto;
  }
`;

const WrapperInner = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr;
  height: 650px;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};

    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const StyleResetContainer = styled.div`
  div {
    border: none !important;
    background: inherit;
  }
`;

const S = {
  Wrapper,
  WrapperInner,
  Container,
  StyleResetContainer,
};

export default S;
