import {UserType} from '@type/user.type';
import {TagType} from '@type/tag.type';
import {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import S from '@components/common/SelectBox/style';
import {useDimensions} from '@hooks/common/use-dimensions';
import {MenuToggle} from '@components/common/SelectBox/components/Toggle';
import MenuList from '@components/common/SelectBox/components/MenuList';
import {selectType} from "@type/main.type";


export type SelectBoxProps = {
    /**
     * 해당 박스의 라벨을 입력해주세요
     */
    labelName: "사용자" | "태그";
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
    menuWidth?: number
    /**
     * State를 받을 함수를 넣어주세요
     */
    setState: (select: selectType[]) => void
};

const SelectBox = (props: SelectBoxProps) => {
    const {
        BoxWidth = 168,
        menuHeight = 200,
        placeHolder,
        menuWidth = 168,
        ListItem,
        labelName,
        setState
    } = props;
    const [select, setSelect] = useState<selectType[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setState(select)
    }, [setState, select])

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
        setSearchValue('');
    };

    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    return (
        <S.Wrapper isOpen={isOpen}
                   minWidth={Math.max(150, BoxWidth)}
        >
            <S.LabelTitle>{select.map(prev => prev.title).join(', ') || labelName}</S.LabelTitle>
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                ref={containerRef}
            >
                <MenuToggle toggle={toggleOpen}/>
                <S.Container $isOpen={isOpen}>
                    <S.BackClickBlock isOpen={isOpen} onClick={toggleOpen}/>
                    <S.MenuList grid={labelName !== '태그'} menuWidth={menuWidth} maxHeight={menuHeight} $isOpen={isOpen}>
                        {labelName === '태그' && <S.InputContainer isOpen={isOpen}>
                            <S.SearchInput
                                placeholder={select.map(prev => prev.title).join(', ') || placeHolder || labelName}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </S.InputContainer>}
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

export default SelectBox;
