import { flexCenter } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLOR.black};
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  margin-top: 48px;
  color: ${({ theme }) => theme.COLOR['gray-4']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-36']};
`;

const Detail = styled.div`
  margin-top: 24px;
  color: ${({ theme }) => theme.COLOR['gray-4']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
`;

const FlexContainer = styled.div`
  display: flex;
  margin-top: 56px;
  gap: 24px;
`;

const S = {
  Wrapper,
  Title,
  Detail,
  FlexContainer,
};

export default S;
