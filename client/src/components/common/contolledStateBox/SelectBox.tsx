import React, {Dispatch, SetStateAction} from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {MenuItem} from '@mui/material';


type MenuItemType = {
    id: string;
    value: string;
};


export type SelectBoxProps = {
    /**
     * 해당 박스의 선택 박스에 종류에 대해 입력해주세요
     */
    labelName: string;
    /**
     * 해당 박스를 이루는 목록을 넣어주세요
     */
    MenuItems: MenuItemType[];
    /**
     * 해당 박스의 최소 가로 길이를 넣어주세요
     */
    minWidth?: number;
    /**
     * 변경할 상태 변경함수를 넣어주세요
     */
    setValue: Dispatch<SetStateAction<string>>;
}

const SelectBox = (props: SelectBoxProps) => {
    const {labelName, MenuItems, minWidth = 80, setValue, ...rest} = props
    const [state, setState] = React.useState<string>('');
    const handleChange = (event: SelectChangeEvent) => {
        setState(event.target.value);
        setValue(state)
    };

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: minWidth }} {...rest}>
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
                            {item.value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
        ;
};


SelectBox.defaultProps = {
    minWidth: 80
}

export default SelectBox;
