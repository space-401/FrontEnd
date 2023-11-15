import type {
    AccountDataType,
    BookMarkListType,
    MyCommentListType,
    MyPostListType,
} from '@type/user.type';
import {userList} from '@mocks/data/common';
import {ILoginResponse} from "@apis/user/getLogin";

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
    bookMarkList: [
        {
            postId: 1,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 2,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 3,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 4,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 5,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 6,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 7,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 8,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 9,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
        {
            postId: 10,
            postCommentCount: 12,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            postWriterName: '열차열차열차',
        },
    ],
    page: 2,
    total: 40,
    itemLength: 12,
};
/**
 * 사용자가 등록한 포스트에 대한 목 데이터
 */
export const myPostList: MyPostListType = {
    myPostList: [
        {
            spaceId: 1,
            postId: 1,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 2,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 3,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 4,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 5,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 6,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 7,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 8,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 9,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
        {
            spaceId: 1,
            postId: 10,
            postCommentCount: 14,
            postTitle: '오늘도 내일도 개미는 뚠뚠 일을하네 - 짱구는 못말려-',
            postCreatedAt: String(new Date()),
            selectedUsers: userList,
        },
    ],
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
            mainImgUrl: 'https://source.unsplash.com/random/300×300/?cat',
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
            mainImgUrl: 'https://source.unsplash.com/random/300×300/?cat',
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
            mainImgUrl: 'https://source.unsplash.com/random/300×300/?cat',
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
            mainImgUrl: 'https://source.unsplash.com/random/300×300/?cat',
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
            mainImgUrl: 'https://source.unsplash.com/random/300×300/?cat',
        },
    ],
    page: 3,
    total: 30,
    itemLength: 10,
};
/**
 * 로그인했을 때의 임시값
 */
export const loginResponse: ILoginResponse = {
    user: {
        "userId": 1,
        "socialType": "kakao",
        "userStatus": "user",
        "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk5Njc0NzE0LCJleHAiOjE2OTk2NzY1MTR9.fxTrYSQ0EyinmPd50UIqBW6d-Y8epqkoKSOx9DOT-20Opad9j1p69GdavJge-siGJpFIOIKDqssq9G-1lSIfGg",
        "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk5MDEwMDcyLCJleHAiOjE3MDAyMTk2NzJ9.OEQpv4MKpn8IRPlNE1dj6_U_WCqV7JTTXrZGZoDzrL5sESdQz7Ap5FvUCV3b1WSC9h9-CQvI_8ryYKIdlrFIpQ",
        "userEmail": "puzzler1888@gmail.com",
    }
};
