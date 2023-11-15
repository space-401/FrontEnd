import { S } from '@pages/Landing/style';
import FirstSection from '@components/Landing/FirstSection';
import SecondSection from '@components/Landing/SecondSection';
import ThirdSection from '@components/Landing/ThirdSection';
import FourthSection from '@components/Landing/FourthSection';
import FifthSection from '@components/Landing/FifthSection';
import useScript from '@hooks/common/useScript';
import useCss from '@hooks/common/useCss';

const LandingPage = () => {
  const [, scriptError] = useScript('https://unpkg.com/aos@2.3.1/dist/aos.js');
  const [, cssError] = useCss('https://unpkg.com/aos@2.3.1/dist/aos.css');

  if (scriptError) {
    throw Error;
  }
  if (cssError) {
    throw Error;
  }

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
