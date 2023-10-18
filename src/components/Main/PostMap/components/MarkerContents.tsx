import type { UserType } from '@type/post.type';
import { M } from '@components/Main/PostMap/components/style';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { ReactComponent as PlaceIcon } from '@assets/svg/markerIcon.svg';

export type MarkerPropTypes = {
  postTitle?: string;
  postUpdatedAt?: string;
  placeTitle: string;
  usersList?: UserType[];
};

const MarkerContents = (props: MarkerPropTypes) => {
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

export default MarkerContents;
