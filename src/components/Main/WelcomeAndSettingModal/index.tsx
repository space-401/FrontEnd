import { Modal, Box } from '@mui/material';
import { S, M } from '@/components/Main/WelcomeAndSettingModal/style';
import WelcomeModal from './WelcomeModal';
import FirstSettingModal from './FirstSettingModal';
import { useState } from 'react';
import { ReactComponent as DeleteIcon } from '@assets/svg/whiteDeleteIcon.svg';
import BasicButton from '@/components/common/BasicButton';
import { ReactComponent as GoArrowIcon } from '@/assets/svg/goArrowIcon.svg';
import { useWelcomeModal } from '@/store/modal';
import { ImageArrType } from '@/types/image.type';

type WelcomeAndSettingProps = {
  spaceTitle: string;
  imgUrl: string;
  setImageArr: React.Dispatch<ImageArrType>;
  imageArr: ImageArrType;
  isImageModalOpen: boolean;
  setImageModalOpen: React.Dispatch<boolean>;
};

//프로필 기본 이미지 선택
const WelcomeAndSettingModal = ({
  spaceTitle,
  imgUrl,
  setImageArr,
  imageArr,
  setImageModalOpen,
}: WelcomeAndSettingProps) => {
  const [modalNum, setModalNum] = useState(1);

  const { isOpen: isWelcomeModalOpen, ModalClose: WelcomeModalClose } =
    useWelcomeModal();

  //세팅 모달로 이동
  const onMoveSettingModal = () => {
    setModalNum(0);
  };

  //닉네임
  const [nickName, setNickName] = useState('');

  return (
    <Modal
      open={isWelcomeModalOpen}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      }}
    >
      <Box tabIndex={-1}>
        <M.DeleteIconBox>
          <DeleteIcon onClick={WelcomeModalClose} />
        </M.DeleteIconBox>
        <S.Wrapper>
          {modalNum ? (
            <WelcomeModal spaceTitle={spaceTitle} imgUrl={imgUrl} />
          ) : (
            <FirstSettingModal
              setImageModalOpen={setImageModalOpen}
              setImageArr={setImageArr}
              imageArr={imageArr}
              nickName={nickName}
              setNickName={setNickName}
            />
          )}

          <S.ButtonContainer>
            {modalNum ? (
              <BasicButton width={212} height={48} onClick={onMoveSettingModal}>
                <S.FlexContainer>
                  <div>프로필 설정하기</div>
                  <GoArrowIcon />
                </S.FlexContainer>
              </BasicButton>
            ) : (
              <BasicButton
                width={212}
                height={48}
                onClick={() => {}}
                disabled={!nickName.length}
              >
                <S.ButtonText>완료</S.ButtonText>
              </BasicButton>
            )}
          </S.ButtonContainer>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};

export default WelcomeAndSettingModal;
