import S from './style';

type CircleIcon = {
  img_url: string;
};

const CircleIcon = (props: CircleIcon) => {
  const { img_url } = props;
  return <S.CircleImg src={img_url} />;
};

export default CircleIcon;
