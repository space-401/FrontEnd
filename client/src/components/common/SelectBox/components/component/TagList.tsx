import { TagType } from '@type/tag.type';
import { Chip } from '@mui/material';
import { theme } from '@styles/theme/theme';

type TagListProps = {
  Item: TagType;
  select: boolean;
};

const TagList = (props: TagListProps) => {
  const { Item } = props;
  return (
    <Chip
      className={'tag-title'}
      sx={{
        height: '18px',
        background: theme.COLOR.white,
        color: theme.COLOR.black,
        fontSize: theme.TEXT_SIZE['text-12'],
        fontFamily: theme.FONT_FAMILY['Pretendard'],
        fontWeight: theme.FONT_WEIGHT['WEIGHT-400'],
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      variant="outlined"
      label={Item.tag_title}
    />
  );
};

export default TagList;
