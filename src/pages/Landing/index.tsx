import { useCss, useScript } from '@/hooks';
import {
  FifthSection,
  FirstSection,
  FourthSection,
  SecondSection,
  ThirdSection,
} from '@/components/Landing';
import { S } from './style';

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
