import type { UserType } from '@type/user.type';
import type { TagType } from '@type/tag.type';
import type { MenuListProps, selectType } from '@type/main.type';
import UserList from './component/UserList';
import TagList from './component/TagList';
import S from './style';
import { isUserType, isUserTypeArray } from '@utils/typeGuard';

const MenuList = (props: MenuListProps) => {
  const { ItemList, searchValue, select, changeSelect } = props;

  const checkSelectItem = (thisValue: number) => {
    return select.filter((i) => i.id === thisValue).length !== 0;
  };

  const ListItem: UserType[] | TagType[] = !isUserTypeArray(ItemList)
    ? [
        ...select.map((prev) => {
          return {
            user_id: prev.id,
            user_name: prev.title,
            user_profile_img: prev.img_url,
          };
        }),
        ...ItemList.filter((prev) => !checkSelectItem(prev.user_id)),
      ]
    : [
        ...select.map((prev) => {
          return { tag_id: prev.id, tag_title: prev.title };
        }),
        ...ItemList.filter((prev) => !checkSelectItem(prev.tag_id)),
      ];

  const setChange = (ListItem: UserType | TagType) => {
    if (isUserType(ListItem)) {
      const thisValue = ListItem.tag_id;
      if (!checkSelectItem(thisValue)) {
        const newItem: selectType = {
          id: ListItem.tag_id,
          title: ListItem.tag_title,
        };
        changeSelect((prev) => [...prev, newItem]);
      } else {
        changeSelect((prev) =>
          prev.filter((prev) => prev.id !== ListItem.tag_id)
        );
      }
    } else if (!isUserType(ListItem)) {
      const thisValue = ListItem.user_id;
      if (!checkSelectItem(thisValue)) {
        const newItem: selectType = {
          id: ListItem.user_id,
          title: ListItem.user_name,
          img_url: ListItem.user_profile_img,
        };
        changeSelect((prev) => [...prev, newItem]);
      } else {
        changeSelect((prev) =>
          prev.filter((prev) => prev.id !== ListItem.user_id)
        );
      }
    }
  };

  if (!isUserTypeArray(ListItem)) {
    return ListItem.map((item) => (
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
      const selectArray = ListItem.filter((item) => {
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
    return ListItem.map((item) => (
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
