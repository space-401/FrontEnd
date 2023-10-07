import styled from 'styled-components';
import { flexCenter } from '@/styles/common';

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter};
  flex-direction: column;
`;

const Img = styled.div`
  width: 623px;
  height: 143px;
  background-color: white;
  margin: 0 auto;
`;

const SpaceContainer = styled.div`
  ${flexCenter};
  border-radius: 20px;
  gap: 8px;
  padding-top: 10rem;
  flex-wrap: wrap;
  position: relative;
`;

const Container = styled.div`
  border-radius: 30px;
  width: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  padding-top: 20px;
  margin-bottom: 30px;
  min-height: calc(100vh - 120px);
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 85px;
  margin-left: calc(100% - 130px);
`;

const AddBox = styled.div`
  ${flexCenter}
  width: 230px;
  height: 230px;
  border-radius: 20px;
  border: 1px solid #4e4f55;
  background: var(--grey-4, #5f5f5f);
`;

const EmptySpaceBox = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 20px;
  border: 1px solid #57585e;
  background: ${({ theme }) => theme.COLOR['gray-7']};
`;

const S = {
  Wrapper,
  Container,
  Img,
  SpaceContainer,
  AddBox,
  ButtonContainer,
  EmptySpaceBox,
};

export default S;
