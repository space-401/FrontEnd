import S from '@components/common/ImageEditModal/style';

type ImgCountType = {
  currentNum: number;
  maxNum: number;
};

const ImgCounter = ({ currentNum, maxNum }: ImgCountType) => {
  return (
    <S.CountWrapper>
      <span>{currentNum}</span>
      <span>/</span>
      <span>{maxNum}</span>
    </S.CountWrapper>
  );
};

export default ImgCounter;
