import Avatars from '@components/common/AvatarGroup/Avatars';
import S from '@components/common/FlipCard/Back/style';
import { SpaceInfoBackPropsType } from '@type/post.type';

const SpaceInfoBack = (props: SpaceInfoBackPropsType) => {
  const { item, size } = props;

  const { spaceTitle, userList } = item;

  return (
    <S.Wrapper size={size}>
      <S.Shadow />
      <S.Container className={'container'} info="space">
        <S.PostTitle className={'title'}>{spaceTitle}</S.PostTitle>
        <S.InfoBottom className={'info-bottom'} info={'space'}>
          <Avatars
            max={size === 'big' ? 4 : 5}
            size={size === 'big' ? 45 : 28}
            users={userList}
          />
        </S.InfoBottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default SpaceInfoBack;
