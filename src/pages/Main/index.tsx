import { S } from './style';
import { MainHeader, MainBody, WelcomeModal } from '@/components/Main';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpaceInfoQuery } from '@/hooks';
import { UserSettingModal } from '@/components/common';
import { Modal } from '@mui/material';
import type { UserType } from '@/types';

const MainPage = () => {
  const [selectState, setSelectState] = useState(false);
  const spaceId = useParams().spaceId!;
  const spaceInfo = useSpaceInfoQuery(spaceId).spaceInfo!;
  const { userList, tagList, isFirst, spaceTitle, imgUrl } = spaceInfo;

  const [modalNum, setModalNum] = useState(0);
  //세팅 모달로 이동
  const onMoveSettingModal = () => {
    setModalNum(2);
  };

  //모달 닫기
  const onCloseSettingModal = () => {
    setModalNum(0);
  };

  //처음이라면 welcome 모달 열기
  useEffect(() => {
    if (!isFirst) {
      setModalNum(1);
    }
  }, [isFirst]);

  return (
    <>
      {modalNum > 0 && (
        <Modal
          open={modalNum > 0}
          slotProps={{
            backdrop: {
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              },
            },
          }}
        >
          {modalNum === 1 ? (
            <WelcomeModal
              onMoveSettingModal={onMoveSettingModal}
              spaceTitle={spaceTitle}
              imgUrl={imgUrl}
            />
          ) : (
            <UserSettingModal
              spaceId={Number(spaceId)}
              userNames={userList.map((user: UserType) => user.userName)}
              ModalClose={onCloseSettingModal}
              isAdmin={spaceInfo.isAdmin}
            />
          )}
        </Modal>
      )}
      <S.Wrapper>
        <MainHeader
          spaceId={spaceId}
          spaceInfo={spaceInfo}
          selectState={selectState}
          setSelectState={setSelectState}
        />
        <MainBody
          userList={userList}
          tagList={tagList}
          selectState={selectState}
          spaceId={spaceId}
        />
      </S.Wrapper>
    </>
  );
};

export default MainPage;
