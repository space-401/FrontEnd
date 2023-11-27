import type { TagType, UserType } from '@/types';

export const onConvertedUserToSelectType = (list: UserType[]) => {
  return list.map((user) => {
    return {
      id: user.userId,
      title: user.userName,
      imgUrl: user.imgUrl,
    };
  });
};

export const onConvertedTagToSelectType = (list: TagType[]) => {
  return list.map((tag) => {
    return {
      id: tag.tagId,
      title: tag.tagTitle,
    };
  });
};
