import { Modal, Box } from '@mui/material';
import { S } from './style';
import React, { useEffect, useState } from 'react';
import InputBox from '@/components/common/InputBox';
import { ReactComponent as DeleteIcon } from '@/assets/svg/smallDeleteIcon.svg';
import { TagType } from '@/types/post.type';
import TagList from './TagList';
import { isUserType } from '@utils/typeGuard';
import { useTagMutation } from '@/hooks/api/space/useTagMutation';
import { useTagDeleteMutation } from '@/hooks/api/space/useTagDeleteMutation';
import { useSpaceTagQuery } from '@/hooks/api/space/useSpaceTagQuery';

type tagEditProps = {
  isOpen: boolean;
  spaceId: string;
  modalClose: () => void;
};

const TagEditModal = ({ isOpen, spaceId, modalClose }: tagEditProps) => {
  const [tagList, setTagList] = useState<TagType[]>([]);
  const [tagInput, setTagInput] = useState<string>();

  const { postTagAction, isError, data } = useTagMutation();

  console.log('isError', isError, 'data', data);

  const { deleteTagAction } = useTagDeleteMutation();
  const { spaceTag } = useSpaceTagQuery(spaceId);

  useEffect(() => {
    spaceTag && setTagList(spaceTag);
  }, [spaceTag]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTagInput(value);
  };

  //태그 생성
  const onSubmitNewTag = async (e: any) => {
    if (e.keyCode == 13) {
      onAddTag();
      setTagInput('');
    }
  };

  const onAddTag = async () => {
    const res = await postTagAction({ tagName: tagInput!, spaceId });
    await console.log('res', res);
  };

  const onDeleteTag = ({
    spaceId,
    tagId,
  }: {
    spaceId: string;
    tagId: number;
  }) => {
    deleteTagAction({ spaceId, tagId });
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
      <Box tabIndex={-1} onKeyDown={onSubmitNewTag}>
        {tagList.length > 0 && (
          <S.Wrapper>
            <S.Header>
              <S.Text>스페이스 고정 태그를 지정해주세요.</S.Text>
              <DeleteIcon onClick={modalClose} />
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
                  <S.List
                    select={false}
                    grid={isUserType(item)}
                    key={item.tagId}
                  >
                    <TagList
                      onDeleteTag={() => {
                        onDeleteTag({ spaceId, tagId: item.tagId });
                      }}
                      item={item}
                    />
                  </S.List>
                ))}
              </S.FlexContainer>
            </S.Body>
          </S.Wrapper>
        )}
      </Box>
    </Modal>
  );
};
export default TagEditModal;
