import S from '@pages/Main/style';
import MainHeader from '@components/Main/MainHeader/MainHeader';
import MainBody from '@components/Main/MainBody/MainBody';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpaceInfoQuery } from '@hooks/api/space/useSpaceInfoQuery';
import { useWelcomeModal } from '@/store/modal';
import WelcomeAndSettingModal from '@/components/Main/WelcomeAndSettingModal';
import ImgEditModal from '@/components/Create/ImageEditModal/ImageEditModal';
import { ImageArrType } from '@/types/image.type';

const MainPage = () => {
  const [selectState, setSelectState] = useState(false);
  const spaceId = useParams().spaceId!;
  const spaceInfo = useSpaceInfoQuery(spaceId).spaceInfo!;
  const { userList, tagList, isFirst, spaceTitle, imgUrl } = spaceInfo;
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const { isOpen: isWelcomeModalOpen, ModalOpen: WelcomeModalOpen } =
    useWelcomeModal();

  //처음이라면 welcome 모달 열기
  useEffect(() => {
    if (isFirst) {
      WelcomeModalOpen();
    }
  }, [isFirst, WelcomeModalOpen]);

  //이미지 저장하는 곳
  const [imageArr, setImageArr] = useState<ImageArrType>({
    images: [],
    cropImages: [],
    convertedImages: [],
  });

  return (
    <>
      {/*처음 스페이스 방문시 보이는 모달*/}
      {isWelcomeModalOpen && (
        <WelcomeAndSettingModal
          spaceTitle={spaceTitle}
          imgUrl={imgUrl}
          setImageArr={setImageArr}
          imageArr={imageArr}
          setImageModalOpen={setImageModalOpen}
          isImageModalOpen={isImageModalOpen}
        />
      )}
      {/*이미지 편집 모달*/}
      {isImageModalOpen && (
        <ImgEditModal
          imageArr={imageArr}
          setImageArr={setImageArr}
          isCircle={true}
          setImageModalOpen={setImageModalOpen}
        />
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
