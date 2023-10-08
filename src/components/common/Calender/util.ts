import getYear from 'date-fns/getYear';

export const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2010 },
  (_, i) => getYear(new Date()) - i
);
export const MONTHS = Array.from({ length: 12 }, (_, i) => {
  return i;
});
