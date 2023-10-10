import Avatars from '@components/common/AvatarGroup/Avatars';
import S from '@components/common/FlipCard/Back/style';
import { getFormatDate } from '@utils/formatter';
import { ReactComponent as MapIcon } from '@assets/svg/markerIcon.svg';
import { Chip } from '@mui/material';
import { PostInfoBackPropsType } from '@type/post.type';
import { v4 as uuid } from 'uuid';

const PostInfoBack = (props: PostInfoBackPropsType) => {
  const { item, isBig } = props;

  const { placeTitle, postTitle, selectedTags, postUpdatedAt, usersList } =
    item;

  return (
    <S.Wrapper isBig={isBig}>
      <S.Shadow />
      <S.Container className={'container'} info="post">
        <div>
          <S.PostTitle className={'title'}>{postTitle}</S.PostTitle>
          <S.PlaceCreateAt className={'create-time'}>
            {getFormatDate(postUpdatedAt)}
          </S.PlaceCreateAt>
          <S.ChipBox className={'chip-box'}>
            {selectedTags.map((place) => (
              <Chip
                className={'chip'}
                key={uuid()}
                label={'#' + place.tagTitle}
                variant="outlined"
              />
            ))}
          </S.ChipBox>
        </div>
        <S.InfoBottom className={'info-bottom'} info={'post'}>
          <S.PlaceTitle className={'place-name'}>
            <MapIcon width={18} height={18} />
            <span className={'place-span'}>{placeTitle}</span>
          </S.PlaceTitle>
          <Avatars
            max={isBig ? 4 : 5}
            size={isBig ? 29 : 28}
            users={usersList}
          />
        </S.InfoBottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default PostInfoBack;
