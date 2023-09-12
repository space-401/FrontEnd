import S from '@pages/main/style';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';
import { MainPageType } from '@type/main.type';
import { useState } from 'react';
import { Modal as DetailModal } from '@mui/material';
import DetailPage from '@pages/Detail';
import { useModalStore } from '@store/modal';

const MainPage = (props: MainPageType) => {
  const { spaceInfo, tagList, postList, total, page } = props;
  const [selectState, setSelectState] = useState(false);

  const isOpen = useModalStore((state) => state.isOpen);
  const modalClose = useModalStore((state) => state.ModalClose);
  return (
    <HeaderLayout>
      <DetailModal open={isOpen} onClose={modalClose}>
        <DetailPage />
      </DetailModal>
      <S.Wrapper>
        <MainHeader
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
