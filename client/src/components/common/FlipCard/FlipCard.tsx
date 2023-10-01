import S from '@components/common/FlipCard/style';
import SpaceInfoBack from '@components/common/FlipCard/SpaceInfoBack/SpaceInfoBack';
import { FlipType, SpaceInfoBackPropsType } from '@type/post.type';
import {useDetailModalStore} from "@store/modal";

const FlipCard = (props: FlipType & SpaceInfoBackPropsType) => {
  const { imgUrl, size, item } = props;
    const {setPostId, ModalOpen} = useDetailModalStore(state => state)

    const onClick =()=> {
        setPostId(item.postId)
        ModalOpen();
    }

  return (
    <>
      <S.Flip size={size}>
        <S.Card img={imgUrl} />
        <S.Hover img={imgUrl} onClick={onClick}>
          <SpaceInfoBack size={size} item={item} />
        </S.Hover>
      </S.Flip>
    </>
  );
};

export default FlipCard;
