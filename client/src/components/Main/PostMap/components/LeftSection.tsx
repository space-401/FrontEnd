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
};

const movePage = (page: number) => {
  console.log(page);
};

const LeftSection = (props: LeftSectionPropType) => {
  const { setIsSelect, setState, isSelect, postList, total, page, itemLength } =
    props;
  return (
    <S.Wrapper>
      {postList.map((item) => {
        const {
          postId,
          postTitle,
          placeTitle,
          usersList,
          postUpdatedAt,
          placeTag,
          mainImgUrl,
        } = item;
        return (
          <OnePostMapCard
            key={postId}
            postTitle={postTitle}
            postDescription={getFormatUser(usersList)}
            postPlace={placeTitle}
            postTags={placeTag}
            imgUrl={mainImgUrl}
            createAt={postUpdatedAt}
            onClick={() => {
              setIsSelect(postId);
              setState({ center: item.position, isPanto: false });
            }}
            isSelect={isSelect === item.postId}
          />
        );
      })}
      <Pagination
        movePage={movePage}
        total={total}
        page={page}
        itemLength={itemLength}
      />
    </S.Wrapper>
  );
};

export default LeftSection;
