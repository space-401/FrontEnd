import Avatars from '@components/common/AvatarGroup/Avatars';
import S from '@components/common/FlipCard/Back/style';
import { SpaceInfoBackPropsType } from '@type/post.type';

const SpaceInfoBack = (props: SpaceInfoBackPropsType) => {
  const { item, isBig } = props;

  const { spaceTitle, userList } = item;

  return (
    <S.Wrapper isBig={isBig}>
      <S.Shadow />
      <S.Container className={'container'} info="space">
        <S.PostTitle className={'title'}>{spaceTitle}</S.PostTitle>
        <S.InfoBottom className={'info-bottom'} info={'space'}>
          <Avatars
            max={isBig ? 4 : 5}
            size={isBig ? 45 : 28}
            users={userList}
          />
        </S.InfoBottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default SpaceInfoBack;
