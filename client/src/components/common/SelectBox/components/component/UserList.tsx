import { UserType } from '@type/user.type';
import S from '@components/common/SelectBox/components/style';
import Avatar from '@mui/material/Avatar';

type UserListProps = {
  Item: UserType;
  select: boolean;
};

const UserList = (prop: UserListProps) => {
  const { Item, select } = prop;
  return (
    <S.UserList $select={select}>
      <S.FlexUser>
        <Avatar
          sx={{ width: '32px', height: '32px' }}
          alt={Item.user_name}
          src={Item.user_profile_img}
        />
        <S.UserTiTle className={'user-title'}>{Item.user_name}</S.UserTiTle>
      </S.FlexUser>
    </S.UserList>
  );
};

export default UserList;
