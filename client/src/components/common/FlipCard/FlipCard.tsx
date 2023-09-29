import S from '@components/common/FlipCard/style';
import PostInfoBack from '@components/common/FlipCard/Back/PostInfoBack';
import {
  FlipType,
  PostInfoBackPropsType,
  SpaceInfoBackPropsType,
} from '@type/post.type';
import SpaceInfoBack from './Back/SpaceInfoBack';
import { SpacePostType, OneSpaceType } from '@/types/space.type';

const FlipCard = (
  props: FlipType & (PostInfoBackPropsType | SpaceInfoBackPropsType)
) => {
  const { imgUrl, onClick, size, item, borderRadius } = props;

  function isPostInfo(
    item: SpacePostType | OneSpaceType
  ): item is SpacePostType {
    return 'postId' in item;
  }

  return (
    <>
      <S.Flip size={size} onClick={onClick}>
        <S.Card img={imgUrl} borderRadius={borderRadius} />
        <S.Hover img={imgUrl}>
          {isPostInfo(item) ? (
            <PostInfoBack size={size} item={item} />
          ) : (
            <SpaceInfoBack size={size} item={item} />
          )}
        </S.Hover>
      </S.Flip>
    </>
  );
};

export default FlipCard;
