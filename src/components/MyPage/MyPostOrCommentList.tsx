import { A, M } from '@components/MyPage/style';
import { Suspense, useState } from 'react';
import MyPostListSkeleton from '@components/MyPage/Skeleton/MyPostList.skeleton';
import MyCommentListSkeleton from '@components/MyPage/Skeleton/MyCommentList.skeleton';
import MyPostList from '@components/MyPage/MyPostList';
import MyCommentList from '@components/MyPage/MyCommentList';

const MyPostOrCommentList = () => {
  const [isMyPost, setIsMyPost] = useState(true);

  return (
    <>
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
          <Suspense fallback={<MyPostListSkeleton />}>
            <MyPostList />
          </Suspense>
        ) : (
          <Suspense fallback={<MyCommentListSkeleton />}>
            <MyCommentList />
          </Suspense>
        )}
      </>
    </>
  );
};

export default MyPostOrCommentList;
