import { SpacePostType } from '@type/space.type';
import { users_mock } from '@mocks/data/user/users.mock';

const mockList: SpacePostType[] = [
  {
    postId: 1,
    postTitle: '카페에서 한잔',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '집앞 공원',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.27943075229118,
      lng: 127.01763998406159,
    },
  },
  {
    postId: 2,
    postTitle: '밤 거리를 걷다',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '엉망 전시회',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.55915668706214,
      lng: 126.92536526611102,
    },
  },
  {
    postId: 3,
    postTitle: '어디보시개',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '우리집 베란다',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.13854258261161,
      lng: 129.1014781294671,
    },
  },
  {
    postId: 4,
    postTitle: '드로잉 카페',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: 'pa, pr!',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.55518388656961,
      lng: 126.92926237742505,
    },
  },
  {
    postId: 5,
    postTitle: '카페에서 한잔',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '집앞 공원',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.20618517638034,
      lng: 129.07944301057026,
    },
  },
  {
    postId: 6,
    postTitle: '밤 거리를 걷다',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '엉망 전시회',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.561110808242056,
      lng: 126.9831268386891,
    },
  },
  {
    postId: 7,
    postTitle: '어디보시개',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '우리집 베란다',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.86187129655063,
      lng: 127.7410250820423,
    },
  },
  {
    postId: 8,
    postTitle: '드로잉 카페',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: 'pa, pr!',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 37.47160156778542,
      lng: 126.62818064142286,
    },
  },
  {
    postId: 9,
    postTitle: '카페에서 한잔',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '집앞 공원',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.10233410927457,
      lng: 129.02611815856181,
    },
  },
  {
    postId: 10,
    postTitle: '밤 거리를 걷다',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '엉망 전시회',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.93282824693927,
      lng: 126.95307628834287,
    },
  },
  {
    postId: 11,
    postTitle: '어디보시개',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: '우리집 베란다',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.10215562270429,
      lng: 129.02579793018205,
    },
  },
  {
    postId: 12,
    postTitle: '드로잉 카페',
    usersList: users_mock,
    mainImgUrl:
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    placeTitle: 'pa, pr!',
    placeTag: [
      { tagId: 1, tagTitle: '일상속 하루' },
      { tagId: 2, tagTitle: '커피 한잔의 여유' },
    ],
    postCreatedAt: String(new Date()),
    postUpdatedAt: String(new Date()),
    position: {
      lat: 35.475423012251106,
      lng: 128.76666923366042,
    },
  },
];

export default mockList;
