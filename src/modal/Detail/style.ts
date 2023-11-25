import styled from 'styled-components';
import { modalBackGround, omitText } from '@/styles/common';
import { theme } from '@/styles';

const Container = styled.div`
  ${modalBackGround};
  position: absolute;
  display: flex;
  height: 100vh;
`;

const RightWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  width: 452px;
  min-height: 100%;
  background: ${({ theme }) => theme.COLOR['gray-6']};

  scrollbar-width: none; /* Firefox 지원 */
  -ms-overflow-style: none; /* IE 지원 */

  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

const DeleteIconBox = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  position: absolute;
  top: 32px;
  right: 42px;
  cursor: pointer;
`;

const LikeIconBox = styled.div`
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  height: 48px;
  width: 48px;
  position: absolute;
  top: 23px;
  left: -63px;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 150px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  box-shadow: ${({ theme }) => theme.SHADOW['shadow-sm']};
`;

const LeftImgBox = styled.div<{ isArray: boolean }>`
  padding: 24px;
  position: relative;
  width: 728px;
  min-height: 100vh;
  background: ${({ theme }) => theme.COLOR.black};
  display: flex;
  gap: 23px;
  flex-direction: column;
  overflow-y: ${({ isArray }) => (isArray ? 'scroll' : 'hidden')};
  justify-content: ${({ isArray }) => (isArray ? '' : 'center')};
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background: ${({ theme }) => theme.COLOR['gray-4']};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }
`;

const DetailInfo = styled.div`
  padding: 21px 16px 0;
`;

const DateBox = styled.div`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const UserBox = styled.div`
  position: relative;
  margin-top: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const UserNameList = styled.div`
  width: 260px;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  ${omitText};
`;

const MapInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.COLOR['gray-5']};
  border-bottom: 1px solid ${({ theme }) => theme.COLOR['gray-5']};
`;

const MapTitle = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.COLOR['gray-5']};
  border-bottom: 1px solid ${({ theme }) => theme.COLOR['gray-5']};
`;

const ManagementButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
`;
const PostTitle = styled.div`
  margin-top: 40px;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-20']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-700']};
`;
const PostDescription = styled.div`
  margin-top: 16px;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  white-space: pre;
  line-height: 140%;
`;

const TagGroup = styled.div`
  display: flex;
  margin: 24px 0 80px;
  gap: 4px;
  flex-wrap: wrap;

  .MuiChip-label {
    padding-left: 0;
    padding-right: 0;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MapBox = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '200px' : 0)};
  border-radius: 10px;
  overflow: hidden;
  margin-top: ${({ isOpen }) => (isOpen ? '8px' : 0)};
  transition:
    height 1s,
    margin-top 1s;
`;

const CommentTitle = styled.div`
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ManagementList = styled.div`
  position: relative;
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

const MenuGroup = styled.div<{ isOpen: boolean; width?: number; top?: number }>`
  right: -70px;
  top: ${({ top }) => (top ? top : 20)}px;
  position: absolute;
  width: ${({ width }) => (width ? width : 102)}px;
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
const MenuButton = styled.div<{ padding?: string; fontSize?: number }>`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-5']};
  cursor: pointer;
  display: flex;
  padding: ${({ padding }) => (padding ? padding : '4px 16px')};
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize + 'px' : theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-6']};
  }

  transition: background 0.2s;
`;
const CommentBox = styled.div<{ isOpen: boolean; isReply: boolean }>`
  width: 100%;
  overflow: hidden;
`;

const CommentInput = styled.div`
  position: fixed;
  height: fit-content;
  width: inherit;
  min-height: 48px;
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  gap: 16px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR['gray-1']};

  textarea {
    color: ${({ theme }) => theme.COLOR['gray-1']};
  }
`;

export const mentionStyle = {
  width: '90%',
  suggestions: {
    background: theme.COLOR['gray-6'],
    border: `1px solid ${theme.COLOR['gray-5']}`,
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '5px',
    boxSizing: 'border-box',
    list: {
      borderRadius: '10px',
      fontSize: 16,
      background: theme.COLOR['gray-6'],
    },
    item: {
      'background': theme.COLOR['gray-6'],
      'borderRadius': '8px',
      '&focused': {
        background: theme.COLOR['gray-5'],
      },
    },
  },
};

const ImgBox = styled.div<{ imgUrl: string }>`
  width: 680px;
  aspect-ratio: 1/1;
  background: url(${({ imgUrl }) => imgUrl});

  background-size: cover;
`;

const ReplyComment = styled.button`
  color: ${({ theme }) => theme.COLOR.skyblue};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%; /* 22.4px */
`;

const CommentDeleteIconBox = styled.div`
  cursor: pointer;
  display: inline;
`;

export const S = {
  MapBox,
  RightWrapper,
  DeleteIconBox,
  LeftImgBox,
  UserBox,
  DetailInfo,
  UserNameList,
  DateBox,
  Container,
  MapInfo,
  CommentInfo,
  ManagementButton,
  PostTitle,
  PostDescription,
  TagGroup,
  MapTitle,
  FlexBox,
  CommentTitle,
  CommentBox,
  ManagementList,
  BackClickBlock,
  MenuGroup,
  MenuButton,
  CommentInput,
  ImgBox,
  ReplyComment,
  LikeIconBox,
  CommentDeleteIconBox,
};
