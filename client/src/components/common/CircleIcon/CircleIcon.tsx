import styled from 'styled-components';

type CircleIcon = {
  src: string;
};
const CircleIcon = (props: CircleIcon) => {
  const { src } = props;
  return <S.CircleImg src={src} />;
};

export default CircleIcon;

const CircleImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

const S = {
  CircleImg,
};
