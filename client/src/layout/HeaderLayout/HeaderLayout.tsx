import Header from './Header';
import S from './style';
import AlertModal from '@components/common/AlertModal/AlertModal';
import { PropsWithChildren, useState } from 'react';

const HeaderLayout = (props: PropsWithChildren) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <AlertModal ModalClose={() => setIsOpen(false)} isOpen={isOpen} />
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};
export default HeaderLayout;
