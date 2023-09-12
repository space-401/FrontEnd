import React from 'react';
import S from '@pages/Detail/style';

const DetailPage = React.forwardRef(
  (_, forwardRef: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <>
        <S.Wrapper ref={forwardRef}>Text in a modal</S.Wrapper>
      </>
    );
  }
);

export default DetailPage;
