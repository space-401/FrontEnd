import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';

type MenuItemType = {
  id: string;
  value: string;
  title: string;
};

export interface SelectBoxProps {
  labelName: string;
  MenuItems: MenuItemType[];
  minWidth: number;
}

const SelectBox = ({ labelName, MenuItems, minWidth }: SelectBoxProps) => {
  const [state, setState] = React.useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: minWidth }}>
        <InputLabel id={state}>{labelName}</InputLabel>
        <Select
          labelId={state}
          id={state}
          value={state}
          onChange={handleChange}
          autoWidth
          label={labelName}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {MenuItems.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectBox;
