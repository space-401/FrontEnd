import type {SearchProps} from '@type/main.type';
import S from '@components/Main/SearchBox/style';
import React, {FormEvent, useRef} from 'react';
import {ReactComponent as SearchIcon} from '@assets/svg/searchIcon.svg';

const MainSearchBox = (props: SearchProps) => {
    const {state, placeholder} = props;

    const keyword = useRef("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: React.MutableRefObject<string>) => {
        const value = e.target.value;
        type.current = value;
    };

    for (const element in state) {
        console.log(element.length ===0, element)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(state)
        console.log(keyword.current)
    }


    return (
        <S.Wrapper onSubmit={onSubmit}>
            <S.IconBox>
                <SearchIcon/>
            </S.IconBox>
            <S.SearchInput
                placeholder={placeholder}
                autoFocus={true}
                onChange={(e) => onChange(e, keyword)}
            ></S.SearchInput>
        </S.Wrapper>
    );
};
export default MainSearchBox;
