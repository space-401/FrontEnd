import S from '@pages/Main/style';
import MainHeader from '@components/Main/MainHeader/MainHeader';
import MainBody from '@components/Main/MainBody/MainBody';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpaceInfoQuery } from '@hooks/api/space/useSpaceInfoQuery';
import WelcomeModal from '@/components/Main/WelcomeAndSettingModal';
import UserSettingModal from '@/components/common/UserSettingModal';
import { Modal } from '@mui/material';

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
    console.log(isFirst); //이걸로 바꾸기
    const fakeIsFirst = false;
    if (fakeIsFirst) {
      setModalNum(1);
    }
  }, []);

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
              userNames={userList.map((user) => user.userName)}
              ModalClose={onCloseSettingModal}
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
