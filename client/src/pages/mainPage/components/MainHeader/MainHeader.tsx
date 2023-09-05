import S from '@pages/MainPage/components/MainHeader/style';
import { UserType } from '@type/user.type';
import BasicButton from '@components/common/BasicButton';
import { theme } from '@styles/theme/theme';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { ReactComponent as SelectTableIcon } from '@assets/svg/filter/selecttableIcon.svg';
import { ReactComponent as SelectMapIcon } from '@assets/svg/filter/selectmapIcon.svg';
import { ReactComponent as DoneTableIcon } from '@assets/svg/filter/donetableIcon.svg';
import { ReactComponent as DoneMapIcon } from '@assets/svg/filter/donemapIcon.svg';
import { useState } from 'react';
import { TagType } from '@type/tag.type';

export type MainHeaderPropType = {
  spaceInfo: {
    title: string;
    description: string;
    img_url: string;
    users: UserType[];
  };
  tagList: TagType[];
};

const MainHeader = (prop: MainHeaderPropType) => {
  const { description, img_url, users, title } = prop.spaceInfo;
  const [selectState, setSelectState] = useState(false);
  return (
    <S.Wrapper>
      <S.HeaderHeader>
        <Avatars size={42.857} users={users} max={4} />
        <S.UserCount>인원 {users.length}/8</S.UserCount>
        <S.ButtonGroup>
          <BasicButton
            color={theme.COLOR.white}
            backgroundColor={theme.COLOR['gray-6']}
          >
            인원관리
          </BasicButton>
          <BasicButton
            color={theme.COLOR.white}
            backgroundColor={theme.COLOR['gray-4']}
          >
            스페이스 관리
          </BasicButton>
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
        <BasicButton color={'#292929'} backgroundColor={theme.COLOR.beige}>
          게시물 작성
        </BasicButton>
      </S.HeaderFooter>
    </S.Wrapper>
  );
};

export default MainHeader;
