import styled from 'styled-components';
import { flexColumCenter } from '@styles/common';
import { theme } from '@styles/theme/theme';

const Wrapper = styled.div`
  width: inherit;
  height: inherit;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 5px;
  gap: 22px;
  ${flexColumCenter};
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
};

export default S;
