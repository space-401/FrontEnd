import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
  width: 100%;
  max-width: 1856px;
  min-height: 520px;
  border-radius: 15px;
  background: ${({ theme }) => theme.COLOR['gray-6']};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    width: 95vw;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const S = {
  Wrapper,
};
