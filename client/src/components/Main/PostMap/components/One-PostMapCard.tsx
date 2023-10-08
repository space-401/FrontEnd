import { O } from '@components/Main/PostMap/components/style';
import type { TagType } from '@type/post.type';
import { getFormatDate } from '@utils/formatter';
import { ReactComponent as PlaceIcon } from '@assets/svg/markerIcon.svg';
import { Chip } from '@mui/material';

type OnePostPropType = {
  postTitle: string;
  postDescription: string;
  postPlace: string;
  postTags: TagType[];
  imgUrl: string;
  createAt: string;
  isSelect: boolean;
  onClick: () => void;
};
const OnePostMapCard = (props: OnePostPropType) => {
  const {
    isSelect,
    onClick,
    postTitle,
    postDescription,
    postPlace,
    postTags,
    imgUrl,
    createAt,
  } = props;

  return (
    <O.OneWrapper onClick={onClick} isSelect={isSelect}>
      <O.CardImg imgUrl={imgUrl} />
      <O.CardInfo>
        <O.CardCreate>{getFormatDate(createAt)}</O.CardCreate>
        <O.CardTitle>{postTitle}</O.CardTitle>
        <O.CardDescription>{postDescription}</O.CardDescription>
        <O.CardPlace>
          <PlaceIcon style={{ width: '16px', height: '16px' }} />
          {postPlace}
        </O.CardPlace>
        <O.TagGroup>
          {postTags.map((place) => {
            const { tagTitle, tagId } = place;
            return (
              <Chip
                sx={{ background: 'white', height: '21px', padding: '0 8px' }}
                key={tagId}
                label={tagTitle}
                variant="filled"
              />
            );
          })}
        </O.TagGroup>
      </O.CardInfo>
    </O.OneWrapper>
  );
};

export default OnePostMapCard;
