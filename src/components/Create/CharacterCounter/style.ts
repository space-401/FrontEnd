import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

interface ICountWrapper {
  color: string;
  backgroundColor?: string;
}
const CountWrapper = styled.div<ICountWrapper>`
  ${flexCenter};
  font-size: 15px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
  width: 80px;
  margin-left: 10px;
  border-radius: 10px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  span {
    color: ${({ color }) => color};
  }
  gap: 1px;
`;

const S = {
  CountWrapper,
};

export default S;
