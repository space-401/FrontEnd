import type { SearchProps } from '@/types';
import React, { FormEvent, useState } from 'react';
import { ReactComponent as SearchIcon } from '@/assets/svg/searchIcon.svg';
import S from './style';

export const SearchBox = (props: SearchProps) => {
  const {
    placeholder,
    setKeyWorld,
    initialKeyword = '',
    height,
    width,
  } = props;

  const [keyword, setkeyword] = useState(initialKeyword);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyWorld(keyword);
  };

  const onkeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setKeyWorld(keyword);
    }
  };

  return (
    <S.Wrapper height={height} onSubmit={onSubmit}>
      <S.IconBox>
        <SearchIcon width={12} height={12} />
      </S.IconBox>
      <S.SearchInput
        isValue={keyword.length !== 0}
        width={width}
        value={keyword}
        placeholder={placeholder}
        onKeyDown={onkeydown}
        onChange={(e) => onChange(e)}
      ></S.SearchInput>
    </S.Wrapper>
  );
};
