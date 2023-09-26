import FlipCard from '@components/common/FlipCard/FlipCard';
import { B } from '@pages/MyPage/MyBody/components/style';
import React, { useState } from 'react';
import { myPostListMock } from '@mocks/data/MyPage/MyPageMock';
import Pagination from '@components/common/Pagination';

const MyPostList = () => {
  const { myPostList, total, page, ItemLength } = myPostListMock;

  const [curPage, setCurPage] = useState(page);
  const modalOpen = () => {};

  const movePage = (number: number) => {
    setCurPage(number);
  };

  return (
    <>
      <B.FlipCardList>
        {myPostList.map((item) => (
          <FlipCard
            size={'small'}
            onClick={modalOpen}
            key={item.post_id}
            img_url={item.main_img_url}
            item={item}
          />
        ))}
      </B.FlipCardList>
      <Pagination
        movePage={movePage}
        page={curPage}
        total={total}
        item_length={ItemLength}
      />
    </>
  );
};

export default MyPostList;
