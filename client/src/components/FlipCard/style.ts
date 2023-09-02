import styled from 'styled-components';

const Flip = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
  perspective: 1100px;
`;

const Card = styled.div<{ img: string | undefined }>`
  width: inherit;
  height: inherit;
  position: relative;
  transition: 1.5s;
  transform-style: preserve-3d;
  border-radius: 5px;
  overflow: hidden;

  background: url(${({ img }) => (img ? img : '#43444A')});
  border: 1px solid #4E4f55;
  background-size: cover;
}

`;

const Hover = styled.div`
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
  transition: opacity 0.5s;
  pointer-events: none;
  opacity: 0;

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
