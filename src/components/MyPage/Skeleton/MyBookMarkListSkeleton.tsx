import { OneTableListSkeleton } from '@/components/MyPage';
import { A, B } from '../style';

export const MyBookMarkListSkeleton = () => {
  return (
    <>
      <A.Title>북마크</A.Title>
      <A.Description margin_top={16}>
        회원님이 저장한 게시글입니다.
      </A.Description>
      <A.Bar margin_top={16} />
      <B.BTable>
        <thead>
          <tr>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          <OneTableListSkeleton iconBox={false} />
          <OneTableListSkeleton iconBox={false} />
          <OneTableListSkeleton iconBox={false} />
          <OneTableListSkeleton iconBox={false} />
          <OneTableListSkeleton iconBox={false} />
          <OneTableListSkeleton iconBox={false} />
          <OneTableListSkeleton iconBox={false} />
        </tbody>
      </B.BTable>
      <A.PaginationBox></A.PaginationBox>
    </>
  );
};
