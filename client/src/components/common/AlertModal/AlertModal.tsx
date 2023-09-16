import React from 'react';
import {Box, Modal} from '@mui/material';
import S from '@components/common/AlertModal/style';
import {useAlertModalStore} from "@store/modal";

type AlertModalProps = {
    ModalClose: () => void
    isOpen: boolean
}

const ConfirmModal = React.forwardRef(
    (props: AlertModalProps, ref) => {
        const {isOpen, ModalClose} = props

        const info = useAlertModalStore(state => state.info);

        return (
            <Modal open={isOpen} onClose={ModalClose}>
                <Box tabIndex={-1} ref={ref}>
                    <S.Container width={info?.width}>
                        <S.AlertMessage>{info?.alertTitle}</S.AlertMessage>
                        <S.ButtonGroup>
                            <S.AlertButton onClick={ModalClose}>{info?.alertMessage}</S.AlertButton>
                        </S.ButtonGroup>
                    </S.Container>
                </Box>
            </Modal>
        );
    }
);

export default ConfirmModal;
