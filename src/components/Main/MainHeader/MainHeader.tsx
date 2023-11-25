import { theme } from '@/styles';
import { Avatars } from '@/components/common';
import { ReactComponent as SelectTableIcon } from '@/assets/svg/filter/selecttableIcon.svg';
import { ReactComponent as SelectMapIcon } from '@/assets/svg/filter/selectmapIcon.svg';
import { ReactComponent as DoneTableIcon } from '@/assets/svg/filter/donetableIcon.svg';
import { ReactComponent as DoneMapIcon } from '@/assets/svg/filter/donemapIcon.svg';
import S from './style';
import type { MainHeaderPropType } from '@/types';
import { SettingComponent } from '@/components/Main';
import { Modal as SettingModal } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';

export const MainHeader = (prop: MainHeaderPropType) => {
  const { setSelectState, selectState, spaceInfo, spaceId } = prop;
  const { isAdmin, spaceTitle, imgUrl, userList, spaceDescription, spacePw } =
    spaceInfo;

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <SettingModal sx={{ zAvatarGroup: 900 }} open={isOpen} onClose={onClose}>
        <SettingComponent
          spaceId={spaceId}
          spaceTitle={spaceTitle}
          spacePw={String(spacePw)}
          isAdmin={isAdmin}
          isOpen={isOpen}
          userList={userList}
          onClose={onClose}
        />
      </SettingModal>
      <S.HeaderHeader>
        <Avatars fontSize={13} size={25} users={userList} max={4} />
        <S.ButtonGroup>
          <S.ControlButton
            onClick={() => setIsOpen(true)}
            color={theme.COLOR.white}
            hoverColor={theme.COLOR['gray-4']}
          >
            인원 {userList.length}/8
          </S.ControlButton>
          {isAdmin && (
            <S.ControlButton
              color={theme.COLOR.white}
              backgroundColor={theme.COLOR['gray-5']}
              onClick={() => navigate(PATH.SPACE_UPDATE(spaceId))}
            >
              스페이스 관리
            </S.ControlButton>
          )}
        </S.ButtonGroup>
      </S.HeaderHeader>
      <S.HeaderMain>
        <S.Image imgUrl={imgUrl} />
        <S.MainInfo>
          <S.MainTitle>{spaceTitle}</S.MainTitle>
          <S.Description>{spaceDescription}</S.Description>
        </S.MainInfo>
      </S.HeaderMain>
      <S.HeaderFooter>
        <S.LeftEmpty></S.LeftEmpty>
        <S.FilterState>
          <S.SelectButton
            onClick={() => setSelectState(false)}
            $state={!selectState}
          >
            {!selectState ? (
              <SelectTableIcon width={15} height={15} />
            ) : (
              <DoneTableIcon width={15} height={15} />
            )}
            갤러리
          </S.SelectButton>
          <S.SelectButton
            onClick={() => setSelectState(true)}
            $state={selectState}
          >
            {selectState ? (
              <SelectMapIcon width={15} height={15} />
            ) : (
              <DoneMapIcon width={15} height={15} />
            )}
            지도
          </S.SelectButton>
        </S.FilterState>
        <S.CreateButton onClick={() => navigate(PATH.POST_CREATE(spaceId))}>
          게시물 작성
        </S.CreateButton>
      </S.HeaderFooter>
    </S.Wrapper>
  );
};
