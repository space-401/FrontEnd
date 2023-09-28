import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  min-width: 400px;
  max-width: 480px;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const ApproveButton = styled.div<{ isPositiveModal: boolean }>`
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
  color: ${({ theme, isPositiveModal }) =>
    isPositiveModal ? theme.COLOR.black : theme.COLOR.orange};
  background: ${({ theme, isPositiveModal }) =>
    isPositiveModal ? theme.COLOR.skyblue : 'rgba(254, 94, 52, 0.20)'};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  border-radius: 10px;
  cursor: pointer;
`;

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  color: ${({ theme }) => theme.COLOR.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  background: ${({ theme }) => theme.COLOR['gray-4']};
  font-style: normal;
  line-height: 150%;
  letter-spacing: 0.4px;
  border-radius: 10px;
  cursor: pointer;
`;

const TitleMessage = styled.div`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
  line-height: 150%;
`;

const DescriptionMessage = styled.div`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
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
  ApproveButton,
  CloseButton,
  TitleMessage,
  DescriptionMessage,
  ButtonGroup,
};

export default S;
