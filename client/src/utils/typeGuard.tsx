import { UserType } from '@type/user.type';
import { TagType } from '@type/tag.type';

export const isUserTypeArray = (
  items: UserType[] | TagType[]
): items is TagType[] => {
  return items.every((item) => 'tag_id' in item);
};

export const isUserType = (items: UserType | TagType): items is TagType => {
  return 'tag_id' in items;
};
