import type { TagType, UserType } from '@type/post.type';
import type { MenuListProps, selectType } from '@type/main.type';
import UserList from './component/UserList';
import TagList from './component/TagList';
import S from './style';
import { isUserType, isUserTypeArray } from '@utils/typeGuard';

const MenuList = (props: MenuListProps) => {
  const { itemList, searchValue, select, changeSelect } = props;

  console.log('menu', props);

  const checkSelectItem = (thisValue: number) => {
    if (select.length) {
      return select.filter((i) => i.id === thisValue).length !== 0;
    }
  };

  const ListItem: TagType[] | UserType[] = !isUserTypeArray(itemList)
    ? [
        ...select.map((prev) => {
          return {
            userId: prev.id,
            userName: prev.title,
            imgUrl: prev.imgUrl,
            isAdmin: prev.isAdmin,
          };
        }),
        ...itemList.filter((prev) => !checkSelectItem(prev.userId)),
      ]
    : [
        ...select.map((prev) => {
          return { tagId: prev.id, tagTitle: prev.title };
        }),
        ...itemList.filter((prev) => !checkSelectItem(prev.tagId)),
      ];

  const setChange = (ListItem: UserType | TagType) => {
    if (isUserType(ListItem)) {
      const thisValue = ListItem.tagId;
      if (!checkSelectItem(thisValue)) {
        const newItem: selectType = {
          id: ListItem.tagId,
          title: ListItem.tagTitle,
        };
        changeSelect((prev) => [...prev, newItem]);
      } else {
        changeSelect((prev) =>
          prev.filter((prev) => prev.id !== ListItem.tagId)
        );
      }
    } else if (!isUserType(ListItem)) {
      const thisValue = ListItem.userId;
      if (!checkSelectItem(thisValue)) {
        const newItem: selectType = {
          id: ListItem.userId,
          title: ListItem.userName,
          imgUrl: ListItem.imgUrl,
        };
        changeSelect((prev) => [...prev, newItem]);
      } else {
        changeSelect((prev) =>
          prev.filter((prev) => prev.id !== ListItem.userId)
        );
      }
    }
  };

  if (!isUserTypeArray(ListItem)) {
    return ListItem.map((item) => (
      <S.List
        grid={isUserType(item)}
        select={checkSelectItem(item.userId)!}
        onClick={() => setChange(item)}
        key={item.userId}
      >
        <UserList Item={item} />
      </S.List>
    ));
  } else {
    if (searchValue.length !== 0) {
      const selectArray = ListItem.filter((item) => {
        const changeArray = item.tagTitle.split('');
        return (
          changeArray.splice(0, searchValue.length).join('') === searchValue
        );
      });
      return selectArray.map((item) => (
        <S.List
          grid={isUserType(item)}
          select={checkSelectItem(item.tagId)!}
          onClick={() => setChange(item)}
          key={item.tagId}
        >
          <TagList Item={item} />
        </S.List>
      ));
    }
    return ListItem.map((item) => (
      <S.List
        grid={isUserType(item)}
        select={checkSelectItem(item.tagId)!}
        onClick={() => setChange(item)}
        key={item.tagId}
      >
        <TagList Item={item} />
      </S.List>
    ));
  }
};
export default MenuList;
