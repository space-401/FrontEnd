import { selectType } from './main.type';

export type PostType = {
  title: string;
  content: string;
  people: selectType[];
  tag: selectType[];
  place: {
    content: string;
    position: {
      lng: string;
      lat: string;
    };
  };
  imgs: File[];
  date: {
    startDate: Date | null;
    endDate: Date | null;
  };
};
