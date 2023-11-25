import type { UserType, TagType } from '@type/post.type';

export const isUserTypeArray = (
  items: UserType[] | TagType[]
): items is TagType[] => {
  return items?.every((item) => 'tagId' in item);
};

export const isUserType = (items: UserType | TagType): items is TagType => {
  return 'tagId' in items;
};

export const isObjectKey = (
  object: object,
  key: number | string
): key is keyof typeof object => {
  return Object.keys(object).findIndex((value) => value == key) !== -1;
};
