import styled from 'styled-components';

const Title = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const Description = styled.div<{ margin_top: number }>`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const Bar = styled.div<{ margin_top: number }>`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const NameBox = styled.div<{ margin_top: number }>`
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const IconBox = styled.div<{ margin_top: number }>`
  margin-top: ${({ margin_top }) => margin_top}px;
`;

const WhiteSpan = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-500']};
`;

const IConBox = styled.div<{ margin_top: number }>`
  margin-top: ${({ margin_top }) => margin_top}px;
  display: flex;
  gap: 17px;
`;
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  gap: 24px;
  justify-content: flex-end;
`;
const Button = styled.div`
  cursor: pointer;
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-5']};

  color: ${({ theme }) => theme.COLOR['gray-1']};
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

export const A = {
  Title,
  Description,
  Bar,
  NameBox,
  IconBox,
  WhiteSpan,
  IConBox,
  ButtonGroup,
  Button,
};
const BWrapper = styled.div`
  margin-bottom: 40px;
`;
const FlipCardList = styled.div`
  margin: 40px 0 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
`;

export const B = {
  BWrapper,
  FlipCardList,
};

const HeaderButtonGroup = styled.div`
  position: absolute;
  display: flex;
  gap: 46px;
`;

const MButton = styled.div<{ select: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-600']};
  padding-bottom: 16px;

  border-bottom: ${({ select, theme }) =>
    select ? `5px solid ${theme.COLOR.skyblue}` : ''};
`;

export const M = {
  HeaderButtonGroup,
  MButton,
};

const CommentList = styled.div``;
const MyCommentList = styled.div``;
const OneCommentList = styled.div`
  cursor: pointer;
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
`;
const LeftCard = styled.div``;
const UserCard = styled.div`
  display: flex;
  gap: 8px;
  height: 28px;
  line-height: 28px;
  align-items: center;
  justify-content: flex-start;
`;
const UserNameSpan = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;
const CardInfo = styled.div`
  display: flex;
  width: 1103px;
  flex-direction: column;
  gap: 8px;
`;
const PostContent = styled.div`
  white-space: pre;
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%;
`;
const Comment = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%;
`;

const SpaceTitle = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const RightCard = styled.div<{ img_url: string }>`
  width: 98px;
  height: 98px;
  aspect-ratio: 1/1;
  border-radius: 15px;
  background: url(${({ img_url }) => img_url});
  background-size: cover;
`;

const PostTitle = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
`;

const CreateAt = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CardBottom = styled.div`
  display: flex;
  gap: 21px;
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentIconBox = styled.div`
  position: absolute;
  top: 0;
`;

const CommentInfo = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: flex-end;
`;

const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 30px;
`;

export const CL = {
  CommentList,
  MyCommentList,
  OneCommentList,
  PostTitle,
  LeftCard,
  PostContent,
  UserCard,
  UserNameSpan,
  CardInfo,
  Comment,
  SpaceTitle,
  RightCard,
  CreateAt,
  CardBottom,
  CommentInfo,
  CommentIconBox,
  CommentInfoBox,
};
