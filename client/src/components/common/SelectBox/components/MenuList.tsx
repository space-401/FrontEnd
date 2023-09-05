import {UserType} from '@type/user.type';
import {TagType} from '@type/tag.type';
import TagList from '@components/common/SelectBox/components/component/TagList';
import UserList from '@components/common/SelectBox/components/component/UserList';
import S from '@components/common/SelectBox/components/style';
import {Dispatch, SetStateAction} from 'react';
import type {selectType} from "@type/main.type";

type MenuListProps = {
    searchValue: string;
    ItemList: UserType[] | TagType[];
    select: selectType[];
    changeSelect: Dispatch<SetStateAction<selectType[]>>;
};

const isUserTypeArray = (items: UserType[] | TagType[]): items is TagType[] => {
    return items.every((item) => 'tag_id' in item);
};

const isUserType = (items: UserType | TagType): items is TagType => {
    return 'tag_id' in items
}

const MenuList = (props: MenuListProps) => {
    const {ItemList, searchValue, select, changeSelect} = props;

    const checkSelectItem = (thisValue: number) => {
        return select.filter((i) => i.id === thisValue).length !== 0;
    };

    const ListItem = (!isUserTypeArray(ItemList)) ? [...ItemList.filter(prev => checkSelectItem(prev.user_id)), ...ItemList.filter(prev => !checkSelectItem(prev.user_id))] : [...ItemList.filter(prev => checkSelectItem(prev.tag_id)), ...ItemList.filter(prev => !checkSelectItem(prev.tag_id))];

    const setChange = (ListItem: UserType | TagType) => {
        if (isUserType(ListItem)) {
            const thisValue = ListItem.tag_id
            if (!checkSelectItem(thisValue)) {
                const newItem: selectType = {
                    id: ListItem.tag_id,
                    title: ListItem.tag_title,
                }
                changeSelect(prev => [...prev, newItem])
            } else {
                changeSelect(prev => prev.filter(prev => prev.id !== ListItem.tag_id))
            }
        }else if (!isUserType(ListItem)){
            const thisValue = ListItem.user_id
            if (!checkSelectItem(thisValue)) {
                const newItem: selectType = {
                    id: ListItem.user_id,
                    title: ListItem.user_name,
                }
                changeSelect(prev => [...prev, newItem])
            } else {
                changeSelect(prev => prev.filter(prev => prev.id !== ListItem.user_id))
            }
        }
    }

    if (!isUserTypeArray(ListItem)) {
        return ListItem.map((item) => (
            <S.List grid={isUserType(item)} select={checkSelectItem(item.user_id)} onClick={() => setChange(item)} key={item.user_id}>
                <UserList Item={item}/>
            </S.List>
        ));
    } else {
        if (searchValue.length !== 0) {
            const selectArray = ListItem.filter((item) => {
                const changeArray = item.tag_title.split('');
                return (
                    changeArray.splice(0, searchValue.length).join('') === searchValue
                );
            });
            return selectArray.map((item) => (
                <S.List grid={isUserType(item)} select={checkSelectItem(item.tag_id)} onClick={() => setChange(item)} key={item.tag_id}>
                    <TagList Item={item}/>
                </S.List>
            ))
                ;
        }
        return ListItem.map((item) => (
            <S.List grid={isUserType(item)} select={checkSelectItem(item.tag_id)} onClick={() => setChange(item)} key={item.tag_id}>
                <TagList Item={item}/>
            </S.List>
        ));
    }
};
export default MenuList;
