import S from './style';

type CircleIconProps = {
  img_url: string;
  size?: number;
};

const CircleIcon = (props: CircleIconProps) => {
  const { img_url, size } = props;
  return <S.CircleImg src={img_url} size={size} />;
};

export default CircleIcon;
