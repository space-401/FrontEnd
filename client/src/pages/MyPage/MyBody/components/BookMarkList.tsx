import { A, B } from '@pages/MyPage/MyBody/components/style';
import { useState } from 'react';
import FlipCard from '@components/common/FlipCard/FlipCard';
import Pagination from '@components/common/Pagination';
import { useBookMarkListQuery } from '@hooks/api/user/useBookMarkListQuery';

const BookMarkList = () => {
  const [curPage, setCurPage] = useState(0);

  const { BookMarkListData } = useBookMarkListQuery(curPage);

  const { total, page, bookMarkList, itemLength } = BookMarkListData!;

  const modalOpen = () => {};

  const movePage = (page: number) => {
    setCurPage(page);
  };

  return (
    <B.BWrapper>
      <A.Title>북마크</A.Title>
      <A.Description margin_top={16}>
        {'회원님이 저장한 게시글입니다.'}
      </A.Description>
      <A.Bar margin_top={16} />
      <B.FlipCardList>
        {bookMarkList.map((item) => {
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
    </B.BWrapper>
  );
};

export default BookMarkList;
