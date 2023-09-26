import styled from 'styled-components';

const Title = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const Description = styled.div<{ margin_top: number }>`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const Bar = styled.div<{ margin_top: number }>`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const NameBox = styled.div<{ margin_top: number }>`
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const IconBox = styled.div<{ margin_top: number }>`
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const WhiteSpan = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const IConBox = styled.div`
  margin-top: 17px;
  display: flex;
  gap: 17px;
`;
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  gap: 24px;
  justify-content: flex-end;
`;
const Button = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-5']};

  color: ${({ theme }) => theme.COLOR['gray-1']};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

export const A = {
  Title,
  Description,
  Bar,
  NameBox,
  IconBox,
  WhiteSpan,
  IConBox,
  ButtonGroup,
  Button,
};
