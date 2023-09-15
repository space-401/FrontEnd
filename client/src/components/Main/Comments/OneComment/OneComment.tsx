import { CommentType } from '@type/space.type';
import S from '@components/Main/Comments/OneComment/style';
import Avatar from '@mui/material/Avatar';
import timeHelper from '@utils/time-helper';

type OneCommentType = CommentType & {
  ReplyOpen: (id: number) => void;
  ReplyClose: () => void;
  isReply: { open: boolean; id: number | undefined } | undefined;
};

const OneComment = (props: OneCommentType) => {
  const {
    ReplyOpen,
    ReplyClose,
    createDate,
    updateDate,
    id,
    isRef,
    writer,
    content,
    isReply,
    replyMember,
  } = props;
  return (
    <>
      <S.Wrapper isRef={isRef}>
        <S.ImgBox>
          <Avatar
            alt={writer.nick}
            src={writer.url}
            sx={{ width: '28px', height: '28px' }}
          />
        </S.ImgBox>
        <S.CommentBox>
          <S.CommentInfo>
            <S.CommentContentBox>
              <S.CommentWriter>{writer.nick}</S.CommentWriter>
              {replyMember ? (
                <S.CommentRef>{replyMember.nick}</S.CommentRef>
              ) : null}
              <S.CommentContent>{content}</S.CommentContent>
            </S.CommentContentBox>
            <S.CommentReply>
              <span>
                {createDate !== updateDate
                  ? '(수정)'
                  : '' + timeHelper(updateDate)}
              </span>
              {isReply?.id !== id ? (
                <S.CommentAddButton onClick={() => ReplyOpen(id)}>
                  답글 달기
                </S.CommentAddButton>
              ) : (
                <S.CommentAddButton onClick={() => ReplyClose()}>
                  취소
                </S.CommentAddButton>
              )}
            </S.CommentReply>
          </S.CommentInfo>
        </S.CommentBox>
      </S.Wrapper>
      <S.ReplyInput isOpen={isReply?.id === id}></S.ReplyInput>
    </>
  );
};

export default OneComment;
