import { PostDetailType } from '@type/space.type';
import { users_mock } from '@mocks/data/user/users.mock';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';

const DetailPageMock: PostDetailType = {
  isMine: true,
  post_id: 1,
  position: {
    lat: 37.27943075229118,
    lng: 127.01763998406159,
  },
  post_description:
    '메론소다가 너어어무 먹고싶어서 엄선해서 9714!\n' +
    '완전 무채색의 매장인테리어에 쨍한 메론소 다가 일단 이뻐서 흡족\n' +
    '크 크 그리고 귀여워 서 레오 쿠키도 하나 시켰다...쫀킹',
  post_created_at: String(new Date()),
  post_updated_at: String(new Date()),
  users: users_mock,
  main_img_url:
    'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1695600000&Signature=Bi3nD9mKWQoCliTAOdM2qOhCSUUxvLbV~ganJ5CSrbqTbE6ftXjrVc9-XX18e7lKWxKFVHC7NcT1wD8p8h2z-XVTwmE7kWOe-k7SqyeTRZ4NEcN5VLuQRTzOu1~u-RBVew5Zpdld2b6W~mKLE2iSLAVJ33OG6Z~2WFF~njRhjVMpNJ5NqK~WVDCH1~Z5mo4ykMEWoLUy4d-vci~dM0jv6KMDXQG8wza-6rmudXTKBEvMfkE7c2IDS6~Q81ZnG0VJNaOHeD0~PbWYoGGqm7oaYWauxL7FAG-HZFsyfBuS99Sv-fpjd7oe0FXsKGxCtIAHLB0yZ0bM1deeynbswJbyDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  sub_img_url: [
    'https://s3-alpha-sig.figma.com/img/6a9e/e32d/49275dc65ca1d61672d87fe76a73c7c8?Expires=1695600000&Signature=eqsF~~1INJ3YyMhRiEh~skH-yQN9f6ADv14B8Uq7jykR5bQtHDZtW8OoLptLpmYcNJ52Se06q2htRowN0VqOSpq75KcqRnMy52mgyRFBT~XdpXglOLY9p4pjW9PwTfISRaC5YHNh-MIr9RcCTWZBZV8oBAD0-GrGWGcW3-FGQhACth491ekCuPN7XrhySop1JqQWoqX70MPaCcwS0Y86cvW-zITXDouxLksAya5eon55dgeuUSxGd5HtBbFoa96ZZIJqQKt2qItQBWbDn3B6Zt1GHBDsTvdguA5kBaagib0GrBcvq4ILdxh-QcscY2MgxB~KX7lzetp2N7nGK6pCmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/f588/8cb0/d0c9a3f8fccf505547ead7739eb048ae?Expires=1695600000&Signature=A5FdXU8c777oc0Ku7E1pmATsVBaKuWkFRuKZRziI7pG8TCX5uRL7Bq3hPtsQs5Uk9hJF0HRhTNEscDemb29NkWCMrGUUoNfR2c~OJjpt3gORbuHl7-c3DItwFj38VZbjTAooL0wFKofx0SGJE45YCT9Vq-EhD9-9eo7TLyYTIgUXDtjttziJJfSbh43ebzoc7qotpJUub79-fbHMHagXChD5LoUQ6brzhrJMZ5GbLeA~-OUNwwvXa77c2qIShMwAIuibYTTxHLiOrAMGWVku-Iqt0QnZm9I0b4D5HGDCtkXY8vnpotK312Ztbn8HL-p9jaRKZFUNG7~Fn0v2Ltrbrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  ],
  post_title: '전국 카페투어',
  place_tag: MainPageMock.tagList,
  place_title: '둔촌동 커피맛집',
  commentCount: 13,
};

export default DetailPageMock;
