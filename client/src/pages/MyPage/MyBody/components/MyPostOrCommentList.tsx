import { A, M } from '@pages/MyPage/MyBody/components/style';
import { useState } from 'react';
import MyPostList from '@pages/MyPage/MyBody/components/MyPostList';
import MyCommentList from '@pages/MyPage/MyBody/components/MyCommentList';

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
      <A.Bar margin_top={55} />
      <>{isMyPost ? <MyPostList /> : <MyCommentList />}</>
    </>
  );
};

export default MyPostOrCommentList;
