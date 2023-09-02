import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-size: cover;
  backdrop-filter: blur(2px) !important;
  background: rgba(0, 0, 0, 50%);
`;

const PostTitle = styled.div`
  margin-top: 16px;

  font-family: 'IBM Plex Sans KR', sans-serif;
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
  font-family: 'IBM Plex Sans KR', sans-serif;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-style: normal;
  margin-bottom: 24px;
  gap: 4.2px;
`;
const InfoTop = styled.div``;
const ChipBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  overflow: auto;

  div {
    color: ${({ theme }) => theme.COLOR.white};
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
    line-height: 130%;
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
  InfoTop,
  InfoBottom,
};

export default S;
