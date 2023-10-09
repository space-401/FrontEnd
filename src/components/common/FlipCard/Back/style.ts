import styled from 'styled-components';
import { omitText } from '@styles/common';
import { FlipCardSize } from '@/components/common/FlipCard/FlipCard';

const Wrapper = styled.div<{ size: FlipCardSize }>`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: ${({ size }) => (size == 'medium' ? 20 : 5)}px;
  background-size: cover;
  backdrop-filter: blur(2px);
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};
`;

const Container = styled.div<{ info: 'space' | 'post' }>`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  width: 100%;
  height: 100%;
  padding: 28px 15px 16px;
  display: flex;
  flex-direction: column;
  align-items: ${({ info }) => (info === 'space' ? 'center' : 'none')};
  gap: ${({ info }) => (info === 'space' ? '20px' : 'none')};
  justify-content: ${({ info }) =>
    info === 'space' ? 'center' : 'space-between'};
  border-radius: 5px;
  background-size: cover;
  backdrop-filter: blur(2px);
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']} !important;
  background: black;
  opacity: 0.5;
`;

const PostTitle = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  width: 100%;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
  line-height: 130%;
  white-space: pre-line;
`;

const PlaceCreateAt = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 130%;
  margin: 5px 0 15px;
`;

const PlaceTitle = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  align-items: center;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  font-style: normal;
  gap: 4.2px;

  span {
    max-width: 107px;
    flex-wrap: nowrap;
    ${omitText};
  }
`;

const ChipBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;

  max-height: 60px;
  overflow: hidden;

  .chip {
    color: ${({ theme }) => theme.COLOR.white};
    border: 1px solid ${({ theme }) => theme.COLOR.white};
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
    padding: 4px 12px;
    height: 26px;

    span {
      padding: 0;
    }
  }
`;

const InfoBottom = styled.div<{ info: 'space' | 'post' }>`
  display: flex;
  align-items: center;
  justify-content: ${({ info }) =>
    info === 'space' ? 'center' : 'space-between'};
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
