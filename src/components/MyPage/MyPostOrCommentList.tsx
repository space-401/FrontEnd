import { Suspense, useState } from 'react';
import {
  MyBookMarkListSkeleton,
  MyCommentList,
  MyCommentListSkeleton,
  MyPostList,
} from '@/components/MyPage';
import { A, M } from './style';

export const MyPostOrCommentList = () => {
  const [isMyPost, setIsMyPost] = useState(true);

  return (
    <M.FlexWrapper>
      <M.HeaderButtonGroup>
        <M.MButton onClick={() => setIsMyPost(true)} select={isMyPost}>
          내가 쓴 글
        </M.MButton>
        <M.MButton onClick={() => setIsMyPost(false)} select={!isMyPost}>
          내가 쓴 댓글
        </M.MButton>
      </M.HeaderButtonGroup>
      <A.Bar margin_top={41} />
      <>
        {isMyPost ? (
          <Suspense fallback={<MyBookMarkListSkeleton />}>
            <MyPostList />
          </Suspense>
        ) : (
          <Suspense fallback={<MyCommentListSkeleton />}>
            <MyCommentList />
          </Suspense>
        )}
      </>
    </M.FlexWrapper>
  );
};
