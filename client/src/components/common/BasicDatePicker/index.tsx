import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { YEARS, MONTHS } from './util';
// import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';
import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="custom-react-datepicker__wrapper">
      <StyledDatePicker
        dateFormat="yyyy.MM.dd"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={3}
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        selectsRange
        calendarClassName="calenderWrapper"
        renderCustomHeader={({
          date,
          changeYear,
          // changeMonth,
          decreaseMonth,
          increaseMonth,
          // prevMonthButtonDisabled,
          // nextMonthButtonDisabled,
        }) => (
          <div className="customHeaderContainer">
            <div className="selectContainer">
              <select
                value={getYear(date)}
                className="year"
                onChange={({ target: { value } }) => changeYear(+value)}
              >
                {YEARS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="month">{MONTHS[date.getMonth()]}</div>
            </div>
            <div className="monthIconContainer">
              <KeyboardArrowLeftIcon onClick={decreaseMonth} />
              <KeyboardArrowRightIcon onClick={increaseMonth} />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;

const StyledDatePicker = styled(DatePicker)`
  background-color: rgb(50, 51, 57);
  color: white;
  height: 60px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  width: 312px;
  display: flex;
  padding-left: 3.5rem;
`;
