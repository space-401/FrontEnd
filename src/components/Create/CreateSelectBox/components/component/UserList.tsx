import Avatar from '@mui/material/Avatar';
import S from '../style';
import type { UserListProps } from '@/types';

export const UserList = (prop: UserListProps) => {
  const { Item } = prop;
  const { userName, imgUrl } = Item;
  return (
    <S.UserList>
      <S.FlexUser>
        <Avatar
          sx={{
            width: '24px',
            height: '24px',
            background: 'white',
            padding: '2px',
          }}
          alt={userName}
          src={imgUrl}
        />
        <S.UserTiTle className={'user-title'}>{userName}</S.UserTiTle>
      </S.FlexUser>
    </S.UserList>
  );
};
