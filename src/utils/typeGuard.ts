import type { UserType, TagType } from '@type/post.type';

export const isUserTypeArray = (
  items: UserType[] | TagType[]
): items is TagType[] => {
  return items?.every((item) => 'tagId' in item);
};

export const isUserType = (items: UserType | TagType): items is TagType => {
  return 'tagId' in items;
};
