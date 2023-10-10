import { A, CL } from '@components/MyPage/style';
import KSkeleton from '@components/common/Skeleton';
import { v4 } from 'uuid';
import { ReactComponent as FeatherSvg } from '@assets/svg/feather.svg';
const MyCommentListSkeleton = () => {
  return (
    <>
      {new Array(4).fill('').map(() => {
        return (
          <>
            <CL.OneCommentList key={v4()}>
              <CL.CardInfo>
                <CL.PostTitle>
                  <KSkeleton
                    variant={'rounded'}
                    width={Math.random() * 100 + 400}
                    height={19}
                  />
                </CL.PostTitle>
                <CL.PostContent>
                  <KSkeleton
                    variant={'rounded'}
                    width={`${Math.random() * 40 + 60}%`}
                    height={16}
                  />
                </CL.PostContent>
                <CL.CardBottom>
                  <CL.SpaceTitle>
                    <KSkeleton
                      variant={'rounded'}
                      width={Math.random() * 20 + 30}
                      height={16}
                    />
                  </CL.SpaceTitle>
                  <CL.CreateAt>
                    <KSkeleton variant={'rounded'} width={70} height={16} />
                  </CL.CreateAt>
                </CL.CardBottom>
                <CL.CommentInfo>
                  <CL.CommentIconBox>
                    <FeatherSvg />
                  </CL.CommentIconBox>
                  <CL.CommentInfoBox>
                    <CL.Comment>
                      <KSkeleton
                        variant={'rounded'}
                        width={Math.random() * 100 + 400}
                        height={20}
                      />
                    </CL.Comment>
                    <CL.CreateAt>
                      <KSkeleton variant={'rounded'} width={40} height={16} />
                    </CL.CreateAt>
                  </CL.CommentInfoBox>
                </CL.CommentInfo>
              </CL.CardInfo>
              <KSkeleton variant={'rounded'} width={98} height={98} />
            </CL.OneCommentList>
            <A.Bar margin_top={0} />
          </>
        );
      })}
    </>
  );
};

export default MyCommentListSkeleton;
