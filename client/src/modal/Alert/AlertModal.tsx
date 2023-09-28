import React from 'react';
import { Box, Modal } from '@mui/material';
import S from '@modal/Alert/style';

type AlertModalProps = {
  ModalClose: () => void;
  isOpen: boolean;
  width: number;
  alertTitle: string;
  alertMessage: string;
};

const AlertModal = React.forwardRef((props: AlertModalProps, ref) => {
  const { ModalClose, width, isOpen, alertTitle, alertMessage } = props;

  const onEnterClose = (e: any) => {
    if (e.keyCode === 13) {
      ModalClose();
    }
  };

  return (
    <Modal open={isOpen} onClose={ModalClose}>
      <Box tabIndex={-1} ref={ref} onKeyDown={onEnterClose}>
        <S.Container width={width}>
          <S.AlertMessage>{alertTitle}</S.AlertMessage>
          <S.ButtonGroup>
            <S.AlertButton onClick={ModalClose}>{alertMessage}</S.AlertButton>
          </S.ButtonGroup>
        </S.Container>
      </Box>
    </Modal>
  );
});
export default AlertModal;
