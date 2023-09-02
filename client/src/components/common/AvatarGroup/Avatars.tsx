import { UserImageType } from '@type/user.type';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import S from '@components/common/AvatarGroup/style';

type PropType = {
  size: number;
  users: UserImageType[];
};

const Avatars = ({ users, size }: PropType) => (
  <S.Wrapper>
    <AvatarGroup max={users.length}>
      {users.map((user) => (
        <Avatar
          sx={{ width: size, height: size }}
          key={user.user_id}
          alt={user.user_name}
          src={user.user_profile_img}
        />
      ))}
    </AvatarGroup>
  </S.Wrapper>
);
export default Avatars;
