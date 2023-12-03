import {
  useSpaceTagQuery,
  useTagDeleteMutation,
  useTagMutation,
} from '@/hooks';
import { TagType } from '@/types';
import { isUserType } from '@/utils';
import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ReactComponent as DeleteIcon } from '@/assets/svg/smallDeleteIcon.svg';
import { TagList } from '@/components/Create';
import { InputBox } from '@/components/common';
import { S } from './style';

type tagEditProps = {
  isOpen: boolean;
  spaceId: string | null;
  modalOpen: () => void;
  setCreateTags: React.Dispatch<React.SetStateAction<TagType[]>>;
  createTags: TagType[];
  setIsTagModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TagEditModal = ({
  isOpen,
  spaceId,
  setIsTagModalOpen,
  setCreateTags,
  createTags,
}: tagEditProps) => {
  const [tagList, setTagList] = useState<TagType[]>([]);
  const [tagInput, setTagInput] = useState<string>();
  const { postTagAction } = useTagMutation();
  const { deleteTagAction } = useTagDeleteMutation();
  const { tags } = useSpaceTagQuery(spaceId)! || [];

  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (spaceId && tags) {
      setTagList(tags);
    } else {
      setTagList(createTags);
    }
  }, [tags]);

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
    /*스페이스 생성일 때 */
    if (!spaceId && tagInput) {
      const newTag = { tagId: Math.random() * 1000, tagName: tagInput };
      setTagList((prev) => {
        return [...prev, newTag];
      });
      setCreateTags((prev) => {
        return [...prev, newTag];
      });
    }
    /*스페이스 수정일 때 */
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
    /*스페이스 생성일 때 */
    if (!spaceId) {
      const newTagList = tagList.filter((tag) => tag.tagId !== tagId);
      setTagList(newTagList);
      setCreateTags(newTagList);
    } else {
      /*스페이스 수정일 때 */
      deleteTagAction({ spaceId, tagId });
    }
  };

  const onCloseModal = () => {
    setIsTagModalOpen(false);
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
              <DeleteIcon onClick={onCloseModal} />
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
