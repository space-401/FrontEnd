import { ReactNode } from 'react';
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';
import S from './style';

type FullScreenModalProps = {
  title: string;
  detail: string;
  children: ReactNode;
};

const FullScreenModal = (props: FullScreenModalProps) => {
  const { title, detail } = props;
  return (
    <S.Wrapper>
      <S.DeleteIconContainer>
        <DeleteIcon width={'24px'} />
      </S.DeleteIconContainer>
      <S.TitleSection>
        <div>{title}</div>
        <p>{detail}</p>
      </S.TitleSection>
      {props.children}
    </S.Wrapper>
  );
};

export default FullScreenModal;
