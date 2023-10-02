import { Modal, Box } from '@mui/material';
import { useCreateUserModal } from '@/store/modal';
import S from './style';

const CreateUserModal = () => {
  const { isOpen, ModalClose } = useCreateUserModal();
  return (
    <Modal
      open={isOpen}
      onClose={ModalClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      }}
    >
      <Box tabIndex={-1}>
        <S.Wrapper></S.Wrapper>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
