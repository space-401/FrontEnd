import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.COLOR['gray-7']};
  padding: 24px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  min-width: 338px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PaginationBox = styled.div`
  margin: 0 auto;
  width: 200px;
`;

export const S = {
  Wrapper,
  PaginationBox,
};

const ContentBox = styled.div`
  width: 247px;
`;

const ContentPlace = styled.div`
  display: flex;
  padding: 2px 16px;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  background: ${({ theme }) => theme.COLOR['gray-6']};
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const ContentTitle = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-18']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
`;

const ContentCreateAt = styled.div`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 16px;
`;

const AvatarBox = styled.div``;

const MarkerContainer = styled.div`
  background: ${({ theme }) => theme.COLOR['gray-5']};
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
`;

const ContentInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const M = {
  ContentBox,
  ContentPlace,
  ContentTitle,
  ContentCreateAt,
  AvatarBox,
  MarkerContainer,
  ContentInfo,
};

const CardImg = styled.div<{ imgUrl: string }>`
  width: 107.5px;
  height: 107.5px;
  background: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  border-radius: 15px;
`;

const OneWrapper = styled.div<{ isSelect: boolean }>`
  cursor: pointer;
  width: 302px;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme, isSelect }) =>
    !isSelect ? theme.COLOR['gray-5'] : theme.COLOR['gray-4']};
  border: ${({ isSelect, theme }) =>
    !isSelect
      ? `2px solid ${theme.COLOR['gray-5']}`
      : `2px solid ${theme.COLOR['gray-3']}`};
  display: flex;
  padding: 16px;
  gap: 16px;
`;

const CardCreate = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  min-height: 10px;
`;

const CardTitle = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardDescription = styled.div`
  margin-top: 6px;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 9px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%;
`;

const CardInfo = styled.div`
  max-width: 154px;
`;

const CardPlace = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  gap: 8px;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const TagGroup = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;

  div {
    color: ${({ theme }) => theme.COLOR['gray-6']};
    font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
    font-size: 9px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  }

  span {
    padding: 0;
  }
`;

export const O = {
  OneWrapper,
  CardImg,
  CardCreate,
  CardTitle,
  CardDescription,
  CardInfo,
  CardPlace,
  TagGroup,
};
