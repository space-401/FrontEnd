import type { TagListProps } from '@type/main.type';
import S from '@components/Create/CreateSelectBox/components/style';
import { ReactComponent } from '@assets/svg/trash.svg';

const TagList = (props: TagListProps) => {
  const { Item } = props;
  return (
    <S.TagGroup>
      <S.TagTitle>{Item.tagTitle}</S.TagTitle>
      <S.DeleteButton>
        <ReactComponent />
      </S.DeleteButton>
    </S.TagGroup>
  );
};

export default TagList;
