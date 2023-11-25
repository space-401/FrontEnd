import { OneMentionType } from '@/types';
import Avatar from '@mui/material/Avatar';
import S from './style';

export const OneMention = (props: OneMentionType) => {
  const { userList, suggestion } = props;
  const selectUser = userList.filter(
    (value) => value.userId === suggestion.id
  )[0];

  return (
    <S.Wrapper>
      <Avatar
        src={selectUser.imgUrl}
        alt={selectUser.userName}
        sx={{ width: '24px', height: '24px' }}
      />
      <S.UserName>{selectUser.userName}</S.UserName>
    </S.Wrapper>
  );
};
