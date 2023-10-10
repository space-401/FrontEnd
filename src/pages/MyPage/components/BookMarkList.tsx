import { A } from '@pages/MyPage/components/style';
import { useState } from 'react';
import Pagination from '@components/common/Pagination';
import { useBookMarkListQuery } from '@hooks/api/user/useBookMarkListQuery';
import { useDetailModalOpen } from '@hooks/common/useDetailModalOpen';
import { getFormatDate } from '@utils/formatter';

const BookMarkList = () => {
  const [curPage, setCurPage] = useState(0);

  const { BookMarkListData } = useBookMarkListQuery(curPage);

  const { total, page, bookMarkList, itemLength } = BookMarkListData!;

  const detailModalOpen = useDetailModalOpen();

  const movePage = (page: number) => {
    setCurPage(page);
  };

  return (
    <>
      <A.Title>
        북마크 <A.TotalCount>{`(${total})`}</A.TotalCount>
      </A.Title>
      <A.Description margin_top={16}>
        회원님이 저장한 게시글입니다.
      </A.Description>
      <A.Bar margin_top={16} />
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

export default BookMarkList;
