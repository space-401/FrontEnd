import { S } from '@pages/Landing/style';
import FirstSection from '@components/Landing/FirstSection';
import SecondSection from '@components/Landing/SecondSection';
import ThirdSection from '@components/Landing/ThirdSection';
import FourthSection from '@components/Landing/FourthSection';
import FifthSection from '@components/Landing/FifthSection';

const LandingPage = () => {
  return (
    <S.Wrapper>
      <FirstSection />
      <SecondSection marginTop={171} />
      <ThirdSection marginTop={259} />
      <FourthSection marginTop={323} />
      <FifthSection marginTop={43} />
    </S.Wrapper>
  );
};
export default LandingPage;
