import type { SearchProps } from '@type/main.type';
import S from '@components/MainSearchBox/style';
import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '@assets/svg/searchIcon.svg';

const MainSearchBox = (props: SearchProps) => {
  const { setState, placeholder } = props;
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setState(searchValue);
  }, [searchValue, setState]);

  return (
    <S.Wrapper>
      <S.IconBox>
        <SearchIcon />
      </S.IconBox>
      <S.SearchInput
        placeholder={placeholder}
        isValue={searchValue.trim().length === 0}
        onChange={(e) => setSearchValue(e.target.value)}
      ></S.SearchInput>
    </S.Wrapper>
  );
};

export default MainSearchBox;
