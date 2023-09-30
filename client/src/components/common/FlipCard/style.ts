import styled from 'styled-components';

const Flip = styled.div<{ size: 'small' | 'medium' | 'big' }>`
  position: relative;
  width: ${({ size }) =>
    size === 'big' ? '437px' : size === 'medium' ? '20rem' : '296.75px'};
  cursor: pointer;
`;

const Card = styled.div<{ img: string; borderRadius?: number }>`
  aspect-ratio: 1/1;
  width: 100%;
  position: relative;
  transition: 1.5s;
  transform-style: preserve-3d;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '5px')};
  overflow: hidden;

  background: url(${({ img }) => (img ? img : '#43444A')});
  border: 1px solid #4e4f55;
  background-size: cover;
`;

const Hover = styled.div<{ img: string }>`
  aspect-ratio: 1/1;
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
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
