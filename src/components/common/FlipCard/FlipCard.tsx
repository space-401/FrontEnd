import S from '@components/common/FlipCard/style';
import PostInfoBack from '@components/common/FlipCard/Back/PostInfoBack';
import SpaceInfoBack from './Back/SpaceInfoBack';
import { SpacePostType, OneSpaceType } from '@/types/space.type';

export type FlipCardSize = 'small' | 'medium' | 'big';

export type PostInfoBackPropsType = {
  item: SpacePostType;
  size: FlipCardSize;
};

export type SpaceInfoBackPropsType = {
  item: OneSpaceType;
  size: FlipCardSize;
};

export type FlipType = {
  /*해당 이미지의 주소를 넣어주세요*/
  imgUrl: string;
  onClick: () => void;
  borderRadius?: string;
};

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
        <S.Hover img={imgUrl} borderRadius={borderRadius}>
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
