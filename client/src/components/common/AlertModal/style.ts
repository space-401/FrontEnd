import styled from 'styled-components';

const Container = styled.div<{ width: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  width: ${({ width }) => width}px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const AlertButton = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
  line-height: 150%;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.COLOR.white};
  background: ${({ theme }) => theme.COLOR['gray-3']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  border-radius: 10px;
  cursor: pointer;
`;

const AlertMessage = styled.div`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
  line-height: 150%;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const S = {
  Container,
  AlertButton,
  AlertMessage,
  ButtonGroup,
};

export default S;
