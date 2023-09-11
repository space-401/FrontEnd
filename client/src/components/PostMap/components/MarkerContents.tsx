import { UserType } from '@type/user.type';
import { M } from '@components/PostMap/components/style';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { ReactComponent as PlaceIcon } from '@assets/svg/markerIcon.svg';

export type MarkerPropTypes = {
  post_title: string;
  post_place: string;
  users: UserType[];
  create_at: string;
};

const MarkerContents = (props: MarkerPropTypes) => {
  const { create_at, users, post_place, post_title } = props;
  return (
    <M.ContentBox>
      <M.ContentPlace>
        <PlaceIcon style={{ width: '16px', height: '16px' }} />
        {post_place}
      </M.ContentPlace>
      <M.MarkerContainer>
        <M.ContentTitle>{post_title}</M.ContentTitle>
        <M.ContentInfo>
          <M.ContentCreateAt>{create_at}</M.ContentCreateAt>
          <Avatars size={24} users={users} max={4} />
        </M.ContentInfo>
      </M.MarkerContainer>
    </M.ContentBox>
  );
};

export default MarkerContents;
