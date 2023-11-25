import { Header, HeaderSkeleton } from '@/layout';
import { AlertInner, ConfirmInner, DetailInner } from '@/modal';
import {
  Modal as AlertModal,
  Modal as ConfirmModal,
  Modal as DetailModal,
} from '@mui/material';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import {
  useAlertModalStore,
  useConfirmModalStore,
  useDetailModalStore,
} from '@/store/modal';
import { DetailInnerSkeleton } from '@/components/Detail';
import { S } from '../style';

export const HeaderLayOutSkeleton = () => {
  const { ModalClose: DetailModalClose, isOpen: DetailIsOpen } =
    useDetailModalStore((state) => state);
  const { ModalClose: ConfirmModalClose, isOpen: ConfirmIsOpen } =
    useConfirmModalStore((state) => state);
  const { ModalClose: AlertModalClose, isOpen: AlertIsOpen } =
    useAlertModalStore((state) => state);

  return (
    <>
      <Toaster position={'top-center'} />
      <S.Wrapper>
        <AlertModal
          sx={{ zIndex: 1000 }}
          onClose={AlertModalClose}
          open={AlertIsOpen}
        >
          <AlertInner />
        </AlertModal>
        <ConfirmModal
          sx={{ zIndex: 1000 }}
          onClose={ConfirmModalClose}
          open={ConfirmIsOpen}
        >
          <ConfirmInner />
        </ConfirmModal>
        <DetailModal
          sx={{ zIndex: 999 }}
          disableScrollLock
          open={DetailIsOpen}
          onClose={DetailModalClose}
        >
          <Suspense fallback={<DetailInnerSkeleton />}>
            <DetailInner />
          </Suspense>
        </DetailModal>
        <S.ContentLayOut>
          <Suspense fallback={<HeaderSkeleton />}>
            <Header />
          </Suspense>
          <S.ContentWrapper>
            <Outlet />
          </S.ContentWrapper>
          <S.Footer />
        </S.ContentLayOut>
      </S.Wrapper>
    </>
  );
};
