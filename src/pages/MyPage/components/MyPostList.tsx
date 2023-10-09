import { A, B } from '@pages/MyPage/components/style';
import { useState } from 'react';
import Pagination from '@components/common/Pagination';
import { useMyPostListQuery } from '@hooks/api/user/useMyPostListQuery';
import OneMyPostList from '@pages/MyPage/components/OneMyPostList';
import { v4 } from 'uuid';

const MyPostList = () => {
  const [curPage, setCurPage] = useState<number>(0);

  const { MyPostListData } = useMyPostListQuery(curPage);

  const { myPostList, total, page, itemLength } = MyPostListData!;

  const movePage = (number: number) => {
    setCurPage(number);
  };

  return (
    <>
      <B.BTable>
        <tr>
          <th>제목</th>
          <th>작성일</th>
          <th>함께한 친구</th>
          <th></th>
        </tr>
        {myPostList.map((v) => (
          <OneMyPostList key={v4()} items={v} />
        ))}
      </B.BTable>
      <A.PaginationBox>
        <Pagination
          movePage={movePage}
          page={page}
          total={total}
          itemLength={itemLength}
        />
      </A.PaginationBox>
    </>
  );
};

export default MyPostList;
