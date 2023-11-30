import type { UserListProps } from '@/types';
import Avatar from '@mui/material/Avatar';
import S from '../style';

export const UserList = (prop: UserListProps) => {
  const { Item } = prop;
  return (
    <S.UserList>
      <S.FlexUser>
        <Avatar
          sx={{
            width: '20px',
            height: '20px',
            background: 'white',
          }}
          alt={Item.userName}
          src={Item.imgUrl}
        />
        <S.UserTiTle className={'user-title'}>{Item.userName}</S.UserTiTle>
      </S.FlexUser>
    </S.UserList>
  );
};
