import { O } from '@components/PostMap/components/style';
import { TagType } from '@type/tag.type';
import { getFormatDate } from '@utils/formatter';
import { ReactComponent as PlaceIcon } from '@assets/svg/markerIcon.svg';
import { Chip } from '@mui/material';

type OnePostPropType = {
  post_title: string;
  post_description: string;
  post_place: string;
  post_tags: TagType[];
  main_img_url: string;
  create_at: string;
  isSelect: boolean;
  position: { lat: number; lng: number };
  onClick: () => void;
};
const OnePostMapCard = (props: OnePostPropType) => {
  const {
    isSelect,
    onClick,
    post_description,
    post_tags,
    post_place,
    post_title,
    main_img_url,
    create_at,
  } = props;
  return (
    <O.OneWrapper onClick={onClick} isSelect={isSelect}>
      <O.CardImg img_url={main_img_url} />
      <O.CardInfo>
        <O.CardCreate>{getFormatDate(create_at)}</O.CardCreate>
        <O.CardTitle>{post_title}</O.CardTitle>
        <O.CardDescription>{post_description}</O.CardDescription>
        <O.CardPlace>
          <PlaceIcon style={{ width: '16px', height: '16px' }} />
          {post_place}
        </O.CardPlace>
        <O.TagGroup>
          {post_tags.map((place) => (
            <Chip
              sx={{ background: 'white', height: '21px', padding: '0 8px' }}
              key={place.tag_id}
              label={place.tag_title}
              variant="filled"
            />
          ))}
        </O.TagGroup>
      </O.CardInfo>
    </O.OneWrapper>
  );
};

export default OnePostMapCard;
