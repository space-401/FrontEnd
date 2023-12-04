import { useDimensions } from '@/hooks';
import type { SelectBoxProps, selectType } from '@/types';
import { toastColorMessage } from '@/utils';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MenuList, MenuToggle } from '@/components/Main';
import S from './style';

export const SelectBox = (props: SelectBoxProps) => {
  const {
    boxHeight = 38,
    boxWidth = 168,
    menuHeight = 200,
    placeHolder,
    menuWidth = 168,
    ListItem,
    labelName,
    selectState,
    setState,
  } = props;
  const [select, setSelect] = useState<selectType[]>(selectState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setState(select);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSearchValue('');
  };

  const onClick = () => {
    if (ListItem.length > 1) toggleOpen();
    else toastColorMessage('해당하는 필터 값이 없습니다.');
  };

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <S.SelectLayOut>
      <S.Wrapper
        onClick={onClick}
        isSelect={select.length === 0}
        isOpen={isOpen}
        width={boxWidth}
        height={boxHeight}
      >
        <S.LabelTitle>
          {select.map((prev) => prev.title).join(', ') || labelName}
        </S.LabelTitle>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <MenuToggle />
        </motion.nav>
      </S.Wrapper>
      <S.Container $isOpen={isOpen}>
        <S.BackClickBlock isOpen={isOpen} onClick={toggleOpen} />
        <S.MenuList
          row={Math.floor(ListItem.length / 2)}
          grid={labelName !== '태그'}
          menuWidth={menuWidth}
          maxHeight={menuHeight + 2}
          $isOpen={isOpen}
        >
          {labelName === '태그' && (
            <S.InputContainer isOpen={isOpen}>
              <S.SearchInput
                placeholder={
                  select.map((prev) => prev.title).join(', ') ??
                  placeHolder ??
                  labelName
                }
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </S.InputContainer>
          )}
          <MenuList
            select={select}
            changeSelect={setSelect}
            searchValue={searchValue}
            itemList={ListItem}
          />
        </S.MenuList>
      </S.Container>
    </S.SelectLayOut>
  );
};
