import S from '@pages/Main/style';
import MainHeader from '@pages/Main/MainHeader/MainHeader';
import PostList from '@pages/Main/PostList/PostList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpaceInfoQuery } from '@hooks/api/space/useSpaceInfoQuery';
import WelcomeModal from '@/components/Main/WelcomeAndSettingModal/WelcomeModal';
import { useFirstsSettingModal, useWelcomeModal } from '@/store/modal';
import FirstSettingModal from '@/components/Main/WelcomeAndSettingModal/FirstSettingModal';

const MainPage = () => {
  const [selectState, setSelectState] = useState(false);
  const spaceId = useParams().spaceId!;
  const spaceInfo = useSpaceInfoQuery(spaceId).spaceInfo!;
  const { userList, tagList, isFirst, spaceTitle, imgUrl } = spaceInfo!;

  const {
    isOpen: isWelcomeModalOpen,
    ModalOpen: WelcomeModalOpen,
    ModalClose: WelcomeModalClose,
  } = useWelcomeModal();
  const {
    isOpen: isSettingModalOpen,
    ModalOpen: SettingModalOpen,
    ModalClose: SettingModalClose,
  } = useFirstsSettingModal();

  useEffect(() => {
    console.log('welcompo', isWelcomeModalOpen);
    console.log('seting', isSettingModalOpen);
    if (isFirst) {
      WelcomeModalOpen();
    }
  }, []);

  return (
    <>
      <S.Wrapper>
        {isWelcomeModalOpen && (
          <WelcomeModal
            isOpen={isWelcomeModalOpen}
            modalClose={WelcomeModalClose}
            SettingModalOpen={SettingModalOpen}
            spaceTitle={spaceTitle}
            imgUrl={imgUrl}
          />
        )}

        {isSettingModalOpen && (
          <FirstSettingModal
            isOpen={isSettingModalOpen}
            modalClose={SettingModalClose}
            spaceTitle={spaceTitle}
            imgUrl={imgUrl}
          />
        )}
        <MainHeader
          spaceId={spaceId}
          spaceInfo={spaceInfo}
          selectState={selectState}
          setSelectState={setSelectState}
        />
        <PostList
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
