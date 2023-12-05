import { flexCenter, modalBackGround } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${modalBackGround};
  flex-direction: column;
  ${flexCenter};
  position: absolute;
  width: 482px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  border-radius: 20px;
`;

const Content = styled.div<{
  fontSize: number;
  lightgrey: boolean;
  onClick?: () => void;
}>`
  width: 100%;
  ${flexCenter};
  padding-bottom: 24px;
  padding-top: 24px;
  border-bottom: 1px solid var(--grey-4, #5f5f5f);
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ fontSize }) => fontSize}px;
  background-color: ${({ lightgrey, theme }) =>
    lightgrey ? theme.COLOR['gray-4'] : theme.COLOR['gray-5']};

  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const S = {
  Wrapper,
  Content,
};

export default S;
