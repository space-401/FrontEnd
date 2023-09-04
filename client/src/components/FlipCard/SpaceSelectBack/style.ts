import styled from 'styled-components';
import { flexColumCenter } from '@styles/common';
import { theme } from '@styles/theme/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  background-size: cover;
  backdrop-filter: blur(2px);
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};

  div {
    z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  ${flexColumCenter};
  justify-content: center;
  border-radius: 5px;
  backdrop-filter: blur(2px);
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']} !important;
  background: black;
  opacity: 0.5;
`;

const Title = styled.div`
  color: ${theme.COLOR.white};
  font-size: ${theme.TEXT_SIZE['text-36']};
  font-style: normal;
  font-weight: ${theme.FONT_WEIGHT['WEIGHT-500']};
  line-height: normal;
  white-space: pre-line;
`;

const LikeIcon = styled.div``;

const S = {
  Wrapper,
  Title,
  LikeIcon,
  Container,
  Shadow,
};

export default S;
