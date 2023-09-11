import {TagType} from '@type/tag.type';
import {UserType} from '@type/user.type';

export type SpacePostType = {
    post_id: number;
    post_title: string;
    place_title: string;
    place_tag: TagType[];
    place_create_at: string;
    users: UserType[];
    main_img_url: string;
    position: { lat: number, lng: number },
};

export type SelectSpacePropType = {
    space_id: number;
    space_title: string;
    isLike: boolean;
    user: UserType[];
};
