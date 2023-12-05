import { S } from '@/modal/Detail/style';
import { Box } from '@mui/material';
import React from 'react';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import { useDetailModalStore } from '@/store/modal';
import { KSkeleton } from '@/components/common';

export const DetailInnerSkeleton = React.forwardRef(
  (_, forwardRef: React.ForwardedRef<HTMLDivElement>) => {
    const { ModalClose } = useDetailModalStore((state) => state);

    return (
      <>
        <Box tabIndex={-1} ref={forwardRef}>
          <S.DeleteIconBox>
            <DeleteIcon onClick={ModalClose} width={'24px'} height={'24px'} />
          </S.DeleteIconBox>
          <S.Container>
            <S.LikeIconBox>
              <KSkeleton variant={'circular'} width={48} height={48} />
            </S.LikeIconBox>
            <S.LeftImgBox isArray={false}>
              <KSkeleton variant={'rectangular'} width={680} height={680} />
            </S.LeftImgBox>
            <S.RightWrapper>
              <S.DetailInfo>
                <S.DateBox>
                  <KSkeleton width={70} height={20} />
                </S.DateBox>
                <S.UserBox>
                  <KSkeleton variant={'circular'} width={28} height={28} />
                  <S.UserNameList>
                    <KSkeleton variant={'rounded'} width={70} height={19} />
                  </S.UserNameList>
                </S.UserBox>
                <S.PostTitle>
                  <KSkeleton variant={'rounded'} width={140} height={24} />
                </S.PostTitle>
                <S.PostDescription>
                  <KSkeleton variant={'rounded'} width={300} height={19} />
                  <KSkeleton
                    variant={'rounded'}
                    sx={{ marginTop: '3px' }}
                    width={370}
                    height={19}
                  />
                  <KSkeleton
                    variant={'rounded'}
                    sx={{ marginTop: '3px' }}
                    width={240}
                    height={19}
                  />
                </S.PostDescription>
                <S.TagGroup>
                  <KSkeleton
                    variant={'rectangular'}
                    sx={{ borderRadius: '16px' }}
                    width={73}
                    height={21}
                  />
                  <KSkeleton
                    variant={'rectangular'}
                    sx={{ borderRadius: '16px' }}
                    width={55}
                    height={21}
                  />
                  <KSkeleton
                    variant={'rectangular'}
                    sx={{ borderRadius: '16px' }}
                    width={92}
                    height={21}
                  />
                </S.TagGroup>
              </S.DetailInfo>
              <S.MapInfo>
                <S.MapTitle>
                  <S.FlexBox>
                    <KSkeleton variant={'rounded'} width={24} height={24} />
                    <KSkeleton variant={'rounded'} width={230} height={19} />
                  </S.FlexBox>
                </S.MapTitle>
                <S.MapBox isOpen={false}></S.MapBox>
              </S.MapInfo>
              <S.CommentInfo>
                <S.CommentTitle>
                  <S.FlexBox>
                    <KSkeleton variant={'rounded'} width={70} height={19} />
                  </S.FlexBox>
                </S.CommentTitle>
                <S.CommentBox isReply={false} isOpen={false}></S.CommentBox>
              </S.CommentInfo>
              <S.CommentInput>
                <S.ReplyComment>
                  <KSkeleton variant={'rounded'} width={60} height={19} />
                </S.ReplyComment>
              </S.CommentInput>
            </S.RightWrapper>
          </S.Container>
        </Box>
      </>
    );
  }
);

export default DetailInnerSkeleton;
