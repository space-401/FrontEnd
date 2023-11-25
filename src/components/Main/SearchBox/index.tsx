import type { SearchProps } from '@/types';
import S from './style';
import React, { FormEvent, useState } from 'react';
import { ReactComponent as SearchIcon } from '@/assets/svg/searchIcon.svg';

export const SearchBox = (props: SearchProps) => {
  const { placeholder, movePage, initialKeyword = '', height, width } = props;

  const [keyword, setkeyword] = useState(initialKeyword);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    movePage(undefined, keyword);
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
        onChange={(e) => onChange(e)}
      ></S.SearchInput>
    </S.Wrapper>
  );
};
