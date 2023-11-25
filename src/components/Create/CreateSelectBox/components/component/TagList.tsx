import type { TagListProps } from '@/types';
import S from '../style';
import { ReactComponent } from '@/assets/svg/trash.svg';

export const TagList = (props: TagListProps) => {
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
