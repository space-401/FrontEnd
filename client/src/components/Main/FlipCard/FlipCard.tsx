import S from '@components/Main/FlipCard/style';
import { ReactElement } from 'react';
import { ISpaceSelectBack } from '@components/Main/FlipCard/SpaceSelectBack/SpaceSelectBack';
import { ISpaceInfoBack } from '@components/Main/FlipCard/SpaceInfoBack/SpaceInfoBack';

export interface IFlipCard extends ReactElement {}

export type FlipType = {
  /**
   * 해당 이미지의 주소를 넣어주세요
   */
  img_url: string;
  /**
   * Hover시에 보일 컴포넌트를 넣어주세요
   */
  hoverCard: ISpaceSelectBack | ISpaceInfoBack;

  onClick: () => void;
};

const FlipCard = (props: FlipType) => {
  const { img_url, onClick, hoverCard } = props;
  return (
    <>
      <S.Flip onClick={onClick}>
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
