import styled from 'styled-components';
import { omitText } from '@styles/common';
import { FlipCardSize } from '@/types/post.type';

const Wrapper = styled.div<{ size: FlipCardSize }>`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  background-size: cover;
  backdrop-filter: blur(2px);
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};

  ${({ size, theme }) =>
    size !== 'big' &&
    `div {
    z-index: ${theme.Z_INDEX['LEVEL-3']} !important;
  }

  .container {
    padding: 24px !important;
  }

  .title {
    font-size: ${theme.TEXT_SIZE['text-28']} !important;
    font-weight: ${theme.FONT_WEIGHT['WEIGHT-500']} !important;
    line-height: 140%;
    margin-top: 8px !important;
  }

  .create-time {
    font-size: ${theme.TEXT_SIZE['text-12']} !important;
    margin-bottom: 16px !important;
  }

  .chip {
    font-size: ${theme.TEXT_SIZE['text-14']} !important;
    font-weight: ${theme.FONT_WEIGHT['WEIGHT-400']} !important;
    height: 24px !important;
  }

  .place-span {
    font-size: ${theme.TEXT_SIZE['text-18']} !important;
    font-weight: ${theme.FONT_WEIGHT['WEIGHT-400']} !important;
  }

  .info-bottom {
    line-height: ${theme.TEXT_SIZE['text-28']} !important;

    span {
      overflow: hidden;
      text-overflow: ellipsis !important;
      max-width: 98px !important;
    }
  }`}
`;

const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-size: cover;
  backdrop-filter: blur(2px);
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']} !important;
  background: black;
  opacity: 0.5;
`;

const PostTitle = styled.div`
  margin-top: 16px;

  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-28']};
  font-style: normal;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
  line-height: 130%;
  white-space: pre-line;
`;

const PlaceCreateAt = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 130%;
  margin: 16px 0 24px;
`;

const PlaceTitle = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  align-items: center;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-style: normal;
  gap: 4.2px;

  span {
    max-width: 170px;
    text-wrap: none;
    ${omitText}
  }
`;

const ChipBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  overflow: auto;

  .chip {
    color: ${({ theme }) => theme.COLOR.white};
    border: 1px solid ${({ theme }) => theme.COLOR.white};
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
    line-height: 130%;
    padding: 10px;

    span {
      padding: 0;
    }
  }
`;

const InfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: ${({ theme }) => theme.TEXT_SIZE['text-20']};
`;

const S = {
  Wrapper,
  PostTitle,
  PlaceCreateAt,
  PlaceTitle,
  ChipBox,
  InfoBottom,
  Shadow,
  Container,
};

export default S;
