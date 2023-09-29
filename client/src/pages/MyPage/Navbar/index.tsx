import { Dispatch, SetStateAction } from 'react';
import S from '@pages/MyPage/Navbar/style';
import { ReactComponent as AccountSvg } from '@assets/svg/mainSetting/user.svg';
import { ReactComponent as BookMarkSvg } from '@assets/svg/bookmark/empty.svg';
import { ReactComponent as PageSvg } from '@assets/svg/page.svg';

type MyPageNavProps = {
  selectNumber: number;
  setSelectNumber: Dispatch<SetStateAction<number>>;
};

const MyPageNav = (props: MyPageNavProps) => {
  const { setSelectNumber, selectNumber } = props;

  return (
    <S.Wrapper>
      <S.NavGroup>
        <S.NavButton
          onClick={() => setSelectNumber(0)}
          select={selectNumber === 0}
        >
          <AccountSvg width={24} height={24} />
          <S.NavSpan>계정 관리</S.NavSpan>
        </S.NavButton>
        <S.NavButton
          onClick={() => setSelectNumber(1)}
          select={selectNumber === 1}
        >
          <BookMarkSvg width={24} height={24} />
          <S.NavSpan>북마크</S.NavSpan>
        </S.NavButton>
        <S.NavButton
          onClick={() => setSelectNumber(2)}
          select={selectNumber === 2}
        >
          <PageSvg width={24} height={24} />
          <S.NavSpan>내가 쓴 글 및 댓글</S.NavSpan>
        </S.NavButton>
      </S.NavGroup>
    </S.Wrapper>
  );
};

export default MyPageNav;
