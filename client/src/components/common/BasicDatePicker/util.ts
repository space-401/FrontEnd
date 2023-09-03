import getYear from 'date-fns/getYear';

export const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2000 },
  (_, i) => getYear(new Date()) - i
);
export const MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
