import Header from './Header';
import S from './style';
import AlertModal from "@components/common/AlertModal/AlertModal";
import {useAlertModalStore} from "@store/modal";
import {PropsWithChildren} from "react";

const HeaderLayout = (props: PropsWithChildren) => {
    const {children} = props

    const isOpen = useAlertModalStore(state => state.isOpen)
    const ModalClose = useAlertModalStore(state => state.ModalClose)

    return (
        <S.Wrapper>
            <AlertModal ModalClose={ModalClose} isOpen={isOpen}/>
            <Header/>
            <S.ContentWrapper>{children}</S.ContentWrapper>
        </S.Wrapper>
    );
};
export default HeaderLayout;
