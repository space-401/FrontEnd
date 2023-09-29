import FlipCard from '@components/common/FlipCard/FlipCard';
import { B } from '@pages/MyPage/MyBody/components/style';
import { useState } from 'react';
import Pagination from '@components/common/Pagination';
import { useMyPostListQuery } from '@hooks/api/user/useMyPostListQuery';

const MyPostList = () => {
  const [curPage, setCurPage] = useState<number>(0);

  const { MyPostListData } = useMyPostListQuery(curPage);

  const { myPostList, total, page, itemLength } = MyPostListData!;

  const modalOpen = () => {};

  const movePage = (number: number) => {
    setCurPage(number);
  };

  return (
    <>
      <B.FlipCardList>
        {myPostList.map((item) => {
          const { postId, mainImgUrl } = item;
          return (
            <FlipCard
              size={'small'}
              onClick={modalOpen}
              key={postId}
              imgUrl={mainImgUrl}
              item={item}
            />
          );
        })}
      </B.FlipCardList>
      <Pagination
        movePage={movePage}
        page={page}
        total={total}
        itemLength={itemLength}
      />
    </>
  );
};

export default MyPostList;
