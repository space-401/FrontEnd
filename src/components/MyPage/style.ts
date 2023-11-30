import { flexCenter, omitText } from '@/styles';
import styled from 'styled-components';

const Title = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-32']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 95%;
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-24']};
    ${flexCenter};
  }
`;

const Description = styled.div<{ margin_top: number }>`
  color: ${({ theme }) => theme.COLOR['gray-2']};
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
  margin-bottom: 200px;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter}
  }
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
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const TotalCount = styled.span`
  color: ${({ theme }) => theme.COLOR.skyblue};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const Table = styled.table`
  width: 100%;
  padding: 16px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};

  thead tr:first-child {
    padding: 10px;
    color: ${({ theme }) => theme.COLOR['gray-3']};
    background: ${({ theme }) => theme.COLOR['gray-7']};
    display: grid;
    gap: 24px;
    justify-items: start;
    grid-template-columns: 2.5fr 1fr 1fr;
    @media ${({ theme }) => theme.DEVICE.tablet} {
      width: 100%;
    }
  }

  tr {
    padding: 15px 10px;
    color: ${({ theme }) => theme.COLOR.white};
    display: grid;
    gap: 24px;
    justify-items: start;
    grid-template-columns: 2.5fr 1fr 1fr;
    border-bottom: 0.625px solid ${({ theme }) => theme.COLOR['gray-4']};
    position: relative;
    z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-1']};

    td {
      width: 100%;
      ${omitText};
      text-overflow: ellipsis;
    }

    td:first-child {
      cursor: pointer;
    }
  }
`;

const PaginationBox = styled.div`
  margin: 24px auto 0;
  width: 120px;
`;

const AvatarBox = styled.div`
  display: flex;
`;

const SettingButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translate(50%, -50%);
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;

const BackClickBlock = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
  content: ' ';
  background: transparent;
`;

const MenuGroup = styled.div<{ isOpen: boolean }>`
  right: -70px;
  top: 20px;
  position: absolute;
  width: 102px;
  display: ${({ isOpen }) => (isOpen ? 'inline-flex' : 'none')};
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border-radius: 10px;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  background: ${({ theme }) => theme.COLOR['gray-4']};
  box-shadow: ${({ theme }) => theme.SHADOW['shadow-sm']};
`;
const MenuButton = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  cursor: pointer;
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-size: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-6']};
  }

  transition: background 0.2s;
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
  TotalCount,
  Table,
  PaginationBox,
  AvatarBox,
  SettingButton,
  BackClickBlock,
  MenuGroup,
  MenuButton,
};

const BTable = styled.table`
  width: 100%;
  padding: 16px;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};

  position: relative;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 100%;
  }

  tr {
    padding: 15px 10px;
    color: ${({ theme }) => theme.COLOR.white};
    display: grid;
    gap: 24px;
    justify-items: start;
    grid-template-columns: 3fr 1fr 1fr 0.3fr;
    border-bottom: 0.625px solid ${({ theme }) => theme.COLOR['gray-4']};
    position: relative;

    td {
      width: 100%;
      text-overflow: ellipsis;
      @media ${({ theme }) => theme.DEVICE.tablet} {
        ${omitText};
        text-overflow: ellipsis;
      }
    }

    thead tr td:first-child {
      cursor: pointer;
      ${omitText};
      text-overflow: ellipsis;
    }
  }

  thead tr:first-child {
    padding: 10px;
    color: ${({ theme }) => theme.COLOR['gray-3']};
    background: ${({ theme }) => theme.COLOR['gray-7']};
    display: grid;
    gap: 24px;
    justify-items: start;
    grid-template-columns: 3fr 1fr 1fr 0.3fr;
  }
`;

export const B = {
  BTable,
};

const HeaderButtonGroup = styled.div`
  display: flex;
  gap: 46px;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    position: initial;
    width: 100%;
  }
`;

const MButton = styled.div<{ select: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-600']};
  padding-bottom: 16px;

  border-bottom: ${({ select, theme }) =>
    select ? `2px solid ${theme.COLOR.skyblue}` : ''};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
    padding-bottom: 10px;
  }
`;

const FlexWrapper = styled.div`
  @media ${({ theme }) => theme.DEVICE.tablet} {
    ${flexCenter};
    flex-direction: column;
    width: 95%;
  }
`;

export const M = {
  HeaderButtonGroup,
  MButton,
  FlexWrapper,
};

const OneCommentList = styled.div`
  cursor: pointer;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-wrap: wrap;
    width: 95%;
  }
`;
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
  font-size: 10px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;
const CardInfo = styled.div`
  display: flex;
  width: 675px;
  flex-direction: column;
  gap: 8px;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 70%;
  }
`;
const PostContent = styled.div`
  white-space: pre;
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%;
  ${omitText};
`;
const Comment = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%;
  ${omitText}
`;

const SpaceTitle = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const RightCard = styled.div<{ img_url: string }>`
  width: 98px;
  height: 98px;
  aspect-ratio: 1/1;
  border-radius: 15px;
  background: url(${({ img_url }) => img_url});
  background-size: cover;
  z-index: 1;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-top: 10px;
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
`;

const PostTitle = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
`;

const CreateAt = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-2']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CardBottom = styled.div`
  display: flex;
  gap: 21px;
  color: ${({ theme }) => theme.COLOR['gray-2']};
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
  ${omitText};
`;

const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 30px;
`;

export const CL = {
  OneCommentList,
  PostTitle,
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
