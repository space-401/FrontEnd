import { useTagDeleteMutation } from '@/hooks';
import type { TagListProps } from '@/types';
import { useParams } from 'react-router-dom';
import { ReactComponent } from '@/assets/svg/trash.svg';
import S from '../style';

export const TagList = (props: TagListProps) => {
  const { Item, onClick } = props;
  const { spaceId } = useParams();

  const { deleteTagAction } = useTagDeleteMutation();

  return (
    <>
      <S.TagGroup onClick={onClick}>
        <S.TagTitle>{Item.tagName}</S.TagTitle>
      </S.TagGroup>
      <S.DeleteButton
        onClick={() =>
          deleteTagAction({ tagId: Item.tagId, spaceId: Number(spaceId!) })
        }
      >
        <ReactComponent />
      </S.DeleteButton>
    </>
  );
};
