import { CommentType } from '@type/space.type';
import S from '@components/Main/Comments/OneComment/style';
import Avatar from '@mui/material/Avatar';
import timeHelper from '@utils/time-helper';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { UserType } from '@type/user.type';
import { TextareaAutosize } from '@mui/material';
import { ReactComponent as MyCommentSvg } from '@assets/svg/moreIcon.svg';
import toast from 'react-hot-toast';
import { v1 as uuid } from 'uuid';

type OneCommentType = {
  item: CommentType;
  ReplyOpen: (id: number, refId: number) => void;
  ReplyClose: () => void;
  isReply:
    | { open: boolean; refId: number | undefined; id: number | undefined }
    | undefined;
  userList: UserType[];
};

const OneComment = (props: OneCommentType) => {
  const { ReplyOpen, ReplyClose, item, isReply, userList } = props;

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
    console.log(isReply);
    console.log(state.reply);
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
    console.log(id, '댓글을 삭제합니다.');
    toast('삭제되었습니다.', {
      style: { background: 'black', color: 'white' },
      position: 'top-center',
    });
  };

  useEffect(() => {
    console.log(state.settingIsOpen, '상태가 변경이 됨');
  }, [state.settingIsOpen]);

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
              <S.ManagementList>
                <S.BackClickBlock
                  isOpen={state.settingIsOpen}
                  onClick={() => {
                    setSettingToggle(false);
                  }}
                />
                <S.MenuGroup isOpen={state.settingIsOpen}>
                  <S.MenuButton onClick={DeleteComment}>댓글 삭제</S.MenuButton>
                </S.MenuGroup>
              </S.ManagementList>
            </S.CommentReply>
          </S.CommentInfo>
        </S.CommentBox>
        <S.ReplyInput isOpen={isReply?.id === id}>
          {isReply?.id === id && (
            <S.ReplyTextBox>
              <TextareaAutosize
                value={state.reply}
                style={{ paddingRight: '50px', zIndex: 20 }}
                minRows={2}
                maxRows={4}
                onChange={handleChange}
                placeholder={
                  userList.filter((item) => item.user_id === isReply?.refId)[0]
                    ?.user_name + '님에게 답글달기'
                }
              />
              <S.ReplyButton onClick={ReplySubmit}>게시</S.ReplyButton>
            </S.ReplyTextBox>
          )}
        </S.ReplyInput>
      </S.Container>
    </S.Wrapper>
  );
};

export default OneComment;
