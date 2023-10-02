import { ReactComponent as BackIcon } from '@/assets/svg/backIcon.svg';
import { Outlet } from 'react-router-dom';
import S from '@/layout/BackLayout/style';
import { useNavigate } from 'react-router-dom';

const BackLayout = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <BackIcon
          onClick={() => {
            navigate(-1);
          }}
        />
      </S.IconWrapper>
      <Outlet />
    </S.Wrapper>
  );
};

export default BackLayout;
