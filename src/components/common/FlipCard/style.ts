import styled from 'styled-components';
import { FLIP_CARD } from '@/constants';

const Flip = styled.div<{ isBig: boolean }>`
  position: relative;
  width: ${({ isBig }) =>
    isBig ? FLIP_CARD.SIZE.BIG : FLIP_CARD.SIZE.MEDIUM}px;
  cursor: pointer;
`;

const Card = styled.div<{ isBig: boolean; img: string }>`
  box-sizing: border-box;
  aspect-ratio: 1/1;
  width: 100%;
  position: relative;
  transition: 1.5s;
  transform-style: preserve-3d;
  border-radius: ${({ isBig }) =>
    isBig ? FLIP_CARD.BORDER_RADIUS.BIG : FLIP_CARD.BORDER_RADIUS.MEDIUM}px;
  overflow: hidden;

  background: url(${({ img }) => (img ? img : '#43444A')});
  border: 1px solid #4e4f55;
  background-size: cover;
`;

const Hover = styled.div<{ isBig: boolean; img: string }>`
  aspect-ratio: 1/1;
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  border-radius: ${({ isBig }) =>
    isBig ? FLIP_CARD.BORDER_RADIUS.BIG : FLIP_CARD.BORDER_RADIUS.MEDIUM}px;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  border: 1px solid #4e4f55;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.white};
  cursor: pointer;
  transition: opacity 0.5s;
  pointer-events: none;
  opacity: 0;

  ${Flip}:hover & {
    opacity: 1;
  }

  > div {
    background: url(${({ img }) => img});
    background-size: cover;
  }
`;

const S = {
  Flip,
  Card,
  Hover,
};

export default S;
