import { Modal, Box } from '@mui/material';
import { S } from '@/components/Main/WelcomeAndSettingModal/style';
import WelcomeModal from './WelcomeModal';
import FirstSettingModal from './FirstSettingModal';
import { useState } from 'react';
// import { ReactComponent as DeleteIcon } from '@assets/svg/whiteDeleteIcon.svg';
import BasicButton from '@/components/common/BasicButton';
import { ReactComponent as GoArrowIcon } from '@/assets/svg/goArrowIcon.svg';

type WelcomeAndSettingProps = {
  isOpen: boolean;
  modalClose: () => void;
  SettingModalOpen: () => void;
  spaceTitle: string;
  imgUrl: string;
  setImageArr: any;
  imageArr: any;
  isImageModalOpen: any;
  setImageModalOpen: any;
};

//프로필 기본 이미지 선택
const WelcomeAndSettingModal = ({
  isOpen,
  spaceTitle,
  imgUrl,
  setImageArr,
  imageArr,
  setImageModalOpen,
}: WelcomeAndSettingProps) => {
  const [modalNum, setModalNum] = useState(1);

  //세팅 모달로 이동
  const onMoveSettingModal = () => {
    setModalNum(0);
  };

  //닉네임
  const [nickName, setNickName] = useState('');

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
        {/* <M.DeleteIconBox>
          <DeleteIcon />
        </M.DeleteIconBox> */}
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
