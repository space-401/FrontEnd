import type { UserType } from '@type/user.type';
import type { TagType } from '@type/tag.type';
import type { MenuListProps, selectType } from '@type/main.type';
import UserList from '@pages/CreatePost/components/SelectBox/components/component/UserList';
import TagList from '@pages/CreatePost/components/SelectBox/components/component/TagList';
import S from '@pages/CreatePost/components/SelectBox/components/style';
import { isUserType, isUserTypeArray } from '@utils/typeGuard';

const MenuList = (props: MenuListProps) => {
  const { ItemList, searchValue, select, changeSelect } = props;

  const checkSelectItem = (thisValue: number) => {
    return select.filter((i) => i.id === thisValue).length !== 0;
  };

  const setChange = (ListItem: UserType | TagType) => {
    const thisValue = isUserType(ListItem) ? ListItem.tag_id : ListItem.user_id;
    if (!checkSelectItem(thisValue)) {
      const newItem: selectType = {
        id: thisValue,
        title: isUserType(ListItem) ? ListItem.tag_title : ListItem.user_name,
      };
      changeSelect((prev) => [...prev, newItem]);
    } else {
      changeSelect((prev) => prev.filter((prev) => prev.id !== thisValue));
    }
  };

  if (!isUserTypeArray(ItemList)) {
    return ItemList.map((item) => (
      <S.List
        grid={isUserType(item)}
        select={checkSelectItem(item.user_id)}
        onClick={() => setChange(item)}
        key={item.user_id}
      >
        <UserList Item={item} />
      </S.List>
    ));
  } else {
    if (searchValue.length !== 0) {
      const selectArray = ItemList.filter((item) => {
        const changeArray = item.tag_title.split('');
        return (
          changeArray.splice(0, searchValue.length).join('') === searchValue
        );
      });
      return selectArray.map((item) => (
        <S.List
          grid={isUserType(item)}
          select={checkSelectItem(item.tag_id)}
          onClick={() => setChange(item)}
          key={item.tag_id}
        >
          <TagList Item={item} />
        </S.List>
      ));
    }
    return ItemList.map((item) => (
      <S.List
        grid={isUserType(item)}
        select={checkSelectItem(item.tag_id)}
        onClick={() => setChange(item)}
        key={item.tag_id}
      >
        <TagList Item={item} />
      </S.List>
    ));
  }
};
export default MenuList;
