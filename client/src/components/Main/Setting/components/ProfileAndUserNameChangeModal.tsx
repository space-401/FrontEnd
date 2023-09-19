import { Box, Modal } from '@mui/material';
import React from 'react';
import { M } from '@components/Main/Setting/components/style';

type ProfileModalType = {
  ModalClose: () => void;
  isOpen: boolean;
};

const ProfileAndUserNameChangeModal = React.forwardRef(
  (props: ProfileModalType, ref) => {
    const { isOpen, ModalClose } = props;

    return (
      <Modal open={isOpen} onClose={ModalClose}>
        <Box tabIndex={-1} ref={ref}>
          <M.Container>:)</M.Container>
        </Box>
      </Modal>
    );
  }
);

export default ProfileAndUserNameChangeModal;
