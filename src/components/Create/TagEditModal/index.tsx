import { Box, Modal } from '@mui/material';
import { S } from './style';
import React, { useEffect, useState } from 'react';
import InputBox from '@/components/common/InputBox';
import { ReactComponent as DeleteIcon } from '@/assets/svg/smallDeleteIcon.svg';
import TagList from './TagList';
import { isUserType } from '@utils/typeGuard';
import { useTagMutation } from '@/hooks/api/space/useSpaceTagCreateMutation';
import { useTagDeleteMutation } from '@/hooks/api/space/useSpaceTagDeleteMutation';
import { useSpaceTagQuery } from '@/hooks/api/space/useSpaceTagQuery';
import { tagMock } from '@mocks/data/tag';
import { TagType } from '@type/post.type';

type tagEditProps = {
  isOpen: boolean;
  spaceId: string | null;
  modalClose: () => void;
  modalOpen: () => void;
};

const TagEditModal = ({ isOpen, spaceId, modalClose }: tagEditProps) => {
  const [tagList, setTagList] = useState<TagType[]>([]);
  const [tagInput, setTagInput] = useState<string>();
  const { postTagAction } = useTagMutation();
  const { deleteTagAction } = useTagDeleteMutation();
  const { spaceTag } = useSpaceTagQuery(spaceId);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (spaceTag) {
      setTagList(spaceTag);
    } else {
      setTagList(tagMock);
    }
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
    setErrorMsg('');
    if (tagList.length >= 10) {
      return setErrorMsg('태그는 20개 이상 추가하실 수 없습니다.');
    }
    if (!spaceId && tagInput) {
      const newTag = { tagId: Math.random() * 1000, tagTitle: tagInput };
      return setTagList((prev: TagType[]) => {
        return [...prev, newTag];
      });
    }
    if (spaceId && tagInput) {
      return postTagAction({
        tagName: tagInput!,
        spaceId: Number(spaceId),
      });
    }
  };

  const onDeleteTag = ({
    spaceId,
    tagId,
  }: {
    spaceId: number;
    tagId: number;
  }) => {
    if (!spaceId) {
      const newTagList = tagList.filter((tag) => tag.tagId !== tagId);
      setTagList(newTagList);
    } else {
      deleteTagAction({ spaceId, tagId });
    }
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
        {
          <S.Wrapper>
            <S.Header>
              <S.Text>스페이스 고정 태그를 지정해주세요.</S.Text>
              <DeleteIcon onClick={modalClose} />
            </S.Header>
            <S.Body>
              <InputBox
                onChange={onChange}
                height={53}
                type="text"
                readonly={false}
                name="tagInput"
                value={tagInput!}
              />
              <S.TagNum>
                <p>스페이스 태그</p>
                <span>{tagList.length}</span>
              </S.TagNum>
              <S.FlexContainer>
                {!tagList.length && (
                  <S.List select={false} grid={false} key={1}>
                    <div>태그를 추가해주세요</div>
                  </S.List>
                )}
                {errorMsg && (
                  <S.ErrorMsg>
                    태그는 최대 20개까지 추가가 가능합니다.
                  </S.ErrorMsg>
                )}
                {tagList.map((item) => (
                  <S.List
                    select={false}
                    grid={isUserType(item)}
                    key={item.tagId}
                  >
                    <TagList
                      onDeleteTag={() => {
                        onDeleteTag({
                          spaceId: Number(spaceId),
                          tagId: item.tagId,
                        });
                      }}
                      item={item}
                    />
                  </S.List>
                ))}
              </S.FlexContainer>
            </S.Body>
          </S.Wrapper>
        }
      </Box>
    </Modal>
  );
};
export default TagEditModal;
