import Header from './Header';
import S from './style';
import { Outlet } from 'react-router-dom';
import { Modal as DetailModal } from '@mui/material';
import { useDetailModalStore } from '@store/modal';
import DetailInner from '@modal/Detail';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const HeaderLayout = () => {
  const { ModalClose, isOpen } = useDetailModalStore((state) => state);
  return (
    <>
      <Toaster position={'top-center'} />
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
    </>
  );
};
export default HeaderLayout;
