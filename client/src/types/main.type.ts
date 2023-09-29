import type { UserType, TagType } from '@type/post.type';
import { Dispatch, SetStateAction } from 'react';
import type { SpaceInfo, SpacePostType } from '@type/space.type';

export type selectType = {
  id: number;
  title: string;
  imgUrl?: string;
};

export type MenuListProps = {
  searchValue: string;
  itemList: UserType[] | TagType[];
  select: selectType[];
  changeSelect: Dispatch<SetStateAction<selectType[]>>;
};

export type PostListPropType = {
  spaceId: string;
  selectState: boolean;
  userList: UserType[];
  tagList: TagType[];
};

export type MainHeaderPropType = {
  spaceInfo: SpaceInfo;
  selectState: boolean;
  setSelectState: Dispatch<SetStateAction<boolean>>;
};

export type SelectBoxProps = {
  /**
   * 해당 박스의 라벨을 입력해주세요
   */
  labelName: '사용자' | '태그';
  /**
   * 해당 박스를 이루는 목록을 넣어주세요
   */
  ListItem: UserType[] | TagType[];
  /**
   * 해당 박스의 길이를 선택해주세요
   */
  BoxWidth?: number;
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
};

export type TagListProps = {
  Item: TagType;
};

export type UserListProps = {
  Item: UserType;
};

export type SearchProps = {
  setState: (searchValue: string) => void;
  placeholder: string;
  state: {
    selectUserList: selectType[];
    selectTagList: selectType[];
    search: string;
  };
};

export type SpacePostListProps = {
  postList: SpacePostType[];
  page: number;
  total: number;
  itemLength: number;
};

export type PaginationType = {
  total: number;
  page: number;
  itemLength: number;
  movePage: (number: number) => void;
};
