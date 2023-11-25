import React from 'react';
import { Box } from '@mui/material';
import { S } from './style';
import { useAlertModalStore } from '@/store/modal';

export const AlertInner = React.forwardRef((_, ref) => {
  const { alertState, ModalClose } = useAlertModalStore((state) => state);
  const { alertMessage, alertTitle, width } = alertState;
  const onEnterClose = (e: any) => {
    if (e.keyCode === 13) {
      ModalClose();
    }
  };

  return (
    <Box tabIndex={-1} ref={ref} onKeyDown={onEnterClose}>
      <S.Container width={width}>
        <S.AlertMessage>{alertTitle}</S.AlertMessage>
        <S.ButtonGroup>
          <S.AlertButton onClick={ModalClose}>{alertMessage}</S.AlertButton>
        </S.ButtonGroup>
      </S.Container>
    </Box>
  );
});
