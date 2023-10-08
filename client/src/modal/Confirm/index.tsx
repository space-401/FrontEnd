import React from 'react';
import { Box } from '@mui/material';
import S from '@modal/Confirm/style';
import { useConfirmModalStore } from '@store/modal';

const ConfirmInner = React.forwardRef(
  (_, forwardRef: React.ForwardedRef<any>) => {
    const { confirmState, ModalClose } = useConfirmModalStore((state) => state);
    const {
      AsyncAction,
      descriptionMessage,
      titleMessage,
      isPositiveModal,
      ApproveMessage,
      closeMessage,
    } = confirmState;

    const ApproveAction = () => {
      ModalClose();
      AsyncAction();
    };

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <S.Container>
          <S.TitleMessage>{titleMessage}</S.TitleMessage>
          {descriptionMessage && (
            <S.DescriptionMessage>{descriptionMessage}</S.DescriptionMessage>
          )}
          <S.ButtonGroup>
            <S.ApproveButton
              isPositiveModal={isPositiveModal}
              onClick={ApproveAction}
            >
              {ApproveMessage}
            </S.ApproveButton>
            <S.CloseButton onClick={ModalClose}>{closeMessage}</S.CloseButton>
          </S.ButtonGroup>
        </S.Container>
      </Box>
    );
  }
);

export default ConfirmInner;
