import { SelectSpacePropType } from '@type/space.type';
import Avatars from '@components/common/AvatarGroup/Avatars';
import S from '@components/FlipCard/SpaceSelectBack/style';
import { IFlipCard } from '@components/FlipCard/FlipCard';

export interface ISpaceSelectBack extends IFlipCard {}

const SpaceSelectBack = (props: SelectSpacePropType): ISpaceSelectBack => {
  const { space_title, isLike, user } = props;
  return (
    <>
      <S.Wrapper>
        <S.Shadow />
        <S.Container>
          <S.Title>{space_title}</S.Title>
          <Avatars max={user.length} size={32} users={user} />
          <S.LikeIcon>{isLike}</S.LikeIcon>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default SpaceSelectBack;
