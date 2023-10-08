import type {
  AccountDataType,
  BookMarkListType,
  MyCommentListType,
  MyPostListType,
} from '@type/user.type';
import { postList } from '@mocks/data/post.mock';

/**
 * 사용자 정보에 대한 목 데이터
 */
export const accountInfo: AccountDataType = {
  loginState: 'kakao',
  name: '김은주',
  email: 'qwer@kakao.com',
};
/**
 * 사용자가 북마크한 리스트에 대한 목 데이터
 */
export const bookMarkList: BookMarkListType = {
  bookMarkList: postList,
  page: 2,
  total: 40,
  itemLength: 12,
};
/**
 * 사용자가 등록한 포스트에 대한 목 데이터
 */
export const myPostList: MyPostListType = {
  myPostList: postList,
  page: 2,
  total: 40,
  itemLength: 12,
};
/**
 * 사용자가 작성한 댓글에 대한 목 데이터
 */
export const myCommentListAndInfo: MyCommentListType = {
  myCommentList: [
    {
      postId: 1,
      commentId: 1,
      spaceTitle: 'space401',
      postTitle: '당신은 전문가',
      postContent:
        '블라디미르 푸틴 러시아 대통령이 김정은 북한 국무위원장에게 “당신은 전문가”라고 말하는 영상이 공개됐다.\n' +
        '러시아 국영방송 ‘로시야’의 파벨 자루빈 기자는 지난 15일(현지시각) 텔레그램에 ‘아직 아무도 본 적 없는 대화’라며 푸틴 대통령과 김 위원장의 미공개 영상을 올렸다. ...',
      commentContent:
        '헐 여기 전에 가본데 자너 여기 좋음;; 헐 여기 전에 가본데 자너 여기 좋음;; ',
      commentCreateDate: String(new Date()),
      postCreateDate: String(new Date()),
      mainImgUrl:
        'https://s3-alpha-sig.figma.com/img/2297/aa17/07a3bbdc34704149870515161718468f?Expires=1696809600&Signature=WrsvWInolRDXhnK9hYHk0ldk8VgrKN80DibBnI5~H-ZO3d3jksTXHLWHOmv4EpmWz2mqfS0vnRK-xHUsjkpJQrw29p6DBYeWz5ZeMZ0fkVaisAbDNLgLHJPqyzPYaHnG9wLd6HEbSBQ9T0aSFg1tCBuSxnjzj7H2KqN1cfqvZhgvzT-gZ-iCLZk0dTiRpQ0v4TaFq4JsuL2~Yy5y5tF2JvMFes7ze~ietqnV2~kSeLTpUyg2aw7f9olI6XYmhGX394PFADGh~6m4tlNjEkzl3NcYqivqgAUKb46mpC1xakdDLsCmXY63aoKeesL03Raeij7YGIzAJMeCbBQOTNaZGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      postId: 2,
      commentId: 2,
      spaceTitle: 'space401',
      postTitle: '당신은 전문가',
      postContent:
        '블라디미르 푸틴 러시아 대통령이 김정은 북한 국무위원장에게 “당신은 전문가”라고 말하는 영상이 공개됐다.\n' +
        '러시아 국영방송 ‘로시야’의 파벨 자루빈 기자는 지난 15일(현지시각) 텔레그램에 ‘아직 아무도 본 적 없는 대화’라며 푸틴 대통령과 김 위원장의 미공개 영상을 올렸다. ...',
      commentContent:
        '헐 여기 전에 가본데 자너 여기 좋음;; 헐 여기 전에 가본데 자너 여기 좋음;; ',
      commentCreateDate: String(new Date()),
      postCreateDate: String(new Date()),
      mainImgUrl:
        'https://s3-alpha-sig.figma.com/img/2297/aa17/07a3bbdc34704149870515161718468f?Expires=1696809600&Signature=WrsvWInolRDXhnK9hYHk0ldk8VgrKN80DibBnI5~H-ZO3d3jksTXHLWHOmv4EpmWz2mqfS0vnRK-xHUsjkpJQrw29p6DBYeWz5ZeMZ0fkVaisAbDNLgLHJPqyzPYaHnG9wLd6HEbSBQ9T0aSFg1tCBuSxnjzj7H2KqN1cfqvZhgvzT-gZ-iCLZk0dTiRpQ0v4TaFq4JsuL2~Yy5y5tF2JvMFes7ze~ietqnV2~kSeLTpUyg2aw7f9olI6XYmhGX394PFADGh~6m4tlNjEkzl3NcYqivqgAUKb46mpC1xakdDLsCmXY63aoKeesL03Raeij7YGIzAJMeCbBQOTNaZGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      postId: 3,
      commentId: 3,
      spaceTitle: 'space401',
      postTitle: '당신은 전문가',
      postContent:
        '블라디미르 푸틴 러시아 대통령이 김정은 북한 국무위원장에게 “당신은 전문가”라고 말하는 영상이 공개됐다.\n' +
        '러시아 국영방송 ‘로시야’의 파벨 자루빈 기자는 지난 15일(현지시각) 텔레그램에 ‘아직 아무도 본 적 없는 대화’라며 푸틴 대통령과 김 위원장의 미공개 영상을 올렸다. ...',
      commentContent:
        '헐 여기 전에 가본데 자너 여기 좋음;; 헐 여기 전에 가본데 자너 여기 좋음;; ',
      commentCreateDate: String(new Date()),
      postCreateDate: String(new Date()),
      mainImgUrl:
        'https://s3-alpha-sig.figma.com/img/2297/aa17/07a3bbdc34704149870515161718468f?Expires=1696809600&Signature=WrsvWInolRDXhnK9hYHk0ldk8VgrKN80DibBnI5~H-ZO3d3jksTXHLWHOmv4EpmWz2mqfS0vnRK-xHUsjkpJQrw29p6DBYeWz5ZeMZ0fkVaisAbDNLgLHJPqyzPYaHnG9wLd6HEbSBQ9T0aSFg1tCBuSxnjzj7H2KqN1cfqvZhgvzT-gZ-iCLZk0dTiRpQ0v4TaFq4JsuL2~Yy5y5tF2JvMFes7ze~ietqnV2~kSeLTpUyg2aw7f9olI6XYmhGX394PFADGh~6m4tlNjEkzl3NcYqivqgAUKb46mpC1xakdDLsCmXY63aoKeesL03Raeij7YGIzAJMeCbBQOTNaZGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      postId: 4,
      commentId: 4,
      spaceTitle: 'space401',
      postTitle: '당신은 전문가',
      postContent:
        '블라디미르 푸틴 러시아 대통령이 김정은 북한 국무위원장에게 “당신은 전문가”라고 말하는 영상이 공개됐다.\n' +
        '러시아 국영방송 ‘로시야’의 파벨 자루빈 기자는 지난 15일(현지시각) 텔레그램에 ‘아직 아무도 본 적 없는 대화’라며 푸틴 대통령과 김 위원장의 미공개 영상을 올렸다. ...',
      commentContent:
        '헐 여기 전에 가본데 자너 여기 좋음;; 헐 여기 전에 가본데 자너 여기 좋음;; ',
      commentCreateDate: String(new Date()),
      postCreateDate: String(new Date()),
      mainImgUrl:
        'https://s3-alpha-sig.figma.com/img/2297/aa17/07a3bbdc34704149870515161718468f?Expires=1696809600&Signature=WrsvWInolRDXhnK9hYHk0ldk8VgrKN80DibBnI5~H-ZO3d3jksTXHLWHOmv4EpmWz2mqfS0vnRK-xHUsjkpJQrw29p6DBYeWz5ZeMZ0fkVaisAbDNLgLHJPqyzPYaHnG9wLd6HEbSBQ9T0aSFg1tCBuSxnjzj7H2KqN1cfqvZhgvzT-gZ-iCLZk0dTiRpQ0v4TaFq4JsuL2~Yy5y5tF2JvMFes7ze~ietqnV2~kSeLTpUyg2aw7f9olI6XYmhGX394PFADGh~6m4tlNjEkzl3NcYqivqgAUKb46mpC1xakdDLsCmXY63aoKeesL03Raeij7YGIzAJMeCbBQOTNaZGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      postId: 5,
      commentId: 5,
      spaceTitle: 'space401',
      postTitle: '당신은 전문가',
      postContent:
        '블라디미르 푸틴 러시아 대통령이 김정은 북한 국무위원장에게 “당신은 전문가”라고 말하는 영상이 공개됐다.\n' +
        '러시아 국영방송 ‘로시야’의 파벨 자루빈 기자는 지난 15일(현지시각) 텔레그램에 ‘아직 아무도 본 적 없는 대화’라며 푸틴 대통령과 김 위원장의 미공개 영상을 올렸다. ...',
      commentContent:
        '헐 여기 전에 가본데 자너 여기 좋음;; 헐 여기 전에 가본데 자너 여기 좋음;; ',
      commentCreateDate: String(new Date()),
      postCreateDate: String(new Date()),
      mainImgUrl:
        'https://s3-alpha-sig.figma.com/img/2297/aa17/07a3bbdc34704149870515161718468f?Expires=1696809600&Signature=WrsvWInolRDXhnK9hYHk0ldk8VgrKN80DibBnI5~H-ZO3d3jksTXHLWHOmv4EpmWz2mqfS0vnRK-xHUsjkpJQrw29p6DBYeWz5ZeMZ0fkVaisAbDNLgLHJPqyzPYaHnG9wLd6HEbSBQ9T0aSFg1tCBuSxnjzj7H2KqN1cfqvZhgvzT-gZ-iCLZk0dTiRpQ0v4TaFq4JsuL2~Yy5y5tF2JvMFes7ze~ietqnV2~kSeLTpUyg2aw7f9olI6XYmhGX394PFADGh~6m4tlNjEkzl3NcYqivqgAUKb46mpC1xakdDLsCmXY63aoKeesL03Raeij7YGIzAJMeCbBQOTNaZGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ],
  page: 3,
  total: 30,
  itemLength: 10,
};
