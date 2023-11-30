import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker)<{
  width: number;
  height: number;
  borderRadius: number;
  fontSize?: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.TEXT_SIZE['text-18']};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  display: flex;
  padding-left: 0.7rem;
  caret-color: transparent;
`;

const DateText = styled.div<{ isMain: boolean }>`
  color: ${({ isMain }) => (isMain ? '#E9D7EF' : '#767676')};
  position: absolute;
  bottom: 27px;
  left: 15px;
  font-weight: 400;
`;

export const S = {
  StyledDatePicker,
  DateText,
};
