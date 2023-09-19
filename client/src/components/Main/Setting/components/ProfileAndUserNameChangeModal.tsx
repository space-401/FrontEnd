import { Box } from '@mui/material';
import React from 'react';
import { M } from '@components/Main/Setting/components/style';
import { ReactComponent as DeleteIcon } from '@assets/svg/whiteDeleteIcon.svg';
import { ReactComponent as DefaultProfileSvg } from '@assets/svg/defaultProfileImg.svg';
import { useUserStore } from '@store/user';

type ProfileModalType = {
  ModalClose: () => void;
};

const ProfileAndUserNameChangeModal = React.forwardRef(
  (props: ProfileModalType, ref) => {
    const { ModalClose } = props;
    const { getState } = useUserStore;
    const { user } = getState();

    const SubmitAction = () => {
      // 변경 완료시 누를 버튼
      ModalClose();
    };

    return (
      <Box sx={{ backgroundColor: 'transparent' }} tabIndex={-1} ref={ref}>
        <M.Container>
          <M.ModalTop>
            프로필을 수정해 주세요.
            <M.DeleteIconBox>
              <DeleteIcon onClick={ModalClose} />
            </M.DeleteIconBox>
          </M.ModalTop>
          <M.ModalMain>
            <M.LeftImgSection>
              <M.ImgBox>
                {!user?.img ? (
                  <DefaultProfileSvg />
                ) : (
                  <M.ProfileImg img={user.img} />
                )}
              </M.ImgBox>
              <M.ImgButton>편집하기</M.ImgButton>
            </M.LeftImgSection>
            <M.RightUserNameSection></M.RightUserNameSection>
          </M.ModalMain>
          <M.ModalFooter>
            <M.SubmitButton onClick={SubmitAction}>완료</M.SubmitButton>
          </M.ModalFooter>
        </M.Container>
      </Box>
    );
  }
);

export default ProfileAndUserNameChangeModal;
