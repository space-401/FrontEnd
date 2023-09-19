import type { SearchProps } from '@type/main.type';
import S from '@components/Main/SearchBox/style';
import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '@assets/svg/searchIcon.svg';

const MainSearchBox = (props: SearchProps) => {
  const { setState, placeholder } = props;
  const [searchValue, setSearchValue] = useState('');

  const changeValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (searchValue.trim().length !== 0) {
        setState(searchValue);
      }
    }
  };

  const onClick = () => {
    if (searchValue.trim().length !== 0) {
      setState(searchValue);
    }
  };

  return (
    <S.Wrapper>
      <S.IconBox onClick={onClick}>
        <SearchIcon />
      </S.IconBox>
      <S.SearchInput
        placeholder={placeholder}
        isValue={searchValue.trim().length === 0}
        autoFocus={true}
        onKeyDown={(e) => changeValue(e)}
        onChange={(e) => setSearchValue(e.target.value)}
      ></S.SearchInput>
    </S.Wrapper>
  );
};
export default MainSearchBox;
