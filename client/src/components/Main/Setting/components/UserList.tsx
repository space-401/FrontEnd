import { UserType } from '@type/user.type';
import { S } from '@components/Main/Setting/components/style';
import Avatar from '@mui/material/Avatar';
import { ReactComponent as CrownSvg } from '@assets/svg/crown.svg';
import { ReactComponent as MoreSvg } from '@assets/svg/moreIcon.svg';
import { ReactComponent as MoreCrownSvg } from '@assets/svg/mainSetting/crown.svg';
import { ReactComponent as MoreUserSvg } from '@assets/svg/mainSetting/user.svg';
import { ReactComponent as MoreLogOutSvg } from '@assets/svg/mainSetting/logout.svg';
import ConfirmModal from '@components/common/ConfirmModal/ConfirmModal';
import { useState } from 'react';
import { Modal } from '@mui/material';
import ProfileAndUserNameChangeModal from '@components/Main/Setting/components/ProfileAndUserNameChangeModal';
import toast from 'react-hot-toast';

type UserListPropsType = {
  userInfo: UserType;
  index: number;
  isAdmin: boolean;
  myInfo: UserType;
};

const UserList = (props: UserListPropsType) => {
  const { isAdmin, userInfo, myInfo, index } = props;
  const { user_id, user_name, user_profile_img } = userInfo;
  const [state, setState] = useState({
    isMemberOutModal: false,
    isChangeAdminModal: false,
    isSettingMode: false,
    isUserModal: false,
  });

  // 현재 설정을 하고있는 상태인지를 확인하기 위한 모달
  const ChangeSettingMode = (newState: boolean) => {
    setState((prev) => ({ ...prev, isSettingMode: newState }));
  };
  // 멤버 추방을 하기위한 모달
  const ChangeMemberModal = (newState: boolean) => {
    setState((prev) => ({ ...prev, isMemberOutModal: newState }));
  };

  // 멤버 관리자 권한을 주기위한 모달
  const ChangeAdminModal = (newState: boolean) => {
    setState((prev) => ({ ...prev, isChangeAdminModal: newState }));
  };

  // 본인 정보 변경을 위한 모달
  const ChangeUserModal = (newState: boolean) => {
    setState((prev) => ({ ...prev, isUserModal: newState }));
  };

  const MemberOutAction = () => {
    toast(user_name + '님을 추방 하였습니다', {
      style: {
        borderRadius: '10px',
        background: '#000',
        color: '#fff',
      },
    });
    ChangeSettingMode(false);
  };

  const ChangeAdminAction = (user_name: number) => {
    console.log(user_name + '님이 방장이 되었습니다.');
    ChangeAdminModal(false);
    ChangeSettingMode(false);
  };

  return (
    <S.UserContainer>
      <Modal
        open={state.isMemberOutModal}
        onClose={() => ChangeMemberModal(false)}
      >
        <ConfirmModal
          isPositiveModal={false}
          titleMessage={user_name + '님을 스페이스에서 내보내시겠습니까?'}
          descriptionMessage={'작성된 게시글과 댓글들이 모두 삭제됩니다.'}
          ApproveMessage={'내보내기'}
          closeMessage={'취소'}
          AsyncAction={MemberOutAction}
          ModalClose={() => ChangeMemberModal(false)}
          isOpen={state.isMemberOutModal}
        />
      </Modal>
      <Modal
        open={state.isChangeAdminModal}
        onClose={() => ChangeAdminModal(false)}
      >
        <ConfirmModal
          isPositiveModal={true}
          titleMessage={user_name + ' 님에게 방장 권한을 주시겠습니까?'}
          descriptionMessage={`방장 권한을 주면 ${myInfo.user_name}님은 \n스페이스 관리 및 인원 관리를 할 수 없게됩니다.`}
          ApproveMessage={'확인'}
          closeMessage={'취소'}
          AsyncAction={() => ChangeAdminAction(user_id)}
          ModalClose={() => ChangeAdminModal(false)}
          isOpen={state.isChangeAdminModal}
        />
      </Modal>
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
        <ProfileAndUserNameChangeModal
          ModalClose={() => {
            ChangeUserModal(false);
          }}
        />
      </Modal>
      <S.UserProfile>
        <Avatar
          src={user_profile_img}
          alt={user_name}
          sx={{ width: '48px', height: '48px' }}
        />
      </S.UserProfile>
      <S.UserName>
        {user_name}
        {isAdmin && index === 0 ? <CrownSvg /> : null}
        {!isAdmin && index === 1 ? <CrownSvg /> : null}
      </S.UserName>
      {isAdmin ? (
        <S.SettingIconBox className={'hoverIcon'}>
          <MoreSvg onClick={() => ChangeSettingMode(true)} />
        </S.SettingIconBox>
      ) : (
        index === 0 && (
          <S.SettingIconBox className={'hoverIcon'}>
            <MoreSvg onClick={() => ChangeSettingMode(true)} />
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
          <S.MenuButton onClick={() => ChangeAdminModal(true)}>
            <MoreCrownSvg />
            방장 권한 주기
          </S.MenuButton>
          <S.MenuButton onClick={() => ChangeMemberModal(true)}>
            <MoreLogOutSvg />
            방에서 내보내기
          </S.MenuButton>
        </S.MenuGroup>
      )}
    </S.UserContainer>
  );
};

export default UserList;
