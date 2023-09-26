import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDimensions } from '@hooks/common/use-dimensions';
import type { selectType } from '@type/main.type';
import S from './style';
import { MenuToggle } from './components/Toggle';
import MenuList from './components/MenuList';
import SelectList from './components/component/SelectList';
import { UserType } from '@/types/user.type';
import { TagType } from '@/types/tag.type';
export type SelectBoxProps = {
  /**
   * 해당 박스의 라벨을 입력해주세요
   */
  labelName: '사용자' | '태그';
  /**
   * 해당 박스를 이루는 목록을 넣어주세요
   */
  ListItem: UserType[] | TagType[];
  /**
   * 해당 박스의 길이를 선택해주세요
   */
  BoxWidth?: number;
  /**
   * 해당 박스의 place holder를 입력해주세요
   */
  placeHolder?: string;
  /**
   * 메뉴리스트의 세로 길이를 적어주세요.
   */
  menuHeight?: number;
  /**
   * 메뉴리스트의 가로 길이를 적어주세요.
   */
  menuWidth?: number;
  /**
   * State를 받을 함수를 넣어주세요
   */
  setState: (select: selectType[]) => void;
};

const CreateSelectBox = (props: SelectBoxProps) => {
  const {
    BoxWidth = 168,
    menuHeight = 200,
    menuWidth = 168,
    ListItem,
    labelName,
    setState,
  } = props;
  const [select, setSelect] = useState<selectType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setState(select);
  }, [select]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSearchValue('');
  };

  const EnterCheck = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (searchValue.trim().length === 0)
        return alert('아무것도 입력하지 않았습니다.');
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
    }
  };

  const placeholder =
    labelName == '사용자'
      ? '함께한 친구들을 추가해 주세요'
      : '태그를 지정해 주세요';

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <S.Wrapper isOpen={isOpen} minWidth={Math.max(150, BoxWidth)}>
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
              ItemList={ListItem}
            />
          </S.MenuList>
        </S.Container>
      </motion.nav>
    </S.Wrapper>
  );
};

export default CreateSelectBox;
