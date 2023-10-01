import Header from './Header';
import S from './style';
import {Outlet} from 'react-router-dom';
import {Modal as DetailModal} from '@mui/material';
import {useDetailModalStore} from '@store/modal';
import DetailInner from '@modal/Detail';

const HeaderLayout = () => {
    const {ModalClose, isOpen} = useDetailModalStore((state) => state);
    console.log(isOpen)
    return (
        <S.Wrapper>
            <DetailModal
                disableScrollLock
                open={isOpen}
                onClose={ModalClose}
            >
                <DetailInner onClose={ModalClose}/>
            </DetailModal>
            <Header/>
            <S.ContentWrapper>
                <Outlet/>
            </S.ContentWrapper>
        </S.Wrapper>
    );
};
export default HeaderLayout;
