import { SpacePostType } from '@/types';
import { getFormatUser } from '@/utils';
import { Dispatch, SetStateAction } from 'react';
import { OnePostMapCard } from '@/components/Main';
import { Pagination } from '@/components/common';
import { S } from './style';

type LeftSectionPropType = {
  postList: SpacePostType[];
  isSelect: number;
  setIsSelect: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{
      center: { lat: number; lng: number };
      isPanto: boolean;
    }>
  >;
  page: number;
  total: number;
  itemLength: number;
  movePage: (pageNumber: number | undefined) => void;
};

export const LeftSection = (props: LeftSectionPropType) => {
  const {
    setIsSelect,
    setState,
    movePage,
    isSelect,
    postList,
    total,
    page,
    itemLength,
  } = props;

  return (
    <S.Wrapper>
      {postList.length ? (
        postList.map((item) => {
          const {
            postId,
            postTitle,
            placeTitle,
            usersList,
            postUpdatedAt,
            selectedTags,
            imgUrl,
          } = item;
          return (
            <OnePostMapCard
              key={postId}
              postTitle={postTitle}
              postDescription={getFormatUser(usersList)}
              postPlace={placeTitle}
              postTags={selectedTags}
              imgUrl={imgUrl[0]}
              createAt={postUpdatedAt}
              onClick={() => {
                setIsSelect(postId);
                setState({ center: item.position, isPanto: false });
              }}
              isSelect={isSelect === item.postId}
            />
          );
        })
      ) : (
        <S.EmptyList>작성된 포스트가 없습니다.</S.EmptyList>
      )}
      <S.PaginationBox>
        <S.PaginationInner>
          <Pagination
            movePage={movePage}
            total={total}
            page={page}
            itemLength={itemLength}
          />
        </S.PaginationInner>
      </S.PaginationBox>
    </S.Wrapper>
  );
};
