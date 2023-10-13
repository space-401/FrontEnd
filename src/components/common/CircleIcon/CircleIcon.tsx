import S from './style';

type CircleIconProps = {
  imgUrl: string;
  size: number;
  onClick?: () => void;
};

const CircleIcon = (props: CircleIconProps) => {
  const { imgUrl, size, onClick } = props;
  return <S.CircleImg imgUrl={imgUrl} size={size} onClick={onClick} />;
};

export default CircleIcon;
