import { TagType } from '@type/tag.type';
import { UserImageType } from '@type/user.type';

export type SpacePostType = {
  post_title: string;
  place_title: string;
  place_tag: TagType[];
  place_create_at: Date;
  users: UserImageType[];
};

export type SelectSpacePropType = {
  space_title: string;
  isLike: boolean;
  user: UserImageType[];
};
