import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  border: 1px solid white;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
`;

const Footer = styled.footer`
  height: 60vh;
`;

const LoginText = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  line-height: 150%;
  width: 45px;
  height: 24px;
`;

const SubContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div``;

const RightSection = styled.div``;

const S = {
  Wrapper,
  Footer,
  Container,
  LoginText,
  SubContainer,
  LeftSection,
  RightSection,
};

export default S;
