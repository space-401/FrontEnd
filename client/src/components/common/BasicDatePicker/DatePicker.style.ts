import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const StyledDatePicker = styled(DatePicker)`
  background-color: rgb(50, 51, 57);
  color: white;
  height: 60px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  width: 200px;
  padding-left: 13px;
`;

const S = {
  StyledDatePicker,
};
export default S;
