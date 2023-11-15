import S from '@components/Main/Comments/OneComment/style';
import Avatar from '@mui/material/Avatar';
import { timeHelper } from '@utils/time-helper';
import React, { ChangeEvent, useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { ReactComponent as MyCommentSvg } from '@assets/svg/moreIcon.svg';
import toast from 'react-hot-toast';
import { v4 as uuid } from 'uuid';
import { useCommentMutation } from '@hooks/api/comment/useCommentMutation';
import type { OneCommentType } from '@type/comment.type';
import { useCommentDeleteMutation } from '@hooks/api/comment/useCommentDeleteMutation';

const OneComment = (props: OneCommentType) => {
  const { ReplyOpen, ReplyClose, item, postId, isReply, userList, spaceId } =
    props;

  const {
    createDate,
    updateDate,
    isMyComment,
    refId,
    id,
    isRef,
    writer,
    content,
    replyMember,
  } = item;

  const [state, setState] = useState({ reply: '', settingIsOpen: false });

  const { postCommentAction } = useCommentMutation(postId, spaceId);

  const { deleteCommentAction } = useCommentDeleteMutation(postId, spaceId);

  const regex = /@([^@]+)@/g;
  const parts = [];

  let match;
  let lastIndex = 0;

  const setReply = (newReply: string) => {
    setState((prev) => ({ ...prev, reply: newReply }));
  };

  const setSettingToggle = (bool: boolean) => {
    setState((prev) => ({ ...prev, settingIsOpen: bool }));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const ReplySubmit = () => {
    if (state.reply.trim().length !== 0) {
      postCommentAction({
        comment: state.reply,
        postId,
        refInfo: {
          refId: id,
          refMemberKey: writer.memberKey,
        },
      });
    }
    ReplyCancel();
  };

  const ReplyCancel = () => {
    ReplyClose();
    setReply('');
  };

  const ReplyStart = (id: number, refId: number) => {
    ReplyCancel();
    ReplyOpen(id, refId);
  };

  const DeleteComment = () => {
    setSettingToggle(false);
    deleteCommentAction(id);
    toast('삭제되었습니다.', {
      style: { background: 'black', color: 'white' },
      position: 'top-center',
    });
  };

  while ((match = regex.exec(content)) !== null) {
    const user_name = match[1];
    const startIndex = match.index;
    const endIndex = regex.lastIndex;

    parts.push(
      content.substring(lastIndex, startIndex),
      <span key={startIndex} className="mention">
        @{user_name}
      </span>
    );

    lastIndex = endIndex;
  }

  parts.push(content.substring(lastIndex));

  return (
    <S.Wrapper isReply={isReply?.id === id} isRef={isRef}>
      <S.Container>
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
              <span>
                {parts.map((part) => (
                  <React.Fragment key={uuid()}>{part}</React.Fragment>
                ))}
              </span>
            </S.CommentContentBox>
            <S.CommentReply>
              <span>
                {createDate !== updateDate
                  ? '(수정)'
                  : '' + timeHelper(updateDate)}
              </span>
              {isReply?.id !== id ? (
                <S.CommentAddButton onClick={() => ReplyStart(id, refId)}>
                  답글 달기
                </S.CommentAddButton>
              ) : (
                <S.CommentAddButton onClick={ReplyCancel}>
                  취소
                </S.CommentAddButton>
              )}
              {isMyComment && (
                <S.CommentDeleteIconBox onClick={() => setSettingToggle(true)}>
                  <MyCommentSvg />
                </S.CommentDeleteIconBox>
              )}
              {isMyComment && (
                <S.ManagementList>
                  <S.BackClickBlock
                    isOpen={state.settingIsOpen}
                    onClick={() => {
                      setSettingToggle(false);
                    }}
                  />
                  <S.MenuGroup isOpen={state.settingIsOpen}>
                    <S.MenuButton onClick={DeleteComment}>
                      댓글 삭제
                    </S.MenuButton>
                  </S.MenuGroup>
                </S.ManagementList>
              )}
            </S.CommentReply>
          </S.CommentInfo>
        </S.CommentBox>
        <S.ReplyInput isOpen={isReply?.id === id}>
          {isReply?.id === id && (
            <S.ReplyTextBox>
              <TextareaAutosize
                value={state.reply}
                style={{ paddingRight: '50px' }}
                minRows={2}
                maxRows={4}
                onChange={handleChange}
                placeholder={
                  userList.filter((item) => item.userId === isReply?.refId)[0]
                    ?.userName + '님에게 답글달기'
                }
              />
              {state.reply.length > 50 ? (
                <S.ReplyCount>{state.reply.length + '/200'}</S.ReplyCount>
              ) : null}
              <S.ReplyButton onClick={ReplySubmit}>게시</S.ReplyButton>
            </S.ReplyTextBox>
          )}
        </S.ReplyInput>
      </S.Container>
    </S.Wrapper>
  );
};

export default OneComment;
