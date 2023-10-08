import FlipCard from '@components/common/FlipCard/FlipCard';
import { B } from '@pages/MyPage/components/style';
import { useState } from 'react';
import Pagination from '@components/common/Pagination';
import { useMyPostListQuery } from '@hooks/api/user/useMyPostListQuery';
import { useDetailModalOpen } from '@hooks/common/useDetailModalOpen';

const MyPostList = () => {
  const [curPage, setCurPage] = useState<number>(0);

  const { MyPostListData } = useMyPostListQuery(curPage);

  const { myPostList, total, page, itemLength } = MyPostListData!;

  const detailModalOpen = useDetailModalOpen();

  const movePage = (number: number) => {
    setCurPage(number);
  };

  return (
    <>
      <B.FlipCardList>
        {myPostList.map((item) => {
          const { postId, imgUrl } = item;
          return (
            <FlipCard
              size={'small'}
              onClick={() => detailModalOpen(postId)}
              key={postId}
              imgUrl={imgUrl[0]}
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
