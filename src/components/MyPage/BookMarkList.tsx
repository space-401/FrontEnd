import { useBookMarkListQuery, useDetailModalOpen } from '@/hooks';
import { getFormatDate } from '@/utils';
import { useEffect, useState } from 'react';
import { Pagination } from '@/components/common';
import { A, CL } from './style';

export const BookMarkList = () => {
  const [curPage, setCurPage] = useState(1);
  const { BookMarkListData, refetch } = useBookMarkListQuery(curPage);

  const { total, page, bookMarkList, itemLength } = BookMarkListData!;

  const detailModalOpen = useDetailModalOpen();

  const movePage = (page: number) => {
    setCurPage(page);
  };

  useEffect(() => {
    refetch();
  }, [curPage, refetch]);

  return (
    <>
      <A.Title>
        북마크 <A.TotalCount>{`(${total})`}</A.TotalCount>
      </A.Title>
      <A.Description margin_top={16}>
        회원님이 저장한 게시글입니다.
      </A.Description>
      <A.Bar margin_top={16} />
      {bookMarkList.length ? (
        <A.Table>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {bookMarkList.map((v) => {
              const {
                postWriterName,
                postCreatedAt,
                postId,
                postTitle,
                postCommentCount,
              } = v;
              return (
                <tr key={postId + postCommentCount + postCreatedAt}>
                  <td onClick={() => detailModalOpen(postId)}>{postTitle}</td>
                  <td>{postWriterName}</td>
                  <td>{getFormatDate(postCreatedAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </A.Table>
      ) : (
        <CL.EmptyList>북마크를 누른 게시물이 없습니다.</CL.EmptyList>
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
