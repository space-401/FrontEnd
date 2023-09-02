import Avatars from '@components/common/AvatarGroup/Avatars';
import type { SpacePostType } from '@type/space.type';
import { IFlipCard } from '@components/FlipCard/FlipCard';
import S from '@components/FlipCard/SpaceInfoBack/style';
import { getFormatDate } from '@utils/formatter';
import { ReactComponent as MapIcon } from '@assets/svg/markerIcon.svg';
import { Chip } from '@mui/material';

export interface ISpaceInfoBack extends IFlipCard {}

const SpaceInfoBack = (props: SpacePostType) => {
  const { place_create_at, place_title, place_tag, post_title, users } = props;
  return (
    <S.Wrapper>
      <S.InfoTop>
        <S.PostTitle>{post_title}</S.PostTitle>
        <S.PlaceCreateAt>{getFormatDate(place_create_at)}</S.PlaceCreateAt>
        <S.ChipBox>
          {place_tag.map((place) => (
            <Chip
              sx={{ border: '1.5px solid white' }}
              key={place.tag_id}
              label={'#' + place.tag_title}
              variant="outlined"
            />
          ))}
        </S.ChipBox>
      </S.InfoTop>
      <S.InfoBottom>
        <S.PlaceTitle>
          <MapIcon width={18} height={18} />
          <span>{place_title}</span>
        </S.PlaceTitle>
        <Avatars max={4} size={45} users={users} />
      </S.InfoBottom>
    </S.Wrapper>
  );
};

export default SpaceInfoBack;
