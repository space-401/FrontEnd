import { A } from '@components/MyPage/style';
import { ReactElement } from 'react';
import { ReactComponent as KaKaoSvg } from '@assets/svg/api/kakao.svg';
import { ReactComponent as NaverSvg } from '@assets/svg/api/naver.svg';
import { ReactComponent as GoogleSvg } from '@assets/svg/api/google.svg';
import { useUserInfoQuery } from '@hooks/api/user/useUserInfoQuery';
import { useConfirmModalOpen } from '@hooks/common/useConfirmModalOpen';
import { useDeleteKkiriUserMutation } from '@hooks/api/user/useDeleteKkiriUserMutation';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@constants/path';
import { useLogOutMutation } from '@hooks/api/user/useLogOutMutation';
import { toastColorMessage } from '@utils/toastMessage';

const AccountManagement = () => {
  const { MyInfoData } = useUserInfoQuery();
  const navigate = useNavigate();

  const { loginState, email, name } = MyInfoData!;

  let StateIcon: ReactElement;

  switch (loginState) {
    case 'kakao':
      StateIcon = <KaKaoSvg />;
      break;
    case 'naver':
      StateIcon = <NaverSvg />;
      break;
    case 'google':
      StateIcon = <GoogleSvg />;
      break;
  }

  const confirmModalOpen = useConfirmModalOpen();

  const { deleteKkiriUserAction } = useDeleteKkiriUserMutation();
  const { logoutAction } = useLogOutMutation();

  const kkiriOutHandler = () => {
    return confirmModalOpen({
      AsyncAction: () => {
        deleteKkiriUserAction();
        navigate(PATH.HOME);
        toastColorMessage('탈퇴 되었습니다.');
      },
      isPositiveModal: false,
      descriptionMessage:
        '탈퇴하시면 회원님의 모든 정보와 활동 기록이 삭제됩니다.\n삭제된 정보는 복구할 수 없으니 신중하게 결정해주세요.',
      titleMessage: '정말 탈퇴하시겠습니까?',
      ApproveMessage: '나가기',
      closeMessage: '취소',
    });
  };

  const logoutHandler = () => {
    logoutAction();
    navigate(PATH.HOME);
    toastColorMessage('로그아웃 되었습니다.');
  };

  return (
    <>
      <A.Title>회원정보</A.Title>
      <A.Description margin_top={16}>
        {loginState + ' 간편가입 회원입니다.'}
      </A.Description>
      <A.Bar margin_top={16} />
      <A.Description margin_top={40}>이름</A.Description>
      <A.NameBox margin_top={16}>
        <A.WhiteSpan>{name}</A.WhiteSpan>
      </A.NameBox>
      <A.Description margin_top={32}>이메일</A.Description>
      <A.IConBox margin_top={16}>
        {StateIcon}
        <A.WhiteSpan>{email}</A.WhiteSpan>
      </A.IConBox>
      <A.Bar margin_top={40} />
      <A.ButtonGroup>
        <A.Button onClick={kkiriOutHandler}>탈퇴하기</A.Button>
        <A.Button onClick={logoutHandler}>로그아웃</A.Button>
      </A.ButtonGroup>
    </>
  );
};

export default AccountManagement;
