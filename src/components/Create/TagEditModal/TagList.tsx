import { TagType } from '@/types';
import { ReactComponent } from '@/assets/svg/trash.svg';
import S from '@/components/Create/CreateSelectBox/components/style';

type TagListProps = {
  onDeleteTag: () => void;
  item: TagType;
};

export const TagList = ({ onDeleteTag, item }: TagListProps) => {
  return (
    <S.TagGroup>
      <S.TagTitle>{item.tagTitle}</S.TagTitle>
      <S.DeleteButton>
        <ReactComponent onClick={onDeleteTag} />
      </S.DeleteButton>
    </S.TagGroup>
  );
};
