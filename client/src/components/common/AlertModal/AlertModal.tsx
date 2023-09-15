import React from 'react';
import { Box, Modal } from '@mui/material';
import S from '@components/common/AlertModal/style';

export type AlertModalType = {
  alertMessage: string;
  width: number;
  ModalClose: () => void;
  isOpen: boolean;
};

const ConfirmModal = React.forwardRef(
  (prop: AlertModalType, forwardRef: React.ForwardedRef<any>) => {
    const { alertMessage, width, isOpen, ModalClose } = prop;

    return (
      <Modal open={isOpen} onClose={ModalClose}>
        <Box tabIndex={-1} ref={forwardRef}>
          <S.Container width={width}>
            <S.AlertMessage>{alertMessage}</S.AlertMessage>
            <S.ButtonGroup>
              <S.AlertButton onClick={ModalClose}>{alertMessage}</S.AlertButton>
            </S.ButtonGroup>
          </S.Container>
        </Box>
      </Modal>
    );
  }
);

export default ConfirmModal;
