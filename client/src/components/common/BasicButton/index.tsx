import S from './style';

type BasicButtonProps = {
  children: string;
};

const BasicButton = (props: BasicButtonProps) => {
  const { children } = props;
  return <S.ButtonWrapper>{children}</S.ButtonWrapper>;
};

export default BasicButton;
