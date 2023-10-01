import Header from './Header';
import S from './style';
import { Outlet } from 'react-router-dom';
import { Modal as DetailModal } from '@mui/material';
import { useDetailModalStore } from '@store/modal';
import DetailInner from '@modal/Detail';
import { Suspense } from 'react';

const HeaderLayout = () => {
  const { ModalClose, isOpen } = useDetailModalStore((state) => state);
  return (
    <S.Wrapper>
      <DetailModal disableScrollLock open={isOpen} onClose={ModalClose}>
        <Suspense fallback={<></>}>
          <DetailInner onClose={ModalClose} />
        </Suspense>
      </DetailModal>
      <Header />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default HeaderLayout;
