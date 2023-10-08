import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '@hooks/common/useDimensions';
import type { SelectBoxProps, selectType } from '@type/main.type';
import S from './style';
import { MenuToggle } from '@components/Main/SelectBox/components/Toggle';
import MenuList from '@components/Main/SelectBox/components/MenuList';

const CSelectBox = (props: SelectBoxProps) => {
  const {
    BoxWidth = 168,
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
  }, [select]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSearchValue('');
  };

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <S.Wrapper
      isSelect={select.length === 0}
      isOpen={isOpen}
      minWidth={BoxWidth}
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
        <MenuToggle toggle={toggleOpen} />
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
      </motion.nav>
    </S.Wrapper>
  );
};

export default CSelectBox;
