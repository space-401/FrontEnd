import { ReactComponent as BackIcon } from '@/assets/svg/backIcon.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import { S } from './style';
import { Modal as AlertModal, Modal as ConfirmModal } from '@mui/material';
import { useAlertModalStore, useConfirmModalStore } from '@/store/modal';
import { AlertInner, ConfirmInner } from '@/modal';

export const BackLayout = () => {
  const navigate = useNavigate();
  const { ModalClose: ConfirmModalClose, isOpen: ConfirmIsOpen } =
    useConfirmModalStore((state) => state);
  const { ModalClose: AlertModalClose, isOpen: AlertIsOpen } =
    useAlertModalStore((state) => state);

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.IconContainer>
          <BackIcon
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate(-1);
            }}
          />
        </S.IconContainer>
      </S.IconWrapper>
      <S.ContentWrapper>
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

        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
