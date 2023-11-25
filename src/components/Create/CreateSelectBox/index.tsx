import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { SelectBoxProps, selectType } from '@/types';
import S from './style';
import { useAlertModalOpen, useDimensions } from '@/hooks';
import { SelectList, MenuToggle, MenuList } from './components';

export const CreateSelectBox = (props: SelectBoxProps) => {
  const {
    boxWidth = 168,
    menuHeight = 200,
    menuWidth = 168,
    ListItem,
    labelName,
    setState,
    selectState,
  } = props;

  const [select, setSelect] = useState<selectType[]>(
    selectState ? selectState : []
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setState(select);
  }, [select]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSearchValue('');
  };

  const alertOpen = useAlertModalOpen();

  const alertModalOpen = () => {
    alertOpen({
      width: 300,
      alertMessage: '확인',
      alertTitle: '아무것도 입력하지 않았습니다.',
    });
  };

  const EnterCheck = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      alertModalOpen();
    }
    if (searchValue.trim().length === 0)
      if (
        select.filter((prevState) => prevState.title === searchValue).length !==
        0
      )
        return;
    setSelect((prevState) => [
      ...prevState,
      { id: Math.floor(Math.random() * 10000), title: searchValue },
    ]);
    return setSearchValue('');
  };

  const placeholder =
    labelName == '사용자'
      ? '함께한 친구들을 추가해 주세요'
      : '태그를 지정해 주세요';

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <S.Wrapper isOpen={isOpen} minWidth={Math.max(150, boxWidth)}>
      <S.LabelTitle>
        {!isOpen ? (
          select.map((prev) => prev.title).join(', ') || (
            <div style={{ color: '#767676' }}>{placeholder}</div>
          )
        ) : labelName !== '태그' ? (
          <SelectList setState={setSelect} Items={select} />
        ) : (
          select.map((prev) => prev.title).join(', ')
        )}
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
            grid={labelName !== '태그'}
            menuWidth={menuWidth}
            maxHeight={menuHeight}
            $isOpen={isOpen}
          >
            {labelName === '태그' && (
              <S.InputContainer isOpen={isOpen}>
                <SelectList setState={setSelect} Items={select} />
                <S.SearchInput
                  value={searchValue}
                  onKeyDown={EnterCheck}
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
