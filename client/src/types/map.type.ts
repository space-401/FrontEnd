import { UserType } from '@type/user.type';
import { ReactNode } from 'react';

export type CoordinateType = {
  lat: number;
  lng: number;
};

export type PlaceType = {
  idx: number;
  position: CoordinateType;
  content: string;
  img_url: string;
  users: UserType[];
};

export type MapTypeProps = {
  data: PlaceType[];
};

export type StrictChildren = {
  children: ReactNode;
};
