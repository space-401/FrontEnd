import React, { Suspense, useRef, useState } from 'react';
import S, { mentionStyle } from '@/modal/Detail/style';
import { Box, Chip, IconButton } from '@mui/material';
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';
import { getFormatDate, getFormatUser } from '@utils/formatter';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { ReactComponent as MenuSvg } from '@assets/svg/menu.svg';
import { ReactComponent as MarkerSvg } from '@assets/svg/markerIcon.svg';
import { MenuToggle } from '@components/Main/SelectBox/components/Toggle';
import { useDimensions } from '@hooks/common/useDimensions';
import { motion } from 'framer-motion';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import DetailComments from '@components/Main/Comments';
import { ReactComponent as BookMarkFillSvg } from '@assets/svg/bookmark/fill.svg';
import { ReactComponent as BookMarkEmptySvg } from '@assets/svg/bookmark/empty.svg';
import {
  Mention,
  MentionsInput,
  OnChangeHandlerFunc,
  SuggestionDataItem,
} from 'react-mentions';
import OneMention from '@/components/Detail/Mention/OneMention';
import { usePostDetailQuery } from '@hooks/api/post/usePostDetailQuery';
import { UseBookMarkMutation } from '@hooks/api/post/useBookMarkMutation';
import { toastColorMessage } from '@utils/toastMessage';
import { useDetailModalStore } from '@store/modal';
import { useConfirmModalOpen } from '@hooks/common/useConfirmModalOpen';

