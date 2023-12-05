import { useAlertModalOpen } from '@/hooks';
import { useState } from 'react';
import { ReactComponent as ClosedEye } from '@/assets/svg/closedEye.svg';
import { ReactComponent as ShowEye } from '@/assets/svg/showEye.svg';
import { S } from '@/pages/CreateSpace/style';
import { InputBox } from '@/components/common';

export const SpacePswd = ({
  pswd,
  setPswd,
}: {
  pswd: string | null;
  setPswd: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [isShowPswd, setIsShowPswd] = useState(false);

  const alertOpen = useAlertModalOpen();

  const alertModalOpen = () => {
    alertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '비밀번호는 숫자만 입력해 주세요',
    });
  };

  //비밀번호 숫자만
  const onCheckInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // 정규 표현식을 사용하여 숫자가 아닌 값 검사
    if (!/^[0-9]*$/.test(value)) {
      // 숫자가 아닌 값이 있을 때 에러 처리
      return alertModalOpen();
    }
    setPswd(value);
  };

  const onToggleShowPswd = () => {
    setIsShowPswd((prev) => !prev);
  };

  return (
    <>
      <S.InputContainer number={4}>
        <InputBox
          onChange={(e) => {
            onCheckInputNumber(e);
          }}
          width={300}
          readonly={false}
          height={60}
          type={isShowPswd ? 'text' : 'password'}
          placeholder="숫자 5자리를 입력해주세요"
          maxLength={5}
          name="password"
          value={pswd!}
          children={
            isShowPswd ? (
              <ShowEye onClick={onToggleShowPswd} />
            ) : (
              <ClosedEye onClick={onToggleShowPswd} />
            )
          }
        />
      </S.InputContainer>
    </>
  );
};
