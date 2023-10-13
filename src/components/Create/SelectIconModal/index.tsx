import { Modal, Box } from '@mui/material';
import S from '@/components/Create/SelectIconModal/style';

type IconModalPropsType = {
  isOpen: boolean;
  onClickImgEditModal: () => void;
  onMoveBasicIconModal: () => void;
  modalClose: () => void;
  selectedImage: string | null;
};

const SelectIconModal = ({
  isOpen,
  modalClose,
  onClickImgEditModal,
  onMoveBasicIconModal,
}: IconModalPropsType) => {
  return (
    <Modal
      open={isOpen}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      }}
    >
      <Box tabIndex={-1}>
        <S.Wrapper>
          <S.Content fontSize={22} lightgrey={false}>
            아이콘 설정하기
          </S.Content>

          <S.Content
            fontSize={18}
            lightgrey={false}
            onClick={onClickImgEditModal}
          >
            이미지 불러오기
          </S.Content>

          <S.Content
            fontSize={18}
            lightgrey={false}
            onClick={onMoveBasicIconModal}
          >
            기본 아이콘 사용하기
          </S.Content>
          <S.Content fontSize={18} lightgrey={true} onClick={modalClose}>
            닫기
          </S.Content>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};
export default SelectIconModal;
