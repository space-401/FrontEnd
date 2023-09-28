import { A, B } from '@pages/MyPage/MyBody/components/style';
import React, { useState } from 'react';
import FlipCard from '@components/common/FlipCard/FlipCard';
import Pagination from '@components/common/Pagination';
import { bookMarkListMock } from '@mocks/data/MyPage/MyPageMock';

const BookMarkList = () => {
  const { bookMarkList, total, page, ItemLength } = bookMarkListMock;
  const [curPage, setCurPage] = useState(page);
  const modalOpen = () => {};

  const movePage = (number: number) => {
    setCurPage(number);
  };

  return (
    <B.BWrapper>
      <A.Title>북마크</A.Title>
      <A.Description margin_top={16}>
        {'회원님이 저장한 게시글입니다.'}
      </A.Description>
      <A.Bar margin_top={16} />
      <B.FlipCardList>
        {bookMarkList.map((item) => (
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
    </B.BWrapper>
  );
};

export default BookMarkList;