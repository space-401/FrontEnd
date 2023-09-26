import BasicButton from '@components/common/BasicButton';
import { theme } from '@styles/theme/theme';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { ReactComponent as SelectTableIcon } from '@assets/svg/filter/selecttableIcon.svg';
import { ReactComponent as SelectMapIcon } from '@assets/svg/filter/selectmapIcon.svg';
import { ReactComponent as DoneTableIcon } from '@assets/svg/filter/donetableIcon.svg';
import { ReactComponent as DoneMapIcon } from '@assets/svg/filter/donemapIcon.svg';
import S from './style';
import type { MainHeaderPropType } from '@type/main.type';
import SettingComponent from '@components/Main/Setting/SettingComponent';
import { Modal as SettingModal } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainHeader = (prop: MainHeaderPropType) => {
  const { setSelectState, isAdmin, spaceInfo, selectState } = prop;
  const { description, img_url, users, title } = spaceInfo;
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <SettingModal disableScrollLock open={isOpen} onClose={onClose}>
        <SettingComponent
          spaceTitle={spaceInfo.title}
          isAdmin={isAdmin}
          isOpen={isOpen}
          userList={users}
          onClose={onClose}
        />
      </SettingModal>
      <S.HeaderHeader>
        <Avatars size={42.857} users={users} max={4} />
        <S.ButtonGroup>
          <S.ControlButton
            onClick={() => setIsOpen(true)}
            color={theme.COLOR.white}
            hoverColor={theme.COLOR['gray-7']}
          >
            인원 {users.length}/8
          </S.ControlButton>
          {isAdmin && (
            <S.ControlButton
              color={theme.COLOR.white}
              backgroundColor={theme.COLOR['gray-5']}
            >
              스페이스 관리
            </S.ControlButton>
          )}
        </S.ButtonGroup>
      </S.HeaderHeader>
      <S.HeaderMain>
        <S.Image img_url={img_url} />
        <S.MainInfo>
          <S.MainTitle>{title}</S.MainTitle>
          <S.Description>{description}</S.Description>
        </S.MainInfo>
      </S.HeaderMain>
      <S.HeaderFooter>
        <S.LeftEmpty></S.LeftEmpty>
        <S.FilterState>
          <S.SelectButton
            onClick={() => setSelectState(false)}
            $state={!selectState}
          >
            {!selectState ? <SelectTableIcon /> : <DoneTableIcon />}갤러리
          </S.SelectButton>
          <S.SelectButton
            onClick={() => setSelectState(true)}
            $state={selectState}
          >
            {selectState ? <SelectMapIcon /> : <DoneMapIcon />}지도
          </S.SelectButton>
        </S.FilterState>
        <BasicButton
          onClick={() => {
            navigate('/createPost');
          }}
          color={'#292929'}
          backgroundColor={theme.COLOR['gray-1']}
        >
          게시물 작성
        </BasicButton>
      </S.HeaderFooter>
    </S.Wrapper>
  );
};

export default MainHeader;
