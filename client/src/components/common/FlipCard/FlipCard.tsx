import S from '@components/common/FlipCard/style';
import SpaceInfoBack from '@components/common/FlipCard/SpaceInfoBack/SpaceInfoBack';
import { FlipType, SpaceInfoBackPropsType } from '@type/post.type';

const FlipCard = (props: FlipType & SpaceInfoBackPropsType) => {
  const { imgUrl, onClick, size, item } = props;
  return (
    <>
      <S.Flip size={size} onClick={onClick}>
        <S.Card img={imgUrl} />
        <S.Hover img={imgUrl}>
          <SpaceInfoBack size={size} item={item} />
        </S.Hover>
      </S.Flip>
    </>
  );
};

export default FlipCard;
