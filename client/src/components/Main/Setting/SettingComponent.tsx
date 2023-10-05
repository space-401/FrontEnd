import React, { useState } from 'react';
import { UserType } from '@type/post.type';
import { Box, Modal } from '@mui/material';
import S from '@components/Main/Setting/style';
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';
import UserList from '@components/Main/Setting/components/UserList';
import Index from '@modal/Confirm';
import SelfErrorModal from '@modal/Alert';
import { ReactComponent as LogoutSvg } from '@assets/svg/mainSetting/logout.svg';
import { theme } from '@styles/theme/theme';
import { toastColorMessage } from '@utils/toastMessage';

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
      dropUserName: '',
      // 본인이 나갈때 뜨는 모달창
      isSelfOutModal: false,
      // 다른 사람을 추방하였을 때 뜨는 모달창
      isAlertModal: false,
      // 본인이 나갈때 뜨는 경고 모달창
      isErrorOutModal: false,
    });

    const ChangeAlertModal = (newState: boolean) => {
      setState((prev) => ({ ...prev, isAlertModal: newState }));
    };

    const ChangeErrorModal = (newState: boolean) => {
      setState((prev) => ({ ...prev, isErrorOutModal: newState }));
    };

    const ChangeSelfOutModal = (newState: boolean) => {
      setState((prev) => ({ ...prev, isSelfOutModal: newState }));
    };

    const ChangeSelfAction = (user_id: number) => {
      if (isAdmin) {
        ChangeErrorModal(true);
        return;
      }
      console.log(user_id + '님이 나갔습니다.');
      // 스페이스 선택 페이지 이동 url
      ChangeSelfOutModal(false);
    };

    const InviteLinkCopyAction = async () => {
      try {
        await navigator.clipboard.writeText('www.KKIRI.com');
        toastColorMessage({
          color: theme.COLOR.white,
          message: '초대링크를 복사하였습니다.',
          background: theme.COLOR['gray-5'],
        });
      } catch (e) {
        toastColorMessage({
          color: theme.COLOR.white,
          message: '초대링크를 복사를 실패하였습니다.',
          background: theme.COLOR['gray-5'],
        });
      }
    };

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <S.Container isOpen={isOpen}>
          <Modal
            open={state.isErrorOutModal}
            onClose={() => ChangeSelfOutModal(false)}
          >
            <SelfErrorModal
              width={368}
              alertTitle={`${userList[0].userName} 방장님,\n 방장은 주고 나가주세요`}
              alertMessage={`확인`}
              ModalClose={() => ChangeErrorModal(false)}
              isOpen={state.isErrorOutModal}
            />
          </Modal>
          <Modal
            open={state.isAlertModal}
            onClose={() => ChangeAlertModal(false)}
          >
            <SelfErrorModal
              width={368}
              alertTitle={`${userList[0].userName} 방장님,\n 방장은 주고 나가주세요`}
              alertMessage={`확인`}
              ModalClose={() => ChangeAlertModal(false)}
              isOpen={state.isAlertModal}
            />
          </Modal>
          <Modal
            open={state.isSelfOutModal}
            onClose={() => ChangeSelfOutModal(false)}
          >
            <Index
              isPositiveModal={false}
              titleMessage={
                "'" + spaceTitle + "'" + '스페이스에서 나가시겠습니까?'
              }
              descriptionMessage={'작성된 게시글과 댓글들은 삭제되지 않습니다.'}
              ApproveMessage={'나가기'}
              closeMessage={'취소'}
              AsyncAction={() => ChangeSelfAction(userList[0].userId)}
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
                myInfo={userList[0]}
                key={user.userId}
                index={i}
                userInfo={user}
                isAdmin={isAdmin}
              />
            ))}
          </S.SettingCenter>
          <S.SettingBottom>
            <S.SpaceOutBox onClick={() => ChangeSelfOutModal(true)}>
              <LogoutSvg width={24} height={24} />
            </S.SpaceOutBox>
            <S.InviteUserBox onClick={InviteLinkCopyAction}>
              친구 초대하기
            </S.InviteUserBox>
          </S.SettingBottom>
        </S.Container>
      </Box>
    );
  }
);

export default SettingComponent;
