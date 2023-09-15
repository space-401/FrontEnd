import styled from 'styled-components';

const Wrapper = styled.div<{ isRef: boolean }>`
  display: flex;
  gap: 20px;
  margin-left: ${({ isRef }) => (isRef ? '46px' : '')};
  height: 50px;
  width: 100%;
`;

const ImgBox = styled.div``;

const CommentBox = styled.div``;

const CommentInfo = styled.div`
  flex-direction: column;
  display: flex;
  gap: 8px;

  color: ${({ theme }) => theme.COLOR['gray-1']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-12']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;
const CommentWriter = styled.span`
  color: ${({ theme }) => theme.COLOR.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentRef = styled.span`
  color: ${({ theme }) => theme.COLOR.skyblue};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentContent = styled.span`
  color: ${({ theme }) => theme.COLOR['gray-1']};
  font-family: ${({ theme }) => theme.FONT_FAMILY.Pretendard};
  font-size: ${({ theme }) => theme.TEXT_SIZE['text-14']};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT['WEIGHT-400']};
`;

const CommentContentBox = styled.div`
  display: flex;
  gap: 8px;
`;

const CommentAddButton = styled.span`
  cursor: pointer;
`;

const CommentReply = styled.div`
  display: flex;
  gap: 16px;
`;

const ReplyInput = styled.div<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? '50px' : 0)};
  transition: height 0.5s;
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
};

export default S;
