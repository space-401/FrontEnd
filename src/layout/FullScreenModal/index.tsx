import { ReactNode } from 'react';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import S from './style';

type FullScreenModalProps = {
  title?: string;
  detail?: string;
  children: ReactNode;
  isTitle: boolean;
};

export const FullScreenModal = (props: FullScreenModalProps) => {
  const { title, detail, isTitle } = props;
  return (
    <S.Wrapper>
      <S.DeleteIconContainer>
        <DeleteIcon width={'24px'} />
      </S.DeleteIconContainer>
      {isTitle && (
        <S.TitleSection isTitle={isTitle}>
          <div>{title}</div>
          <p>{detail}</p>
        </S.TitleSection>
      )}
      {props.children}
    </S.Wrapper>
  );
};
