import { users_mock } from '@mocks/data/user/users.mock';
import { spacePostMock } from '@mocks/data/FlipCard/spaceInfo.mock';
import { MainPageType } from '@type/main.type';

const MainPageMock: MainPageType = {
  isAdmin: true,
  spaceInfo: {
    title: 'SPACE 401',
    description:
      '사면·감형 및 복권에 관한 사항은 법률로 정한다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.어쩌구어쩌구어쩌구어쩌구',
    users: users_mock,
    img_url:
      'https://s3-alpha-sig.figma.com/img/69e5/7cd2/f6e082e1aa8e1ca7431590dfbdc116d0?Expires=1694390400&Signature=MYc2CXpsj4~59Y0mHRfwcGD-5qi-xOJuOVVJlzNzVORLqdG8Y1w-zaXVQ4k1~uN6jpy2UsAzX9BNaeGoDkBwdMo8c3KHVWYHbqMbAjmZ3eYhbrFCAxBleRQpWTSSw2sTbk~jRYViGNKBUflaxeXe2Wx316fczzy7XypApZ6kQC3deWhCUGpeJqBuDNEGe-fmQVAc4ge49pP~S74mBeydVlwss~jv3-MtgdjFxP5yNKPx533leCf5UdP8wjND7ipTfiUUE~CpULED7mdO3NQzcdui55piKmE8rfBCgCtSzLMFb6390k6Kl8fTslCvy9k22Zn0RHNEHSwvXMLdn3avpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  postList: [
    {
      post_id: 1,
      post_title: '카페에서 한잔',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '집앞 공원',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 37.27943075229118,
        lng: 127.01763998406159,
      },
    },
    {
      post_id: 2,
      post_title: '밤 거리를 걷다',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '엉망 전시회',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 37.55915668706214,
        lng: 126.92536526611102,
      },
    },
    {
      post_id: 3,
      post_title: '어디보시개',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '우리집 베란다',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 35.13854258261161,
        lng: 129.1014781294671,
      },
    },
    {
      post_id: 4,
      post_title: '드로잉 카페',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: 'pa, pr!',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 37.55518388656961,
        lng: 126.92926237742505,
      },
    },
    {
      post_id: 5,
      post_title: '카페에서 한잔',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '집앞 공원',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 35.20618517638034,
        lng: 129.07944301057026,
      },
    },
    {
      post_id: 6,
      post_title: '밤 거리를 걷다',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '엉망 전시회',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 37.561110808242056,
        lng: 126.9831268386891,
      },
    },
    {
      post_id: 7,
      post_title: '어디보시개',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '우리집 베란다',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 37.86187129655063,
        lng: 127.7410250820423,
      },
    },
    {
      post_id: 8,
      post_title: '드로잉 카페',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: 'pa, pr!',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 37.47160156778542,
        lng: 126.62818064142286,
      },
    },
    {
      post_id: 9,
      post_title: '카페에서 한잔',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '집앞 공원',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 35.10233410927457,
        lng: 129.02611815856181,
      },
    },
    {
      post_id: 10,
      post_title: '밤 거리를 걷다',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '엉망 전시회',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 35.93282824693927,
        lng: 126.95307628834287,
      },
    },
    {
      post_id: 11,
      post_title: '어디보시개',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: '우리집 베란다',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 35.10215562270429,
        lng: 129.02579793018205,
      },
    },
    {
      post_id: 12,
      post_title: '드로잉 카페',
      users: users_mock,
      main_img_url:
        'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      place_title: 'pa, pr!',
      place_tag: [
        { tag_id: 1, tag_title: '일상속 하루' },
        { tag_id: 2, tag_title: '커피 한잔의 여유' },
      ],
      post_created_at: String(new Date()),
      post_updated_at: String(new Date()),
      position: {
        lat: 35.475423012251106,
        lng: 128.76666923366042,
      },
    },
  ],
  tagList: spacePostMock.place_tag,
  total: 16,
  page: 1,
};

export default MainPageMock;
