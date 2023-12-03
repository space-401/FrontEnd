import type { SpaceInfoType, SpacePostType, TagType, UserType } from '@/types';
import { Dispatch, SetStateAction } from 'react';

export type selectType = {
  id: number;
  title: string;
  imgUrl?: string;
  isAdmin?: boolean;
};

export type MenuListProps = {
  searchValue: string;
  itemList: UserType[] | TagType[];
  select: selectType[];
  changeSelect: Dispatch<SetStateAction<selectType[]>>;
};

export type MainHeaderPropType = {
  spaceId: string;
  spaceInfo: SpaceInfoType;
  selectState: boolean;
  setSelectState: Dispatch<SetStateAction<boolean>>;
};

export type SelectBoxProps = {
  /**
   * 해당 박스의 라벨을 입력해주세요
   */
  labelName: '사용자' | '태그' | '작성자';
  /**
   * 해당 박스를 이루는 목록을 넣어주세요
   */
  ListItem: UserType[] | TagType[];
  /**
   * 해당 박스의 길이를 선택해주세요
   */
  boxWidth?: number;
  /**
   * 해당 박스의 높이를 선택해주세요
   */
  boxHeight?: number;
  /**
   * 해당 박스의 place holder를 입력해주세요
   */
  placeHolder?: string;
  /**
   * 메뉴리스트의 세로 길이를 적어주세요.
   */
  menuHeight?: number;
  /**
   * 메뉴리스트의 가로 길이를 적어주세요.
   */
  menuWidth?: number;
  /**
   * State를 받을 함수를 넣어주세요
   */
  setState: (select: selectType[]) => void;
  /**
   * 선택된 유저의 리스트를 넣어주세요
   */
  selectState: selectType[];
};

export type TagListProps = {
  Item: TagType;
};

export type UserListProps = {
  Item: UserType;
};

export type SearchProps = {
  placeholder: string;
  height: number;
  width: number;
  initialKeyword?: string;
  setKeyWorld: (keyword: string) => void;
};

export type SpacePostListProps = {
  postList: SpacePostType[];
  page: number;
  total: number;
  itemLength: number;
  movePage: (pageNumber: number | undefined) => void;
};

export type PaginationType = {
  total: number;
  page: number;
  itemLength: number;
  movePage: (number: number) => void;
};

export type PostListFilterProps = {
  selectUserList: selectType[];
  selectTagList: selectType[];
};

export type SectionProps = {
  marginTop: number;
};
