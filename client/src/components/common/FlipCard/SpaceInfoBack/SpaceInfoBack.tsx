import Avatars from '@components/common/AvatarGroup/Avatars';
import type { SpacePostType } from '@type/space.type';
import S from '@components/common/FlipCard/SpaceInfoBack/style';
import { getFormatDate } from '@utils/formatter';
import { ReactComponent as MapIcon } from '@assets/svg/markerIcon.svg';
import { Chip } from '@mui/material';

type SpaceInfoBackPropsType = {
  item: SpacePostType;
  size: 'small' | 'big';
};

const SpaceInfoBack = ({ item, size }: SpaceInfoBackPropsType) => {
  const { post_updated_at, post_title, place_title, place_tag, users } = item;
  return (
    <S.Wrapper size={size}>
      <S.Shadow />
      <S.Container className={'container'}>
        <div>
          <S.PostTitle className={'title'}>{post_title}</S.PostTitle>
          <S.PlaceCreateAt className={'create-time'}>
            {getFormatDate(post_updated_at)}
          </S.PlaceCreateAt>
          <S.ChipBox className={'chip-box'}>
            {place_tag.map((place) => (
              <Chip
                className={'chip'}
                key={place.tag_id}
                label={'#' + place.tag_title}
                variant="outlined"
              />
            ))}
          </S.ChipBox>
        </div>
        <S.InfoBottom className={'info-bottom'}>
          <S.PlaceTitle className={'place-name'}>
            <MapIcon width={18} height={18} />
            <span className={'place-span'}>{place_title}</span>
          </S.PlaceTitle>
          <Avatars
            max={size === 'big' ? 4 : 4}
            size={size === 'big' ? 45 : 28}
            users={users}
          />
        </S.InfoBottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default SpaceInfoBack;
