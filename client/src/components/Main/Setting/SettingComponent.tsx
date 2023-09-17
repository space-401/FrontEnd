import React from "react";
import {UserType} from "@type/user.type";
import {Box} from "@mui/material";
import S from "@components/Main/Setting/style";
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';

const SettingComponent = React.forwardRef(
    (props: { userList: UserType[], isOpen:boolean, onClose: () => void }, forwardRef: React.ForwardedRef<HTMLDivElement>) => {
        const {isOpen,userList,onClose} = props
        return <Box tabIndex={-1} ref={forwardRef}>
            <S.Container isOpen={isOpen}>
                <S.SettingTop>
                    Member
                    <S.UserCount>{userList.length}</S.UserCount>
                    <S.DeleteButton onClick={onClose}><DeleteIcon width={24} height={24}/></S.DeleteButton>
                </S.SettingTop>
                <S.SettingCenter></S.SettingCenter>
                <S.SettingBottom></S.SettingBottom>
            </S.Container>
        </Box>
    }
);

export default SettingComponent;