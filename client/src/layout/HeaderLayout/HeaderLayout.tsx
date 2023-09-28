import Header from './Header';
import S from './style';
import { Outlet } from 'react-router-dom';
import { Modal as DetailModal } from '@mui/material';
import { useDetailModalStore } from '@store/modal';
import DetailInner from '@modal/Detail';

const HeaderLayout = () => {
  const detailIsOpen = useDetailModalStore((state) => state.isOpen);
  const detailModalClose = useDetailModalStore((state) => state.ModalClose);
  return (
    <S.Wrapper>
      <DetailModal
        disableScrollLock
        open={detailIsOpen}
        onClose={detailModalClose}
      >
        <DetailInner onClose={detailModalClose} />
      </DetailModal>
      <Header />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default HeaderLayout;
