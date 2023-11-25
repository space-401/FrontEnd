import React from 'react';
import { UserType } from '@/types';
import { Box } from '@mui/material';
import S from './style';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import { UserList } from '@/components/common';
import { ReactComponent as LogoutSvg } from '@/assets/svg/mainSetting/logout.svg';
import { toastColorMessage } from '@/utils';
import {
  useConfirmModalOpen,
  useAlertModalOpen,
  useSpaceUserUpdateMutation,
} from '@/hooks';
import { PATH } from '@/constants';
import { useNavigate } from 'react-router-dom';

export const SettingComponent = React.forwardRef(
  (
    props: {
      userList: UserType[];
      isAdmin: boolean;
      isOpen: boolean;
      onClose: () => void;
      spaceId: string;
      spaceTitle: string;
      spacePw: string;
    },
    forwardRef: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { isOpen, isAdmin, userList, spaceTitle, onClose, spacePw, spaceId } =
      props;
    const navigate = useNavigate();

    const alertModalOpen = useAlertModalOpen();
    const confirmModalOpen = useConfirmModalOpen();
    const { userUpdateAction } = useSpaceUserUpdateMutation(spaceId);

    const selfGetOutAction = () => {
      toastColorMessage(spaceTitle + ' 스페이스에서 나갔습니다.');
      navigate(PATH.SPACE);
    };

    const selfGetOutFromSpaceHandler = () => {
      if (isAdmin) {
        alertModalOpen({
          width: 368,
          alertTitle: `${userList[0].userName} 방장님,\n 방장을 다른 분께 양도하신 후 나가실 수 있어요.`,
          alertMessage: '확인',
        });
        return;
      }

      confirmModalOpen({
        AsyncAction: selfGetOutAction,
        isPositiveModal: false,
        descriptionMessage: '작성된 게시글과 댓글들은 삭제되지 않습니다.',
        titleMessage: "'" + spaceTitle + "'" + '스페이스에서 나가시겠습니까?',
        ApproveMessage: '나가기',
        closeMessage: '취소',
      });
    };

    const inviteLinkCopyAction = async () => {
      try {
        await navigator.clipboard.writeText(PATH.INVITE_CODE(spaceId, spacePw));
        toastColorMessage('초대링크를 복사하였습니다.');
      } catch (e) {
        toastColorMessage('초대링크를 복사를 실패하였습니다.');
      }
    };

    const changeAdminAction = (userName: string, userId: number) => {
      toastColorMessage(userName + '님이 방장이 되었습니다.');
      toastColorMessage(userId + '아이디 회원에게 방장 권한을 넘겼습니다.');
      onClose();
      const formData = new FormData();
      const spaceUserDTO = {
        spaceId: spaceId,
        isAdmin: true,
      };
      formData.append('spaceUserDTO', JSON.stringify(spaceUserDTO));
      userUpdateAction(formData);
    };

    const changeAdminHandler = (userName: string, userId: number) => {
      confirmModalOpen({
        AsyncAction: () => changeAdminAction(userName, userId),
        isPositiveModal: true,
        descriptionMessage: `방장 권한을 주면 ${userList[0].userName}님은 \n스페이스 관리 및 인원 관리를 할 수 없게됩니다.`,
        titleMessage: userName + ' 님에게 방장 권한을 주시겠습니까?',
        ApproveMessage: '확인',
        closeMessage: '취소',
      });
    };

    const userNames = userList.map((user) => {
      return user.userName;
    });

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <S.Container isOpen={isOpen}>
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
                spaceId={Number(spaceId)}
                myInfo={userList[0]}
                key={user.userId}
                index={i}
                userInfo={user}
                isAdmin={isAdmin}
                changeAdminHandler={(userName: string, userId: number) =>
                  changeAdminHandler(userName, userId)
                }
                userNames={userNames}
              />
            ))}
          </S.SettingCenter>
          <S.SettingBottom>
            <S.SpaceOutBox onClick={() => selfGetOutFromSpaceHandler()}>
              <LogoutSvg width={24} height={24} />
            </S.SpaceOutBox>
            <S.InviteUserBox onClick={inviteLinkCopyAction}>
              친구 초대하기
            </S.InviteUserBox>
          </S.SettingBottom>
        </S.Container>
      </Box>
    );
  }
);

export default SettingComponent;
