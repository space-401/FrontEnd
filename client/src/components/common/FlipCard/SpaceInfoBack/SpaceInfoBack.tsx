import Avatars from '@components/common/AvatarGroup/Avatars';
import S from '@components/common/FlipCard/SpaceInfoBack/style';
import { getFormatDate } from '@utils/formatter';
import { ReactComponent as MapIcon } from '@assets/svg/markerIcon.svg';
import { Chip } from '@mui/material';
import { SpaceInfoBackPropsType } from '@type/post.type';

const SpaceInfoBack = (props: SpaceInfoBackPropsType) => {
  const { item, size } = props;

  const { placeTitle, placeTag, postUpdatedAt, usersList } = item;

  return (
    <S.Wrapper size={size}>
      <S.Shadow />
      <S.Container className={'container'}>
        <div>
          <S.PostTitle className={'title'}>{placeTitle}</S.PostTitle>
          <S.PlaceCreateAt className={'create-time'}>
            {getFormatDate(postUpdatedAt)}
          </S.PlaceCreateAt>
          <S.ChipBox className={'chip-box'}>
            {placeTag.map((place) => (
              <Chip
                className={'chip'}
                key={place.tagId}
                label={'#' + place.tagTitle}
                variant="outlined"
              />
            ))}
          </S.ChipBox>
        </div>
        <S.InfoBottom className={'info-bottom'}>
          <S.PlaceTitle className={'place-name'}>
            <MapIcon width={18} height={18} />
            <span className={'place-span'}>{placeTitle}</span>
          </S.PlaceTitle>
          <Avatars
            max={size === 'big' ? 4 : 5}
            size={size === 'big' ? 45 : 28}
            users={usersList}
          />
        </S.InfoBottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default SpaceInfoBack;
