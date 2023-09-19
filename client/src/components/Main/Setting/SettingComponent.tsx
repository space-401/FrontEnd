import React, { useState } from 'react';
import { UserType } from '@type/user.type';
import { Box, Modal } from '@mui/material';
import S from '@components/Main/Setting/style';
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';
import UserList from '@components/Main/Setting/components/UserList';
import ConfirmModal from '@components/common/ConfirmModal/ConfirmModal';
import AlertModal from '@components/common/AlertModal/AlertModal';
import { useAlertModalStore } from '@store/modal';
import { AlertModalType } from '@type/modal.type';

const SettingComponent = React.forwardRef(
  (
    props: {
      userList: UserType[];
      isAdmin: boolean;
      isOpen: boolean;
      onClose: () => void;
      spaceTitle: string;
    },
    forwardRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { isOpen, isAdmin, userList, spaceTitle, onClose } = props;

    const [state, setState] = useState({
      isSelfOutModal: false,
      isAlertModal: false,
    });

    const setInfo = useAlertModalStore((prev) => prev.setInfo);

    const ChangeAlertModal = (newState: boolean) => {
      setState((prev) => ({ ...prev, isAlertModal: newState }));
    };

    const AlertOpen = (info: AlertModalType) => {
      setInfo(info);
      ChangeAlertModal(true);
    };

    const ChangeSelfOutModal = (newState: boolean) => {
      setState((prev) => ({ ...prev, isSelfOutModal: newState }));
    };

    const ChangeSelfAction = (user_id: number) => {
      if (isAdmin) {
        AlertOpen({
          alertMessage: `확인`,
          width: 348,
          alertTitle: `${userList[0].user_name} 방장님,\n 방장은 주고 나가주세요`,
        });
        return;
      }
      console.log(user_id + '님이 나갔습니다.');
      ChangeSelfOutModal(false);
    };

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <S.Container isOpen={isOpen}>
          <AlertModal
            ModalClose={() => ChangeAlertModal(false)}
            isOpen={state.isAlertModal}
          />
          <Modal
            open={state.isSelfOutModal}
            onClose={() => ChangeSelfOutModal(false)}
          >
            <ConfirmModal
              isPositiveModal={false}
              titleMessage={
                "'" + spaceTitle + "'" + '스페이스에서 나가시겠습니까?'
              }
              descriptionMessage={'작성된 게시글과 댓글들은 삭제되지 않습니다.'}
              ApproveMessage={'나가기'}
              closeMessage={'취소'}
              AsyncAction={() => ChangeSelfAction(userList[0].user_id)}
              ModalClose={() => ChangeSelfOutModal(false)}
              isOpen={state.isSelfOutModal}
            />
          </Modal>
          <S.SettingTop>
            Member
            <S.UserCount>{userList.length}</S.UserCount>
            <S.DeleteButton onClick={onClose}>
              <DeleteIcon width={24} height={24} />
            </S.DeleteButton>
          </S.SettingTop>
          <S.SettingCenter>
            {userList.map((user, i) => (
              <UserList
                AlertOpen={AlertOpen}
                myInfo={userList[0]}
                key={user.user_id}
                index={i}
                userInfo={user}
                isAdmin={isAdmin}
              />
            ))}
          </S.SettingCenter>
          <S.SettingBottom></S.SettingBottom>
        </S.Container>
      </Box>
    );
  }
);

export default SettingComponent;
