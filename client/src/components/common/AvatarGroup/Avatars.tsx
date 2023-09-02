import { UserImageType } from '@type/user.type';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import S from '@components/common/AvatarGroup/style';

type PropType = {
  /**
   * 해당 사용자 이미지의 크기를 지정을 해줍니다.
   * */
  size: number;
  /**
   * 사용자들에 대한 정보를 받습니다.
   */
  users: UserImageType[];
  /**
   * 최대 몇 개의 사진을 보여줄지 결정합니다.
   */
  max: number;
};

const Avatars = ({ users, size, max }: PropType) => (
  <S.Wrapper>
    <AvatarGroup max={max}>
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
