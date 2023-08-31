import Header from './Header/Header';
import { ReactNode } from 'react';

//헤더 레이아웃
const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default HeaderLayout;
