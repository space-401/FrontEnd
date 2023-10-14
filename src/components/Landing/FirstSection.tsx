import L from '@components/Landing/style';
import S from '@layout/HeaderLayout/style';

import { ReactComponent as Logo } from '@assets/svg/headerLogo.svg';
import { ReactComponent as UserIcon } from '@assets/svg/userIcon.svg';
import { ReactComponent as BackGround } from '@assets/svg/defaultImg/img1.svg';

const FirstSection = () => {
  return (
    <L.Wrapper>
      <L.Container>
        <S.HeaderWrapper>
          <S.Container>
            <S.IconBox onClick={() => {}}>
              <Logo />
            </S.IconBox>
            <S.SpaceBox>
              <S.SpaceIconBox></S.SpaceIconBox>
            </S.SpaceBox>
            <S.IconBox>
              <S.IconGroup>
                <UserIcon width={16} height={16} />
                <L.LoginText>로그인</L.LoginText>
              </S.IconGroup>
            </S.IconBox>
          </S.Container>
        </S.HeaderWrapper>
        <BackGround height={596} width={'100%'} />
      </L.Container>
    </L.Wrapper>
  );
};

export default FirstSection;
