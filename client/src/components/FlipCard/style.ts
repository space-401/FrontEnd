import styled from 'styled-components';

interface IFlip {
  size: number;
}

const Flip = styled.div<IFlip>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  perspective: 1100px;

  &:hover > div {
    transform: rotateY(180deg);
  }
`;

const Card = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  transition: 1.5s;
  transform-style: preserve-3d;
  border-radius: 5px;
  overflow: hidden;
`;

const CardInput = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.common['white']};
  cursor: pointer;
`;

interface IImageUrl {
  img_url: string;
}

const Front = styled(CardInput)<IImageUrl>`
  background-image: url(${(props) => props.img_url});
  background-size: contain;
`;

const Back = styled(CardInput)`
  background: skyblue;
  transform: rotateY(180deg);
`;

const S = {
  Flip,
  Card,
  Front,
  Back,
};

export default S;
