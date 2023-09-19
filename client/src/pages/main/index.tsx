import S from '@pages/main/style';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';
import { useState } from 'react';
import { Modal as DetailModal } from '@mui/material';
import DetailPage from '@pages/Detail';
import { useDetailModalStore } from '@store/modal';
import { Toaster } from 'react-hot-toast';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';

const MainPage = () => {
  const { spaceInfo, isAdmin, tagList, postList, total, page } = MainPageMock;

  const [selectState, setSelectState] = useState(false);

  const detailIsOpen = useDetailModalStore((state) => state.isOpen);
  const detailModalClose = useDetailModalStore((state) => state.ModalClose);
  return (
    <HeaderLayout>
      <Toaster />
      <DetailModal
        disableScrollLock
        open={detailIsOpen}
        onClose={detailModalClose}
      >
        <DetailPage onClose={detailModalClose} />
      </DetailModal>
      <S.Wrapper>
        <MainHeader
          isAdmin={isAdmin}
          selectState={selectState}
          setSelectState={setSelectState}
          spaceInfo={spaceInfo}
        />
        <MainBody
          selectState={selectState}
          userList={spaceInfo.users}
          tagList={tagList}
          total={total}
          postList={postList}
          page={page}
        />
      </S.Wrapper>
    </HeaderLayout>
  );
};

export default MainPage;
