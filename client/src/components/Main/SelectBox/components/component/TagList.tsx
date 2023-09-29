import { Chip } from '@mui/material';
import { theme } from '@styles/theme/theme';
import type { TagListProps } from '@type/main.type';

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
      label={Item.tagTitle}
    />
  );
};

export default TagList;
