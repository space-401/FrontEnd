import { UserType } from '@/types';
import Avatar from '@mui/material/Avatar';
import { ReactComponent as CrownSvg } from '@/assets/svg/crown.svg';
import { ReactComponent as MoreSvg } from '@/assets/svg/moreIcon.svg';
import { ReactComponent as MoreCrownSvg } from '@/assets/svg/mainSetting/crown.svg';
import { ReactComponent as MoreUserSvg } from '@/assets/svg/mainSetting/user.svg';
import { ReactComponent as MoreLogOutSvg } from '@/assets/svg/mainSetting/logout.svg';
import { useState } from 'react';
import { Modal } from '@mui/material';
import { S } from '@/components/common/UserListModal/style';
import { useConfirmModalOpen } from '@/hooks/common';
import { toastColorMessage } from '@/utils';
import { UserSettingModal } from '@/components/common';

type UserListPropsType = {
  userInfo: UserType;
  index: number;
  isAdmin: boolean;
  myInfo: UserType;
  changeAdminHandler: (userName: string, userId: number) => void;
  userNames: string[];
  spaceId: number;
};

export const UserList = (props: UserListPropsType) => {
  const { isAdmin, userInfo, index, changeAdminHandler, userNames, spaceId } =
    props;
  const { userId, userName, imgUrl } = userInfo;
  const [state, setState] = useState({
    isSettingMode: false,
    isUserModal: false,
  });
  const confirmModalOpen = useConfirmModalOpen();
  // 현재 설정을 하고있는 상태인지를 확인하기 위한 모달
  const ChangeSettingMode = (newState: boolean) => {
    setState((prev) => ({ ...prev, isSettingMode: newState }));
  };

  // 본인 정보 변경을 위한 모달
  const ChangeUserModal = (newState: boolean) => {
    setState((prev) => ({ ...prev, isUserModal: newState }));
  };

  const userGetOutAction = () => {
    toastColorMessage(userId + '님을 추방 하였습니다');
  };

  const userGetOutFromSpaceHandler = () => {
    confirmModalOpen({
      AsyncAction: userGetOutAction,
      isPositiveModal: false,
      descriptionMessage: '작성된 게시글과 댓글들은 삭제되지 않습니다.',
      titleMessage: userName + ' 님을 스페이스에서 내보시겠습니까?',
      ApproveMessage: '내보내기',
      closeMessage: '취소',
    });
  };

  return (
    <S.UserContainer>
      {state.isSettingMode && (
        <Modal
          open={state.isUserModal}
          onClose={() => ChangeUserModal(false)}
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: 'transparent',
              },
            },
          }}
        >
          <UserSettingModal
            isAdmin={isAdmin}
            ModalClose={() => ChangeUserModal(false)}
            userNames={userNames}
            userInfo={userInfo}
            spaceId={spaceId}
          />
        </Modal>
      )}
      <div>
        <Avatar
          src={imgUrl}
          alt={userName}
          sx={{
            width: '48px',
            height: '48px',
            background: 'white',
            border: 'none',
          }}
        />
      </div>
      <S.UserName>
        {userName}
        {isAdmin && index === 0 ? <CrownSvg /> : null}
        {!isAdmin && index === 1 ? <CrownSvg /> : null}
      </S.UserName>
      {isAdmin ? (
        <S.SettingIconBox
          onClick={() => ChangeSettingMode(true)}
          className={'hoverIcon'}
        >
          <MoreSvg width={20} height={20} />
        </S.SettingIconBox>
      ) : (
        index === 0 && (
          <S.SettingIconBox
            onClick={() => ChangeSettingMode(true)}
            className={'hoverIcon'}
          >
            <MoreSvg width={24} height={24} />
          </S.SettingIconBox>
        )
      )}
      <S.BackClickBlock
        isOpen={state.isSettingMode}
        onClick={() => {
          ChangeSettingMode(false);
        }}
      />
      {index === 0 ? (
        <S.MenuGroup isOpen={state.isSettingMode}>
          <S.MenuButton onClick={() => ChangeUserModal(true)}>
            <MoreUserSvg />
            프로필 수정
          </S.MenuButton>
        </S.MenuGroup>
      ) : (
        <S.MenuGroup isOpen={state.isSettingMode}>
          <S.MenuButton onClick={() => changeAdminHandler(userName, userId)}>
            <MoreCrownSvg />
            방장 권한 주기
          </S.MenuButton>
          <S.MenuButton onClick={() => userGetOutFromSpaceHandler()}>
            <MoreLogOutSvg />
            방에서 내보내기
          </S.MenuButton>
        </S.MenuGroup>
      )}
    </S.UserContainer>
  );
};
