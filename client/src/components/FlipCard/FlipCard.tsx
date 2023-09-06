import S from '@components/FlipCard/style';
import { ReactElement } from 'react';
import { ISpaceSelectBack } from '@components/FlipCard/SpaceSelectBack/SpaceSelectBack';
import { ISpaceInfoBack } from '@components/FlipCard/SpaceInfoBack/SpaceInfoBack';

export interface IFlipCard extends ReactElement {}

export type FlipType = {
  /**
   * 정사각형 카드의 크기를 정해주세요
   */
  size: number;
  /**
   * 해당 이미지의 주소를 넣어주세요
   */
  img_url: string;
  /**
   * Hover시에 보일 컴포넌트를 넣어주세요
   */
  hoverCard: ISpaceSelectBack | ISpaceInfoBack;
};

const FlipCard = (props: FlipType) => {
  const { size, img_url, hoverCard } = props;
  return (
    <>
      <S.Flip size={size}>
        <S.Card img={img_url} />
        <S.Hover img={img_url}>{hoverCard}</S.Hover>
      </S.Flip>
    </>
  );
};

export default FlipCard;

FlipCard.defaultProps = {
  size: 450,
};
