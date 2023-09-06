import Avatar from '@mui/material/Avatar';
import S from '@pages/MainPage/components/SelectBox/components/style';
import type { UserListProps } from '@type/main.type';

const UserList = (prop: UserListProps) => {
  const { Item } = prop;
  return (
    <S.UserList>
      <S.FlexUser>
        <Avatar
          sx={{
            width: '20px',
            height: '20px',
            background: 'white',
            padding: '2px',
          }}
          alt={Item.user_name}
          src={Item.user_profile_img}
        />
        <S.UserTiTle className={'user-title'}>{Item.user_name}</S.UserTiTle>
      </S.FlexUser>
    </S.UserList>
  );
};

export default UserList;
