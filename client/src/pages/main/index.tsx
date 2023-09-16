import S from '@pages/main/style';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';
import {MainPageType} from '@type/main.type';
import {useState} from 'react';
import {Modal as DetailModal} from '@mui/material';
import DetailPage from '@pages/Detail';
import {useDetailModalStore} from '@store/modal';
import {Toaster} from "react-hot-toast";

const MainPage = (props: MainPageType) => {
    const {spaceInfo, tagList, postList, total, page} = props;
    const [selectState, setSelectState] = useState(false);

    const isOpen = useDetailModalStore((state) => state.isOpen);
    const modalClose = useDetailModalStore((state) => state.ModalClose);
    return (
        <HeaderLayout>
            <Toaster/>
            <DetailModal disableScrollLock open={isOpen} onClose={modalClose}>
                <DetailPage onClose={modalClose}/>
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
