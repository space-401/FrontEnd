import { SuggestionDataItem } from 'react-mentions';
import { UserType } from '@type/user.type';
import S from '@components/Detail/style';
import Avatar from '@mui/material/Avatar';
import { ReactNode } from 'react';

type OneMentionType = {
  suggestion: SuggestionDataItem;
  userList: UserType[];
  highlightedDisplay: ReactNode;
};
const OneMention = (props: OneMentionType) => {
  const { userList, suggestion } = props;
  const selectUser = userList.filter(
    (value) => value.user_id === suggestion.id
  )[0];
  return (
    <S.Wrapper>
      <Avatar
        src={selectUser.user_profile_img}
        alt={selectUser.user_name}
        sx={{ width: '24px', height: '24px' }}
      />
      <S.UserName>{selectUser.user_name}</S.UserName>
    </S.Wrapper>
  );
};

export default OneMention;
