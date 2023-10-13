import { S } from '@components/Main/PostMap/components/style';
import OnePostMapCard from '@components/Main/PostMap/components/One-PostMapCard';
import { SpacePostType } from '@type/space.type';
import { Dispatch, SetStateAction } from 'react';
import { getFormatUser } from '@utils/formatter';
import Pagination from '@components/common/Pagination';

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

const LeftSection = (props: LeftSectionPropType) => {
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
      {postList.map((item) => {
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
      })}
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

export default LeftSection;
