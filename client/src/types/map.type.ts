import { UserType } from '@type/user.type';

export type PlaceType = {
  idx: number;
  coordinate: {
    lat: number;
    lng: number;
  };
  place_name: string;
  img_url: string;
  users: UserType[];
};

export type MapTypeProps = {
  data: PlaceType[];
};
