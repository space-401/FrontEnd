import S from '@components/common/FlipCard/style';
import PostInfoBack from '@components/common/FlipCard/Back/PostInfoBack';
import SpaceInfoBack from './Back/SpaceInfoBack';
import { SpacePostType, OneSpaceType } from '@/types/space.type';

export type PostInfoBackPropsType = {
  item: SpacePostType;
};

export type SpaceInfoBackPropsType = {
  item: OneSpaceType;
};

export type FlipType = {
  /*해당 이미지의 주소를 넣어주세요*/
  imgUrl: string;
  onClick: () => void;
  isBig?: boolean;
};

const FlipCard = (
  props: FlipType & (PostInfoBackPropsType | SpaceInfoBackPropsType)
) => {
  const { imgUrl, onClick, isBig = false, item } = props;

  function isPostInfo(
    item: SpacePostType | OneSpaceType
  ): item is SpacePostType {
    return 'postId' in item;
  }

  return (
    <>
      <S.Flip isBig={isBig} onClick={onClick}>
        <S.Card img={imgUrl} isBig={isBig} />
        <S.Hover img={imgUrl} isBig={isBig}>
          {isPostInfo(item) ? (
            <PostInfoBack isBig={isBig} item={item} />
          ) : (
            <SpaceInfoBack isBig={isBig} item={item} />
          )}
        </S.Hover>
      </S.Flip>
    </>
  );
};

export default FlipCard;
