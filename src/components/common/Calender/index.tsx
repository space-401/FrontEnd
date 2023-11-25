import { DateInfoType } from '@/types/post.type';
import { postTimeChangeHelper } from '@/utils';
import { getMonth } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import getYear from 'date-fns/getYear';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CalenderIcon } from '@/assets/svg/calenderIcon.svg';
import { ReactComponent as DownIcon } from '@/assets/svg/chevron/chevron_down.svg';
import { ReactComponent as UpIcon } from '@/assets/svg/chevron/chevron_up.svg';
import { ReactComponent as MainCalenderIcon } from '@/assets/svg/mainCalender.svg';
import './calender.css';
import { S } from './style';
import { MONTHS, YEARS } from './util';

type CalenderPropsType = {
  width: number;
  height: number;
  borderRadius: number;
  setDateInfo: React.Dispatch<DateInfoType>;
  isMain: boolean;
  dateInfo?: DateInfoType;
  fontSize?: number;
};

export const Calender = ({
  setDateInfo,
  height,
  width,
  borderRadius,
  isMain,
  dateInfo,
  fontSize,
}: CalenderPropsType) => {
  const [startDate, setStartDate] = useState<Date | null>(
    dateInfo?.startDate ? new Date(dateInfo.startDate!) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    dateInfo?.endDate ? new Date(dateInfo.endDate!) : null
  );

  useEffect(() => {
    dateInfo?.startDate && setStartDate(new Date(dateInfo.startDate));
    dateInfo?.endDate && setEndDate(new Date(dateInfo.endDate));
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false]);

  const toggleDropdown = (index: number) => {
    const changeState = !isDropdownOpen[index];
    if (index === 0) {
      setIsDropdownOpen([changeState, false]);
    } else {
      setIsDropdownOpen([false, changeState]);
    }
  };

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setIsDropdownOpen([false, false]);
  };

  //날짜 형식 변환해서 보내줌
  useEffect(() => {
    if (startDate) {
      let newDateStr: DateInfoType;
      if (endDate) {
        newDateStr = {
          startDate: postTimeChangeHelper(startDate) ?? '',
          endDate: postTimeChangeHelper(endDate) ?? '',
        };
      } else {
        newDateStr = {
          startDate: postTimeChangeHelper(startDate) ?? '',
          endDate: postTimeChangeHelper(startDate) ?? '',
        };
      }
      setDateInfo(newDateStr);
    }
  }, [startDate, endDate]);

  return (
    <div
      className="custom-react-datepicker__wrapper"
      style={{ paddingBottom: '0' }}
    >
      <label>
        <S.StyledDatePicker
          fontSize={fontSize}
          borderRadius={borderRadius}
          width={width}
          height={height}
          dateFormat="yyyy.MM.dd"
          showYearDropdown
          scrollableYearDropdown
          shouldCloseOnSelect
          yearDropdownItemNumber={15}
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          locale={ko}
          selectsRange
          dateFormatCalendar="MMMM"
          calendarClassName="calenderWrapper"
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="customHeaderContainer">
              <div className="selectContainer">
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '16px',
                      fontWeight: 600,
                      fontFamily: 'IBM Plex Sans KR',
                      backgroundColor: '#232120',
                    }}
                    onClick={() => {
                      toggleDropdown(0);
                    }}
                  >
                    {getYear(date)}
                    {isDropdownOpen[0] ? <UpIcon /> : <DownIcon />}
                  </div>
                  {isDropdownOpen[0] && (
                    <select
                      style={{
                        position: 'absolute',
                        top: 30,
                        backgroundColor: '#232120',
                      }}
                      value={getYear(date)}
                      className="year"
                      size={3}
                      onChange={({ target: { value } }) => changeYear(+value)}
                    >
                      {YEARS.map((option) => (
                        <option
                          key={option}
                          value={option}
                          style={{ margin: '4px' }}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: '16px',
                      fontWeight: 600,
                      fontFamily: 'IBM Plex Sans KR',
                      backgroundColor: '#232120',
                    }}
                    onClick={() => {
                      toggleDropdown(1);
                    }}
                  >
                    {getMonth(date) + 1}
                    {isDropdownOpen[1] ? <UpIcon /> : <DownIcon />}
                  </div>

                  {isDropdownOpen[1] && (
                    <select
                      style={{
                        position: 'absolute',
                        top: '25px',
                        backgroundColor: '#232120',
                      }}
                      value={getMonth(date)}
                      className="month"
                      size={3}
                      onChange={({ target: { value } }) => changeMonth(+value)}
                    >
                      {MONTHS.map((option) => (
                        <option
                          key={option}
                          value={option}
                          style={{ margin: '4px' }}
                        >
                          {option + 1}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
          )}
        ></S.StyledDatePicker>
        {isMain ? (
          <MainCalenderIcon
            style={{
              position: 'absolute',
              bottom: '10',
              marginLeft: '170',
            }}
          />
        ) : (
          <CalenderIcon
            style={{ position: 'absolute', bottom: '19', marginLeft: '230' }}
          />
        )}
        {!startDate && !isMain && (
          <S.DateText
            style={{
              position: 'absolute',
              bottom: 20,
              left: 15,
              fontWeight: 350,
            }}
            isMain={false}
          >
            등록할 날짜를 입력해 주세요
          </S.DateText>
        )}
        {!startDate && isMain && (
          <S.DateText
            style={{
              position: 'absolute',
              bottom: 12,
              left: 8,
              color: 'white',
              fontSize: 12,
            }}
            isMain={true}
          >
            날짜
          </S.DateText>
        )}
      </label>
    </div>
  );
};
