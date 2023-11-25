import type { UserType } from '@/types';
import { ReactComponent as PlaceIcon } from '@/assets/svg/markerIcon.svg';
import { Avatars } from '@/components/common';
import { M } from './style';

export type MarkerPropTypes = {
  postTitle?: string;
  postUpdatedAt?: string;
  placeTitle: string;
  usersList?: UserType[];
};

export const MarkerContents = (props: MarkerPropTypes) => {
  const { postTitle, postUpdatedAt, placeTitle, usersList } = props;

  return (
    <M.ContentBox>
      <M.ContentPlace>
        {postTitle && (
          <>
            <PlaceIcon style={{ width: '16px', height: '16px' }} />
            {placeTitle}
          </>
        )}
      </M.ContentPlace>
      <M.MarkerContainer>
        <M.ContentTitle>{postTitle}</M.ContentTitle>
        {usersList && (
          <M.ContentInfo>
            <M.ContentCreateAt>{postUpdatedAt}</M.ContentCreateAt>
            <Avatars size={24} users={usersList} max={4} />
          </M.ContentInfo>
        )}
      </M.MarkerContainer>
    </M.ContentBox>
  );
};
