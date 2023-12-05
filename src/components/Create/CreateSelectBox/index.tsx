import { useDimensions, useTagMutation } from '@/hooks';
import type { SelectBoxProps, selectType } from '@/types';
import { toastColorMessage } from '@/utils';
import { motion } from 'framer-motion';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuList, MenuToggle, SelectList } from './components';
import S from './style';

export const CreateSelectBox = (props: SelectBoxProps) => {
  const {
    boxWidth = 168,
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
  const [searchValue, setSearchValue] = useState<string>('');
  const { spaceId } = useParams();

  useEffect(() => {
    setState(select);
  }, [select]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSearchValue('');
  };
  const { postTagAction } = useTagMutation();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ListItem.length === 20)
      return toastColorMessage('이미 태그의 갯수가 20개 최대치입니다. ');
    if (searchValue?.trim().length === 0)
      return toastColorMessage('값이 비어있습니다.');
    if (select.findIndex((prevState) => prevState.title === searchValue) !== -1)
      return toastColorMessage('이미 있는 태그입니다.');

    postTagAction({ spaceId: Number(spaceId)!, tagName: searchValue });
    setSearchValue('');
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
            $isOpen={isOpen}
            maxHeight={300}
          >
            {labelName === '태그' && (
              <form onSubmit={onSubmit}>
                <S.InputContainer isOpen={isOpen}>
                  <SelectList setState={setSelect} Items={select} />
                  <S.SearchInput
                    value={searchValue}
                    placeholder={
                      '없는 태그는 Enter 키를 통해 추가할 수 있습니다.'
                    }
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </S.InputContainer>
              </form>
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
