import type { SearchProps } from '@type/main.type';
import S from '@components/Main/SearchBox/style';
import React, { FormEvent, useRef } from 'react';
import { ReactComponent as SearchIcon } from '@assets/svg/searchIcon.svg';
import { useSearchParams } from 'react-router-dom';

const MainSearchBox = (props: SearchProps) => {
  const { state, placeholder, date } = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = useRef('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: React.MutableRefObject<string>
  ) => {
    type.current = e.target.value;
  };

  const page = searchParams.get('page');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let select = {};
    if (state.selectUserList.length !== 0) {
      select = { ...select, userList: state.selectUserList.map((v) => v.id) };
    }
    if (state.selectTagList.length !== 0) {
      select = { ...select, tagList: state.selectTagList.map((v) => v.id) };
    }
    if (date.startDate) {
      select = {
        ...select,
        startDate: date.startDate ?? null,
        endDate: date.endDate ?? null,
      };
    }
    if (keyword.current.trim().length !== 0) {
      select = { ...select, keyword: keyword.current };
    }
    if (page) {
      select = { ...select, page };
    }
    setSearchParams(select);
  };

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.IconBox>
        <SearchIcon width={12} height={12} />
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
