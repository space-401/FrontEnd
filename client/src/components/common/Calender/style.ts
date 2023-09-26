import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const DStyledDatePicker = styled(DatePicker)`
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  height: 60px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  width: 322px !important;

  display: flex;
  padding-left: 2.6rem;
`;

const MStyledDatePicker = styled(DatePicker)`
  height: 50px;
  border-radius: 5px !important;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};

  width: 322px !important;
  display: flex;
  padding-left: 2.6rem;
`;

const DateText = styled.div<{ isMain: boolean }>`
  color: ${({ isMain }) => (isMain ? '#E9D7EF' : '#767676')};
  position: absolute;
  bottom: 27;
  left: 15;
  font-weight: 400;
`;

export const S = {
  DateText,
  DStyledDatePicker,
  MStyledDatePicker,
};
