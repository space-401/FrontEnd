import { Modal, Box } from '@mui/material';
import S from '@/components/Main/WelcomeAndSettingModal/style';
import BasicBox from '@/components/common/BasicBox';
import BasicButton from '@/components/common/BasicButton';
import { ReactComponent as GoArrowIcon } from '@/assets/svg/goArrowIcon.svg';

type WelcomeModalProps = {
  isOpen: boolean;
  modalClose: () => void;
  SettingModalOpen: () => void;
  spaceTitle: string;
  imgUrl: string;
};

//프로필 기본 이미지 선택
const WelcomeModal = ({
  isOpen,
  spaceTitle,
  imgUrl,
  modalClose,
  SettingModalOpen,
}: WelcomeModalProps) => {
  const onMoveSettingModal = () => {
    console.log('aaaa');
    modalClose();
    SettingModalOpen();
  };

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
          <S.Text weight={600}>Welcome to Kkiri!</S.Text>
          <S.DetailText>
            새로운 스페이스를 만들었습니다!
            <br />
            친구들과 함께 추억을 공유해보세요.
          </S.DetailText>
          <BasicBox
            width={240}
            borderradius={15}
            backgroundImage={imgUrl}
            color="grey"
          />
          <S.Text weight={400}>'{spaceTitle}'</S.Text>
          <BasicButton width={212} height={48} onClick={onMoveSettingModal}>
            <S.FlexContainer>
              <div>프로필 설정하기</div>
              <GoArrowIcon />
            </S.FlexContainer>
          </BasicButton>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};

export default WelcomeModal;
