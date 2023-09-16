import styled from 'styled-components';
import { omitText } from '@styles/common';

const RightWrapper = styled.div`
  position: absolute;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  position: absolute;
  top: 32px;
  right: 42px;
  cursor: pointer;
`;

const LeftImgBox = styled.div`
  position: relative;
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
  ${omitText}
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
  right: 16px;
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
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-3']};
  cursor: default;
  content: ' ';
  background: transparent;
`;

const MenuGroup = styled.div`
  top: 16px;
  right: -15px;
  position: absolute;
  width: 114px;
  display: inline-flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  box-shadow: ${({ theme }) => theme.SHADOW['shadow-sm']};
`;
const CommentBox = styled.div<{ isOpen: boolean; isReply: boolean }>`
  width: 100%;
  overflow: hidden;
`;

const MenuButton = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-4']};
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

const CommentInput = styled.div`
  position: absolute;
  bottom: 0;
  height: 48px;
  background: ${({ theme }) => theme.COLOR['gray-5']};
  color: ${({ theme }) => theme.COLOR['gray-1']};
`;

const S = {
  MapBox,
  RightWrapper,
  DeleteIconBox,
  LeftImgBox,
  UserBox,
  DetailInfo,
  UserNameList,
  DateBox,
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
};

export default S;
