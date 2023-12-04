import { useMyPostListQuery } from '@/hooks';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { OneMyPostList } from '@/components/MyPage';
import { Pagination } from '@/components/common';
import { A, B, CL } from './style';

export const MyPostList = () => {
  const [curPage, setCurPage] = useState<number>(1);

  const { MyPostListData, refetch } = useMyPostListQuery(curPage);

  const { myPostList, total, page, itemLength } = MyPostListData!;

  const movePage = (number: number) => {
    setCurPage(number);
  };

  useEffect(() => {
    refetch();
  }, [curPage, refetch]);

  return (
    <>
      {myPostList.length ? (
        <B.BTable>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성일</th>
              <th>함께한 친구</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myPostList.map((v) => (
              <OneMyPostList key={v4()} items={v} />
            ))}
          </tbody>
        </B.BTable>
      ) : (
        <CL.EmptyList>작성된 포스트가 없습니다.</CL.EmptyList>
      )}
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
