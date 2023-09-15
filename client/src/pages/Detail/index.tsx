import React, { useRef, useState } from 'react';
import S from '@pages/Detail/style';
import { Box, Chip } from '@mui/material';
import { ReactComponent as DeleteIcon } from '@assets/svg/deleteIcon.svg';
import DetailPageMock from '@mocks/data/DetailPage/detailPage.mock';
import { getFormatDate, getFormatUser } from '@utils/formatter';
import Avatars from '@components/common/AvatarGroup/Avatars';
import { ReactComponent as MenuSvg } from '@assets/svg/menu.svg';
import { ReactComponent as MarkerSvg } from '@assets/svg/markerIcon.svg';
import { MenuToggle } from '@components/Main/SelectBox/components/Toggle';
import { useDimensions } from '@hooks/common/use-dimensions';
import { motion } from 'framer-motion';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import DetailComments from '@components/Main/Comments';
import ConfirmModal from '@components/common/ConfirmModal/ConfirmModal';

type DetailPageProps = {
  onClose: () => void;
};

const DetailPage = React.forwardRef(
  (props: DetailPageProps, forwardRef: React.ForwardedRef<HTMLDivElement>) => {
    useKakaoLoader({
      appkey: import.meta.env.VITE_KAKAO_KEY,
    });

    const { onClose } = props;
    const postInfo = DetailPageMock;
    const {
      post_title,
      post_description,
      place_title,
      post_created_at,
      post_updated_at,
      place_tag,
      users,
      position,
      commentCount,
    } = postInfo;

    const [mapIsOpen, setMapIsOpen] = useState<boolean>(false);
    const [settingOpen, setSettingOpen] = useState<boolean>(false);
    const [commentIsOpen, setCommentIsOpen] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [isReply, setIsReply] = useState<
      { open: boolean; id: number | undefined } | undefined
    >(undefined);

    const mapContainerRef = useRef(null);
    const commentContainerRef = useRef(null);

    const { height: mapHeight } = useDimensions(mapContainerRef);
    const { height: commentHeight } = useDimensions(commentContainerRef);

    const DeleteAction = () => {
      console.log('삭제하였습니다.');
      onClose();
    };

    return (
      <Box tabIndex={-1} ref={forwardRef}>
        <ConfirmModal
          isPositiveModal={false}
          titleMessage={'이 게시글을 삭제하시겠습니까?'}
          ApproveMessage={'삭제'}
          closeMessage={'취소'}
          AsyncAction={DeleteAction}
          ModalClose={() => setDeleteModal(false)}
          isOpen={deleteModal}
        />
        <S.DeleteIconBox>
          <DeleteIcon onClick={onClose} width={'24px'} height={'24px'} />
        </S.DeleteIconBox>
        <S.LeftImgBox></S.LeftImgBox>
        <S.RightWrapper>
          <S.DetailInfo>
            <S.DateBox>
              {post_updated_at !== post_created_at
                ? getFormatDate(post_updated_at) + '- 수정됨'
                : getFormatDate(post_updated_at)}
            </S.DateBox>
            <S.UserBox>
              <Avatars size={28.5} users={users} max={5} />
              <S.UserNameList>{getFormatUser(users)}</S.UserNameList>
              <S.ManagementButton onClick={() => setSettingOpen(true)}>
                <MenuSvg />
              </S.ManagementButton>
              {settingOpen && (
                <S.ManagementList>
                  <S.BackClickBlock
                    isOpen={settingOpen}
                    onClick={() => setSettingOpen(false)}
                  />
                  {settingOpen && (
                    <S.MenuGroup>
                      <S.MenuButton>게시글 편집</S.MenuButton>
                      <S.MenuButton onClick={() => setDeleteModal(true)}>
                        게시글 삭제
                      </S.MenuButton>
                    </S.MenuGroup>
                  )}
                </S.ManagementList>
              )}
            </S.UserBox>
            <S.PostTitle>{post_title}</S.PostTitle>
            <S.PostDescription>{post_description}</S.PostDescription>
            <S.TagGroup>
              {place_tag.map((place) => (
                <Chip
                  sx={{ background: 'white', height: '21px', padding: '0 8px' }}
                  key={place.tag_id}
                  label={place.tag_title}
                  variant="filled"
                />
              ))}
            </S.TagGroup>
          </S.DetailInfo>
          <S.MapInfo>
            <S.MapTitle>
              <S.FlexBox>
                <MarkerSvg width={'24px'} height={'24px'} />
                {place_title}
              </S.FlexBox>
              <motion.nav
                initial={false}
                animate={mapIsOpen ? 'open' : 'closed'}
                custom={mapHeight}
                ref={mapContainerRef}
              >
                <MenuToggle toggle={() => setMapIsOpen((prev) => !prev)} />
              </motion.nav>
            </S.MapTitle>
            <S.MapBox isOpen={mapIsOpen}>
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
                animate={commentIsOpen ? 'open' : 'closed'}
                custom={commentHeight}
                ref={commentContainerRef}
              >
                <MenuToggle toggle={() => setCommentIsOpen((prev) => !prev)} />
              </motion.nav>
            </S.CommentTitle>
            <S.CommentBox
              isReply={isReply?.open === true}
              isOpen={commentIsOpen}
            >
              <DetailComments
                isReply={isReply}
                setIsReply={setIsReply}
                isOpen={commentIsOpen}
              />
            </S.CommentBox>
          </S.CommentInfo>
          <S.CommentInput></S.CommentInput>
        </S.RightWrapper>
      </Box>
    );
  }
);

export default DetailPage;
