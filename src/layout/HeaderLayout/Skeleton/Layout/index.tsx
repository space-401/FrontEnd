import Header from '@/layout/HeaderLayout/Header';
import S from '@layout/HeaderLayout/style';
import { Outlet } from 'react-router-dom';
import {
  Modal as DetailModal,
  Modal as AlertModal,
  Modal as ConfirmModal,
} from '@mui/material';
import {
  useAlertModalStore,
  useConfirmModalStore,
  useDetailModalStore,
} from '@store/modal';
import DetailInner from '@modal/Detail';
import ConfirmInner from '@modal/Confirm';
import AlertInner from '@modal/Alert';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import DetailInnerSkeleton from '@modal/Detail/Skeleton';
import HeaderSkeleton from '@layout/HeaderLayout/Skeleton/Header';

const HeaderLayOutSkeleton = () => {
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
export default HeaderLayOutSkeleton;
