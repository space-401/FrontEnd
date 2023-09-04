import {UserType} from "@type/user.type";
import {TagType} from "@type/tag.type";
import {useRef, useState} from "react";
import {motion} from "framer-motion"
import S from "@components/common/SelectBox/style";
import {useDimensions} from "@hooks/common/use-dimensions";
import {MenuToggle} from "@components/common/SelectBox/components/Toggle";
import MenuList from "@components/common/SelectBox/components/MenuList";

export type selectType = {
    id: number,
    title: string
}

export type SelectBoxProps = {
    /**
     * 해당 박스의 선택 박스에 종류에 대해 입력해주세요
     */
    labelName: string;
    /**
     * 해당 박스를 이루는 목록을 넣어주세요
     */
    ListItem: UserType[] | TagType[]
    /**
     * 해당 박스의 길이를 선택해주세요
     */
    minWidth?: number
    /**
     * 해당 박스의 place holder를 입력해주세요
     */
    placeHolder?: string
};

const SelectBox = (props: SelectBoxProps) => {
    const {minWidth = 150, placeHolder, ListItem, labelName} = props;
    const [select, setSelect] = useState<selectType[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState('')

    const searchReset = () => {
        setSearchValue('')
    }

    const toggleOpen = () => {
        setIsOpen(prev => !prev)
        if (isOpen) {
            /* 비동기 통신함수 들어갈 곳 */
        }
        searchReset()
    }

    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    return (
        <S.Wrapper minWidth={Math.max(150, minWidth)} $isSearch={searchValue.length !== 0}>
            {isOpen ? <S.SearchInput placeholder={placeHolder || labelName}
                                     onChange={(e) => setSearchValue(e.target.value)}/> :
                <S.LabelTitle>{labelName}</S.LabelTitle>}
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <MenuToggle toggle={toggleOpen}/>
                <S.Container $isOpen={isOpen}>
                    <S.MenuList $isOpen={isOpen}>
                        <MenuList select={select} changeSelect={setSelect} searchValue={searchValue}
                                  ListItem={ListItem}/>
                    </S.MenuList>
                </S.Container>
            </motion.nav>
        </S.Wrapper>
    )
};

export default SelectBox;
