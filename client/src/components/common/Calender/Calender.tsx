import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { YEARS, MONTHS } from './util';
import getYear from 'date-fns/getYear';
import styled from 'styled-components';
import { ReactComponent as RightArrow } from '@assets/svg/rightArrow.svg';
import { ReactComponent as LeftArrow } from '@assets/svg/leftArrow.svg';
import { ReactComponent as CalenderIcon } from '@assets/svg/calenderIcon.svg';
import { postTimeChangeHelper } from '@/utils/time-helper';
import '@components/common/Calender/calender.css';
import { PostType } from '@/types/post.type';

type CalenderPropsType = {
  isMain: boolean;
  setPostData: React.Dispatch<React.SetStateAction<PostType>>;
};

const Calender = ({ isMain, setPostData }: CalenderPropsType) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  //날짜 형식 변환해서 보내줌
  useEffect(() => {
    if (startDate) {
      let newDateStr = {};
      if (endDate) {
        newDateStr = {
          startDate: postTimeChangeHelper(startDate),
          endDate: postTimeChangeHelper(endDate),
        };
      } else {
        newDateStr = {
          startDate: postTimeChangeHelper(startDate),
          endDate: postTimeChangeHelper(startDate),
        };
      }
      setPostData((prev: any) => {
        return {
          ...prev,
          date: newDateStr,
        };
      });
    }
  }, [startDate, endDate]);

  return (
    <div className="custom-react-datepicker__wrapper">
      <label>
        {isMain ? (
          <MStyledDatePicker
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
              decreaseMonth,
              increaseMonth,
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
                  <LeftArrow onClick={decreaseMonth} />
                  <RightArrow onClick={increaseMonth} />
                </div>
              </div>
            )}
          ></MStyledDatePicker>
        ) : (
          <DStyledDatePicker
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
              decreaseMonth,
              increaseMonth,
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
                  <LeftArrow onClick={decreaseMonth} />
                  <RightArrow onClick={increaseMonth} />
                </div>
              </div>
            )}
          ></DStyledDatePicker>
        )}
        <CalenderIcon style={{ position: 'absolute', bottom: 27, right: 15 }} />
        {!startDate && !endDate && (
          <S.DateText
            style={{
              position: 'absolute',
              bottom: 27,
              left: 15,
              fontWeight: 350,
            }}
          >
            등록할 날짜를 입력해 주세요
          </S.DateText>
        )}
      </label>
    </div>
  );
};

export default Calender;

const DStyledDatePicker = styled(DatePicker)`
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  height: 60px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  width: 312px;
  display: flex;
  padding-left: 2.6rem;
`;

const MStyledDatePicker = styled(DatePicker)`
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  width: 312px;
  display: flex;
  padding-left: 2.6rem;
`;

const DateText = styled.div`
  color: ${({ theme }) => theme.COLOR['gray-3']};
  position: absolute;
  bottom: 27;
  left: 15;
  font-weight: 400;
`;

export const S = {
  DateText,
};
