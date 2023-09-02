import styled from 'styled-components';

const Flip = styled.div<{ $isFlip: boolean; size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
  perspective: 1100px;

  &:hover > div {
    transform: ${(props) => (props.$isFlip ? 'rotateY(180deg)' : 'none')};
  }
`;

const Card = styled.div<{ img_url: string }>`
  width: inherit;
  height: inherit;
  position: relative;
  transition: 1.5s;
  transform-style: preserve-3d;
  border-radius: 5px;
  overflow: hidden;

  background-image: url(${({ img_url }) => img_url});
  background-size: cover;
  background-position: center;
`;

const Hover = styled.div<{ $isFlip: boolean }>`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.white};
  cursor: pointer;
  transform: ${({ $isFlip }) => ($isFlip ? 'rotateY(180deg)' : 'none')};
  transition: opacity 0.5s;
  pointer-events: none;
  opacity: ${({ $isFlip }) => ($isFlip ? '1' : '0')};
  ${Flip}:hover & {
    opacity: 1;
  }
`;

const S = {
  Flip,
  Card,
  Hover,
};

export default S;
