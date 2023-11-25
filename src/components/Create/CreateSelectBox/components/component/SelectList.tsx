import { selectType } from '@/types';
import { Chip, Stack } from '@mui/material';
import { theme } from '@/styles';
import { Dispatch, SetStateAction } from 'react';

export const SelectList = (props: {
  Items: selectType[];
  setState: Dispatch<SetStateAction<selectType[]>>;
}) => {
  const { Items, setState } = props;
  const handleDelete = (deleteId: number) => {
    setState((prevState) => prevState.filter((prev) => prev.id !== deleteId));
  };
  return (
    <Stack
      sx={{
        width: '100%',
        overflow: 'clip',
        flexWrap: 'wrap',
        gap: '5px',
      }}
      direction={'row'}
    >
      {Items.map((item) => (
        <Chip
          key={item.id}
          className={'tag-title'}
          sx={{
            position: 'relative',
            height: '29px',
            background: theme.COLOR['gray-4'],
            color: theme.COLOR.white,
            fontSize: theme.TEXT_SIZE['text-16'],
            fontFamily: theme.FONT_FAMILY['Pretendard'],
            fontWeight: theme.FONT_WEIGHT['WEIGHT-500'],
            overflow: 'hidden',
            maxWidth: '138px',
            textOverflow: 'ellipsis',
            zIndex: 1000,
          }}
          variant="outlined"
          onDelete={() => handleDelete(item.id)}
          label={item.title}
        />
      ))}
    </Stack>
  );
};