const DetailInner = React.forwardRef(
  (_, forwardRef: React.ForwardedRef<HTMLDivElement>) => {
    useKakaoLoader({
      appkey: import.meta.env.VITE_KAKAO_KEY,
      libraries: ['services'],
    });
    const [state, setState] = useState<{
      mapIsOpen: boolean;
      settingIsOpen: boolean;
      commentIsOpen: boolean;
      isReplyOpen:
        | { open: boolean; refId: number | undefined; id: number | undefined }
        | undefined;
      value: string;
      isBookMark: boolean;
    }>({
      isReplyOpen: undefined,
      settingIsOpen: false,
      commentIsOpen: false,
      mapIsOpen: false,
      value: '',
      isBookMark: false,
    });
    const currentURL = window.location.href;

    const mapContainerRef = useRef(null);
    const commentContainerRef = useRef(null);

    const { height: mapHeight } = useDimensions(mapContainerRef);
    const { height: commentHeight } = useDimensions(commentContainerRef);

    const { postId, ModalClose } = useDetailModalStore((state) => state);

    const { postDetailData } = usePostDetailQuery(String(postId));

    const confirmModalOpen = useConfirmModalOpen();

    const {
      imgUrl,
      userList,
      placeTitle,
      postUpdatedAt,
      postCreatedAt,
      position,
      commentCount,
      isMine,
      postTitle,
      postDescription,
      selectedUsers,
      selectedTags,
    } = postDetailData!;

    const setReply = (newState: string) => {
      setState((prev) => ({ ...prev, value: newState }));
    };

    const setChange: OnChangeHandlerFunc = (event) => {
      setReply(event.target.value);
    };

    const { postBookMarkAction } = UseBookMarkMutation();

    const DeleteAction = () => {
      ModalClose();
      toastColorMessage('삭제되었습니다.');
    };

    // 대댓글 오픈
    const setIsReply = (
      newReply:
        | { open: boolean; refId: number | undefined; id: number | undefined }
        | undefined
    ) => {
      setState((prev) => ({ ...prev, isReplyOpen: newReply }));
    };

    // 댓글 오픈
    const sendReply = () => {
      setReply('');
    };

    const renderList: SuggestionDataItem[] = userList.map((user) => ({
      id: user.userId,
      display: user.userName,
    }));

    // 북마크 요청을 보내는 함수
    const wishAsync = (postId: number) => {
      postBookMarkAction(postId);
    };

    const deleteConfirmOpen = () => {
      confirmModalOpen({
        isPositiveModal: false,
        titleMessage: '이 게시글을 삭제하시겠습니까?',
        closeMessage: '취소',
        ApproveMessage: '삭제',
        AsyncAction: DeleteAction,
      });
    };

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <S.DeleteIconBox>
          <DeleteIcon onClick={ModalClose} width={'24px'} height={'24px'} />
        </S.DeleteIconBox>
        <S.Container>
          <Suspense>
            <S.LikeIconBox
              onClick={() => {
                wishAsync(postId);
              }}
            >
              <IconButton>
                {state.isBookMark ? <BookMarkFillSvg /> : <BookMarkEmptySvg />}
              </IconButton>
            </S.LikeIconBox>
            <S.LeftImgBox isArray={imgUrl?.length !== 0}>
              {[...imgUrl].map((imgUrl) => (
                <S.ImgBox key={imgUrl} imgUrl={imgUrl} />
              ))}
            </S.LeftImgBox>
            <S.RightWrapper>
              <S.DetailInfo>
                <S.DateBox>
                  {postUpdatedAt !== postCreatedAt
                    ? getFormatDate(postUpdatedAt) + '- 수정됨'
                    : getFormatDate(postUpdatedAt)}
                </S.DateBox>
                <S.UserBox>
                  <Avatars size={28.5} users={selectedUsers} max={5} />
                  <S.UserNameList>
                    {getFormatUser(selectedUsers)}
                  </S.UserNameList>
                  {isMine && (
                    <S.ManagementButton
                      onClick={() =>
                        setState((prev) => ({ ...prev, settingIsOpen: true }))
                      }
                    >
                      <MenuSvg />
                    </S.ManagementButton>
                  )}
                  {state.settingIsOpen && (
                    <S.ManagementList>
                      <S.BackClickBlock
                        isOpen={state.settingIsOpen}
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            settingIsOpen: false,
                          }))
                        }
                      />
                      <S.MenuGroup>
                        <S.MenuButton
                          onClick={() => {
                            window.location.href =
                              currentURL + `/post/${postId}`;
                          }}
                        >
                          게시글 편집
                        </S.MenuButton>
                        <S.MenuButton onClick={() => deleteConfirmOpen()}>
                          게시글 삭제
                        </S.MenuButton>
                      </S.MenuGroup>
                    </S.ManagementList>
                  )}
                </S.UserBox>
                <S.PostTitle>{postTitle}</S.PostTitle>
                <S.PostDescription>{postDescription}</S.PostDescription>
                <S.TagGroup>
                  {selectedTags.map((place) => {
                    const { tagId, tagTitle } = place;
                    return (
                      <Chip
                        sx={{
                          background: 'white',
                          height: '21px',
                          padding: '0 8px',
                        }}
                        key={tagId}
                        label={tagTitle}
                        variant="filled"
                      />
                    );
                  })}
                </S.TagGroup>
              </S.DetailInfo>
              <S.MapInfo>
                <S.MapTitle>
                  <S.FlexBox>
                    <MarkerSvg width={'24px'} height={'24px'} />
                    {placeTitle}
                  </S.FlexBox>
                  <motion.nav
                    initial={false}
                    animate={state.mapIsOpen ? 'open' : 'closed'}
                    custom={mapHeight}
                    ref={mapContainerRef}
                  >
                    <MenuToggle
                      toggle={() =>
                        setState((prev) => ({
                          ...prev,
                          mapIsOpen: !prev.mapIsOpen,
                        }))
                      }
                    />
                  </motion.nav>
                </S.MapTitle>
                <S.MapBox isOpen={state.mapIsOpen}>
                  <Map
                    zoomable={false}
                    draggable={false}
                    center={position}
                    style={{
                      width: '100%',
                      height: '200px',
                    }}
                    level={4}
                  >
                    <MapMarker position={position} />
                  </Map>
                </S.MapBox>
              </S.MapInfo>
              <S.CommentInfo>
                <S.CommentTitle>
                  <S.FlexBox>
                    댓글 {commentCount ? commentCount + '개' : null}
                  </S.FlexBox>
                  <motion.nav
                    initial={false}
                    animate={state.commentIsOpen ? 'open' : 'closed'}
                    custom={commentHeight}
                    ref={commentContainerRef}
                  >
                    <MenuToggle
                      toggle={() =>
                        setState((prev) => ({
                          ...prev,
                          commentIsOpen: !prev.commentIsOpen,
                        }))
                      }
                    />
                  </motion.nav>
                </S.CommentTitle>
                <S.CommentBox
                  isReply={state.isReplyOpen?.open === true}
                  isOpen={state.commentIsOpen}
                >
                  <DetailComments
                    postId={String(postId)}
                    userList={userList}
                    isReply={state.isReplyOpen}
                    setIsReply={setIsReply}
                    isOpen={state.commentIsOpen}
                  />
                </S.CommentBox>
              </S.CommentInfo>
              <S.CommentInput>
                <MentionsInput
                  value={state.value}
                  style={mentionStyle}
                  onChange={setChange}
                  allowSuggestionsAboveCursor
                  placeholder={'댓글 쓰기'}
                  className={'mention-input'}
                >
                  <Mention
                    trigger={'@'}
                    data={renderList}
                    renderSuggestion={(suggestion, _, highlightedDisplay) => {
                      return (
                        <OneMention
                          userList={userList}
                          key={suggestion.id}
                          suggestion={suggestion}
                          highlightedDisplay={highlightedDisplay}
                        />
                      );
                    }}
                  />
                </MentionsInput>
                <S.ReplyComment onClick={sendReply}>게시</S.ReplyComment>
              </S.CommentInput>
            </S.RightWrapper>
          </Suspense>
        </S.Container>
      </Box>
    );
  }
);

export default DetailInner;
