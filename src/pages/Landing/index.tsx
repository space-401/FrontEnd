import { S } from '@pages/Landing/style';
import FirstSection from '@components/Landing/FirstSection';
import SecondSection from '@components/Landing/SecondSection';
import ThirdSection from '@components/Landing/ThirdSection';
import FourthSection from '@components/Landing/FourthSection';
import Footer from '@components/Landing/Footer';
const LandingPage = () => {
  return (
    <S.Wrapper>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </S.Wrapper>
  );
};
export default LandingPage;
