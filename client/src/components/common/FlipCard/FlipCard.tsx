import S from '@components/common/FlipCard/style';
import { ReactElement } from 'react';
import SpaceInfoBack from '@components/common/FlipCard/SpaceInfoBack/SpaceInfoBack';
import { SpacePostType } from '@type/space.type';

export interface IFlipCard extends ReactElement {}

export type FlipType = {
  /**
   * 해당 이미지의 주소를 넣어주세요
   */
  img_url: string;
  /**
   * Hover시에 보일 컴포넌트를 넣어주세요
   */

  size: 'small' | 'big';

  item: SpacePostType;

  onClick: () => void;
};

const FlipCard = (props: FlipType) => {
  const { img_url, onClick, size, item } = props;
  return (
    <>
      <S.Flip onClick={onClick}>
        <S.Card size={size} img={img_url} />
        <S.Hover size={size} img={img_url}>
          <SpaceInfoBack size={size} item={item} />
        </S.Hover>
      </S.Flip>
    </>
  );
};

export default FlipCard;

FlipCard.defaultProps = {
  size: 450,
};
