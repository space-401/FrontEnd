import { omitText } from '@/styles';
import styled from 'styled-components';

const Wrapper = styled.li<{ isReply: boolean; isRef: boolean }>`
  position: relative;
  display: flex;
  margin-left: ${({ isRef }) => (isRef ? '46px' : '')};
  width: ${({ isRef }) => (isRef ? 'calc(100% - 46px)' : '')};
  padding-left: 0;
  height: fit-content;
  transition: 0.5s;
`;

const ImgBox = styled.div`
  position: absolute;
`;

const CommentBox = styled.div`
  padding-left: 44px;
`;

const CommentInfo = styled.div`
  width: 100%;
  white-space: normal;
  color: ${({ theme }) => theme.COLOR['gray-1']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  .mention {
    color: ${({ theme }) => theme.COLOR.green};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-600']};
  }
`;
const CommentWriter = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentRef = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.COLOR.skyblue};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentContent = styled.span`
  ${omitText};
  color: ${({ theme }) => theme.COLOR['gray-1']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentContentBox = styled.div`
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentAddButton = styled.span`
  cursor: pointer;
`;

const CommentReply = styled.div`
  display: flex;
  gap: 16px;
`;

const ReplyInput = styled.div<{ isOpen: boolean }>`
  padding-top: ${({ isOpen }) => (isOpen ? '12px' : 0)};
  height: ${({ isOpen }) => (isOpen ? 'fit-content' : 0)};
  transition: height 0.5s;
`;

const Container = styled.div`
  position: relative;
  padding: 12px 23px 10px 0;
  width: 100%;
`;

const ReplyTextBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8px;
  align-items: center;
  gap: 16px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.COLOR['gray-3']};
  background: ${({ theme }) => theme.COLOR['gray-5']};

  textarea {
    padding-right: 44px;
    flex: 1 0 0;
    color: ${({ theme }) => theme.COLOR['gray-1']};
    font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
    line-height: 140%;
    background: inherit;
    resize: none;

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

    &::placeholder {
      max-height: 4em;
      color: ${({ theme }) => theme.COLOR['gray-3']};
    }
  }
`;
const ReplyButton = styled.div`
  position: absolute;
  z-index: 10000000000001;
  cursor: pointer;
  right: 20px;
  color: ${({ theme }) => theme.COLOR.skyblue};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-16']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
  line-height: 140%;
`;

const CommentDeleteIconBox = styled.div`
  cursor: pointer;
  display: inline;
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
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-size: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};

  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLOR['gray-6']};
  }

  transition: background 0.2s;
`;

const ReplyCount = styled.span`
  position: absolute;
  z-index: ${({ theme }) => theme.Z_INDEX['LEVEL-2']};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  right: 20px;
  bottom: 5px;
  color: ${({ theme }) => theme.COLOR['gray-6']};
`;

const S = {
  Wrapper,
  ImgBox,
  CommentBox,
  CommentInfo,
  CommentWriter,
  CommentRef,
  CommentContent,
  CommentContentBox,
  CommentAddButton,
  CommentReply,
  ReplyInput,
  Container,
  ReplyTextBox,
  ReplyButton,
  CommentDeleteIconBox,
  ManagementList,
  BackClickBlock,
  MenuGroup,
  MenuButton,
  ReplyCount,
};

export default S;
