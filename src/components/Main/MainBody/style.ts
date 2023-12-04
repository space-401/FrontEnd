import { FLIP_CARD } from '@/constants';
import { flexCenter } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px 24px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  border-radius: 20px;
  min-height: 800px;
  background-color: ${({ theme }) => theme.COLOR.black};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-top: 65px;
  }
`;

const UndefinedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    width: ${FLIP_CARD.SIZE.BIG}px;
    aspect-ratio: 1/1;
    border-radius: ${FLIP_CARD.BORDER_RADIUS.BIG}px;
    border: 1px solid #4e4f55;
    margin-top: 102px;
  }
`;

const UndefinedPostText = styled.div`
  margin-top: 32px;
  color: ${({ theme }) => theme.COLOR.white};
  text-align: center;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: normal;
`;

const UndefinedShareText = styled.div`
  margin-top: 30px;
  cursor: pointer;

  color: ${({ theme }) => theme.COLOR.orange};
  text-align: center;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
`;

const PostList = styled.div`
  margin: 16px 0 24px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media ${({ theme }) => theme.DEVICE.tablet} {
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  @media ${({ theme }) => theme.DEVICE.tablet || theme.DEVICE.mobile} {
    ${flexCenter};
    flex-wrap: wrap;
  }
`;

const PaginationBox = styled.div`
  width: 300px;
  margin: 0 auto 16px;
`;

const DefaultImg = styled.img`
  margin-top: 150px;
  border-radius: ${FLIP_CARD.BORDER_RADIUS.BIG}px;
  overflow: hidden;
  width: 282px;
  aspect-ratio: 1/1;
  position: relative;
`;

export const S = {
  Wrapper,
  UndefinedList,
  UndefinedPostText,
  UndefinedShareText,
  PostList,
  FilterGroup,
  PaginationBox,
  DefaultImg,
};
