import S from '@pages/MyPage/style';
import { ReactComponent as AccountSvg } from '@assets/svg/mainSetting/user.svg';
import { ReactComponent as BookMarkSvg } from '@assets/svg/bookmark/empty.svg';
import { ReactComponent as FolderSvg } from '@assets/svg/folder.svg';
import { Suspense, useState } from 'react';
import AccountManagement from '@components/MyPage/AccountManagement';
import MyPostOrCommentList from '@components/MyPage/MyPostOrCommentList';
import BookMarkListSkeleton from '@components/MyPage/Skeleton/BookMarkList.skeleton';
import BookMarkList from '@components/MyPage/BookMarkList';
import AccountManagementSkeleton from '@components/MyPage/Skeleton/AccountManagement.skeleton';

const MyPageLayOut = () => {
  const [state, setState] = useState(0);
  return (
    <S.MyPageWrapper>
      <S.Wrapper>
        <S.NavGroup>
          <S.NavButton select={state === 0} onClick={() => setState(0)}>
            <AccountSvg width={16} height={16} />
            <S.NavSpan>계정 관리</S.NavSpan>
          </S.NavButton>
          <S.NavButton select={state === 1} onClick={() => setState(1)}>
            <BookMarkSvg width={16} height={16} />
            <S.NavSpan>북마크</S.NavSpan>
          </S.NavButton>
          <S.NavButton select={state === 2} onClick={() => setState(2)}>
            <FolderSvg width={16} height={16} />
            <S.NavSpan>나의 활동</S.NavSpan>
          </S.NavButton>
        </S.NavGroup>
      </S.Wrapper>
      <S.Container>
        {state === 0 && (
          <Suspense fallback={<AccountManagementSkeleton />}>
            <AccountManagement />
          </Suspense>
        )}
        {state === 1 && (
          <Suspense fallback={<BookMarkListSkeleton />}>
            <BookMarkList />
          </Suspense>
        )}
        {state === 2 && <MyPostOrCommentList />}
      </S.Container>
    </S.MyPageWrapper>
  );
};

export default MyPageLayOut;
