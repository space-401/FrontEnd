import { S } from '@pages/Landing/style';
import FirstSection from '@components/Landing/FirstSection';
import SecondSection from '@components/Landing/SecondSection';
import ThirdSection from '@components/Landing/ThirdSection';
import FourthSection from '@components/Landing/FourthSection';
import Footer from '@components/Landing/Footer';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  const onScrollUp = () => {
    setIndex((prev) => (prev >= 0 ? prev : prev + 1));
  };

  const onScrollDown = () => {
    setIndex((prev) => (prev <= -4 ? prev : prev - 1));
  };

  useEffect(() => {
    window.addEventListener(
      'wheel',
      _.throttle((e) => {
        if (e.deltaY < 0) {
          onScrollUp();
        } else {
          onScrollDown();
        }
      }, 500)
    );
    return () => {
      window.removeEventListener('wheel', () => null);
    };
  }, []);

  console.log(index);

  return (
    <S.Wrapper>
      <S.Container index={index}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
export default LandingPage;
