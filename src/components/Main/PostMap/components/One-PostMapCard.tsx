import type { TagType } from '@/types';
import { getFormatDate } from '@/utils';
import { Chip } from '@mui/material';
import { ReactComponent as PlaceIcon } from '@/assets/svg/markerIcon.svg';
import { O } from './style';

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
export const OnePostMapCard = (props: OnePostPropType) => {
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
            const { tagName, tagId } = place;
            return (
              <Chip
                sx={{ background: 'white', height: '21px', padding: '0 8px' }}
                key={tagId}
                label={tagName}
                variant="filled"
              />
            );
          })}
        </O.TagGroup>
      </O.CardInfo>
    </O.OneWrapper>
  );
};
