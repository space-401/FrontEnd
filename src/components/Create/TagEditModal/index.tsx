import { Modal, Box } from '@mui/material';
import { S } from './style';
import { useEffect, useState } from 'react';
import InputBox from '@/components/common/InputBox';
import { ReactComponent as DeleteIcon } from '@/assets/svg/smallDeleteIcon.svg';
import { TagType } from '@/types/post.type';
import TagList from './TagList';
import { isUserType } from '@utils/typeGuard';

type tagEditProps = {
  isOpen: boolean;
  currentTagList: TagType[] | undefined;
};
const TagEditModal = ({ isOpen, currentTagList }: tagEditProps) => {
  const [tagList, setTagList] = useState<TagType[]>([]);
  const [tagInput, setTagInput] = useState<string>();

  useEffect(() => {
    currentTagList && setTagList(currentTagList);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTagInput(value);
  };

  const onDeleteTag = () => {
    return <div></div>;
  };
  return (
    <Modal
      open={isOpen}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
      }}
    >
      <Box tabIndex={-1}>
        <S.Wrapper>
          <S.Header>
            <S.Text>스페이스 고정 태그를 지정해주세요.</S.Text>
            <DeleteIcon />
          </S.Header>
          <S.Body>
            <InputBox
              onChange={onChange}
              height={53}
              width={596}
              type="text"
              readonly={false}
              name="tagInput"
              value={tagInput!}
            />

            <S.TagNum>
              <p>스페이스 태그</p>
              <span>1</span>
            </S.TagNum>
            <S.FlexContainer>
              {tagList.map((item) => (
                <S.List select={false} grid={isUserType(item)} key={item.tagId}>
                  <TagList onDeleteTag={onDeleteTag} item={item} />
                </S.List>
              ))}
            </S.FlexContainer>
          </S.Body>
        </S.Wrapper>
      </Box>
    </Modal>
  );
};
export default TagEditModal;
