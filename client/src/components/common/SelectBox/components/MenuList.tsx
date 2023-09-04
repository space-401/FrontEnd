import { UserType } from '@type/user.type';
import { TagType } from '@type/tag.type';
import TagList from '@components/common/SelectBox/components/component/TagList';
import UserList from '@components/common/SelectBox/components/component/UserList';
import S from '@components/common/SelectBox/components/style';
import { Dispatch, SetStateAction } from 'react';
import { selectType } from '@components/common/SelectBox/SelectBox';

type MenuListProps = {
  searchValue: string;
  ListItem: UserType[] | TagType[];
  select: selectType[];
  changeSelect: Dispatch<SetStateAction<selectType[]>>;
};

const isUserTypeArray = (items: UserType[] | TagType[]): items is TagType[] => {
  return items.every((item) => 'tag_id' in item);
};

const MenuList = (props: MenuListProps) => {
  const { ListItem, searchValue, select } = props;

  const checkSelectItem = (thisValue: string) => {
    return select.filter((i) => i.title === thisValue).length === 0;
  };

  if (!isUserTypeArray(ListItem)) {
    if (searchValue.length !== 0) {
      const selectArray = ListItem.filter((item) => {
        const changeArray = item.user_name.split('');
        return (
          changeArray.splice(0, searchValue.length).join('') === searchValue
        );
      });

      return [
        <S.List key={Math.floor(Math.random() * 10000)}>
          <UserList
            select={checkSelectItem(searchValue)}
            Item={{
              user_id: Math.floor(Math.random() * 10000),
              user_name: searchValue,
              user_profile_img: searchValue,
            }}
          ></UserList>
        </S.List>,
        ...selectArray.map((item) => (
          <S.List key={item.user_id}>
            <UserList select={checkSelectItem(item.user_name)} Item={item} />
          </S.List>
        )),
      ];
    }
    return ListItem.map((item) => (
      <S.List key={item.user_id}>
        <UserList select={checkSelectItem(item.user_name)} Item={item} />
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
      return [
        <S.List key={Math.floor(Math.random() * 10000)}>
          <TagList
            select={checkSelectItem(searchValue)}
            Item={{
              tag_id: Math.floor(Math.random() * 10000),
              tag_title: searchValue,
            }}
          ></TagList>
        </S.List>,
        ...selectArray.map((item) => (
          <S.List key={item.tag_id}>
            <TagList select={checkSelectItem(item.tag_title)} Item={item} />
          </S.List>
        )),
      ];
    }
    return ListItem.map((item) => (
      <S.List key={item.tag_id}>
        <TagList select={checkSelectItem(item.tag_title)} Item={item} />
      </S.List>
    ));
  }
};
export default MenuList;
