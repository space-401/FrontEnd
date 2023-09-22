import { Modal, Box } from '@mui/material';
import S from '@/components/Create/SelectIconModal/style';

const SelectIconModal = ({
  isOpen,
  onClickImgEditModal,
}: {
  isOpen: boolean;
  onClickImgEditModal: any;
}) => {
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
          <S.Content fontSize={18} lightgrey={false}>
            기본 아이콘 사용하기
          </S.Content>
          <S.Content fontSize={18} lightgrey={true}>
            닫기
          </S.Content>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};
export default SelectIconModal;
