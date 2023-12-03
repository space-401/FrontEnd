import type { TagListProps } from '@/types';
import { ReactComponent } from '@/assets/svg/trash.svg';
import S from '../style';

export const TagList = (props: TagListProps) => {
  const { Item } = props;
  console.log(Item);
  return (
    <S.TagGroup>
      <S.TagTitle>{Item.tagName}</S.TagTitle>
      <S.DeleteButton>
        <ReactComponent />
      </S.DeleteButton>
    </S.TagGroup>
  );
};
