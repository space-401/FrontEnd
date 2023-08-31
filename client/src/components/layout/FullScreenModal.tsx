import { flexCenter } from '@/styles/common';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';

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
      {props.children} {/* 자식 요소를 여기에 표시합니다 */}
    </S.Wrapper>
  );
};

export default FullScreenModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  padding-top: 150px;

  ${flexCenter}
  flex-direction: column;
`;

const TitleSection = styled.div`
  width: 50%;
  div {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  }
  p {
    padding-top: 5px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    color: rgba(255, 255, 255, 0.6);
  }
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
`;
const S = {
  Wrapper,
  TitleSection,
  DeleteIconContainer,
};
