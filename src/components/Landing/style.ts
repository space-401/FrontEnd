import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MarginBox = styled.div<{ marginTop: number }>`
  margin-top: ${({ marginTop }) => marginTop}px;
`;

const Container = styled.div`
  width: 1200px;
`;

const LoginText = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  line-height: 150%;
  width: 45px;
  height: 24px;
`;

const SubContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div<{ top: number; bottom: number }>`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  padding-top: ${({ top }) => top}px;
  padding-bottom: ${({ bottom }) => bottom}px;
`;

const RightSection = styled.div<{ top: number; bottom: number }>`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  padding-top: ${({ top }) => top}px;
  padding-bottom: ${({ bottom }) => bottom}px;
`;

const RandingButton = styled.button<{ bottom: number }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom}px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.COLOR.skyblue};
  display: inline-flex;
  padding: 10px 16px 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLOR.skyblue};
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`;

const BackGround = styled.div``;

const ImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SvgBackGround = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  transform: translate(50%, -50%);
  position: absolute;
  filter: blur(9.5px);
  right: -53px;
  top: 75%;
`;
const S = {
  Wrapper,
  MarginBox,
  Container,
  LoginText,
  SubContainer,
  LeftSection,
  RightSection,
  BackGround,
  RandingButton,
  ImgBox,
  SvgBackGround,
};

export default S;
