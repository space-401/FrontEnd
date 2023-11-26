import { useAlertModalOpen, useSpaceUserInviteMutation } from '@/hooks';
import { ReactComponent as ClosedEye } from '@assets/svg/closedEye.svg';
import { ReactComponent as ShowEye } from '@assets/svg/showEye.svg';
import React, { useState } from 'react';
import { BasicButton, InputBox } from '@/components/common';
import { S } from './style';

const InviteCode = () => {
  const { userInviteAction } = useSpaceUserInviteMutation();
  //스페이스 코드
  const [spaceCode, setSpaceCode] = useState('');
  //비밀번호
  const [spacePw, setSpacePw] = useState('');
  const [isShowPswd, setIsShowPswd] = useState(false);

  //제출시 실행되는 함수
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userInviteAction({ spaceCode, spacePw: Number(spacePw) });
    setSpaceCode('');
    setSpacePw('');
  };

  const onToggleShowPswd = () => {
    setIsShowPswd((prev) => !prev);
  };

  //비밀번호 숫자만
  const onCheckInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // 정규 표현식을 사용하여 숫자가 아닌 값 검사
    if (!/^[0-9]*$/.test(value)) {
      // 숫자가 아닌 값이 있을 때 에러 처리
      setSpacePw('');
      return alertModalOpen();
    }
    setSpacePw(value);
  };

  //스페이스 코드
  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSpaceCode(value);
  };

  //경고 모달
  const alertOpen = useAlertModalOpen();

  const alertModalOpen = () => {
    alertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '비밀번호는 숫자만 입력해 주세요',
    });
  };

  return (
    <S.Wrapper>
      <S.TitleSection>
        <div>초대 코드 입력</div>
        <p>친구에게 초대받은 초대코드와 비밀번호를 입력해주세요. </p>
      </S.TitleSection>
      <S.Form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        {/*스페이스 코드*/}
        <S.TitleContainer number={1}>
          <div>스페이스 코드</div>
        </S.TitleContainer>
        <S.InputContainer number={1}>
          <InputBox
            readonly={false}
            name={spaceCode}
            onChange={(e) => {
              onChangeCode(e);
            }}
            value={spaceCode}
            type="text"
            height={60}
            placeholder="스페이스 코드를 입력해주세요"
          />
        </S.InputContainer>

        {/*스페이스 비밀번호 인풋*/}
        <S.TitleContainer number={2}>
          <div>스페이스 비밀번호</div>
        </S.TitleContainer>
        <S.InputContainer number={2}>
          <InputBox
            onChange={(e) => {
              onCheckInputNumber(e);
            }}
            readonly={false}
            height={60}
            type={isShowPswd ? 'text' : 'password'}
            placeholder="숫자 5자리를 입력해주세요"
            maxLength={5}
            name="password"
            value={spacePw}
            children={
              isShowPswd ? (
                <ShowEye onClick={onToggleShowPswd} />
              ) : (
                <ClosedEye onClick={onToggleShowPswd} />
              )
            }
          />
        </S.InputContainer>

        {/*완료 버튼*/}
        <S.ButtonContainer>
          <BasicButton
            disabled={spaceCode.length == 0 || spacePw.length < 5}
            children="완료"
            onClick={() => {}}
            width={76}
          />
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};

export default InviteCode;
