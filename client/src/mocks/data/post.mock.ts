import { PostDetailType } from '@type/post.type';
import { tagList, userList } from '@mocks/data/common';
import { PostResponseType } from '@type/post.type';
import { SpacePostType } from '@/types/space.type';

/**
 * 포스트 게시물들의 목 데이터
 */
export const postList: SpacePostType[] = [
  {
    postId: 1,
    postTitle: '카페에서 한잔',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 10,
    postTitle: '밤 거리를 걷다',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 11,
    postTitle: '어디보시개',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 12,
    postTitle: '드로잉 카페',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 13,
    postTitle: '카페에서 한잔',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 14,
    postTitle: '밤 거리를 걷다',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/7be8/ff29/019d70c0ff45a640c3831bbc42c39a14?Expires=1694390400&Signature=CZbNFZeSu0vfZbtW4NhXQJxdUWdPiCDY-jFvTmBazXxKla4CjL8TSsskjNJN9VIfOJmy9~-hRk8PnhlA-cSpUBhIRxULjm9H7jrcEzI3~LIV7QNTimVl~NgPpuyBclVd0iZkzZzXaYyon71BF6eeRZM-SVvvrenlkorypdCKm~qrzVtOZ9bmPWmrftKTwMszcrTH30rESrb8WrtSt1icZx-rjxwxw0fOykXZFuLEvXlOk8uyATkyEMehDxiA~VMoRtBR8JOlw-coa0L3ugR0L3JAcAW9zA~E2Ss3NWTeZ4h~9gQeHLgL-QzE5rR6CzBLtLwHSNp3z8orCjneqs33nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 15,
    postTitle: '어디보시개',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/8dd6/f06c/415ef5e1ab1c32d5c01945d4d4e0d65c?Expires=1694390400&Signature=Vp28THoDM3l5beeE79DAKqz6SpARt-UVE4w2M2gUjEYKx03qc28QKSwa78HxWsVLoFuDm0rhsB75W9B7LlSZKM1bcjSzTIo2KpFLK6AcYMOa9Y0UhDPlXd~cQcTgj8PP7FjYGRmMm3LxV0BNYxLzeEvshp0a1zCJvHjzmWz7nl4g5x1TsguObxUnjNLbnV-T6k8HfBESzOEMln6~IOYho1SZT-Hg8A0JuYNJJqSXMSpgazrX26hWPk6-tqwHiO2Jp2FxHwDNaGjG~8RFZZcW5e3Semc4FBrVg9sDNGINg6WLpM3hSj1gCHiQlv8wMwTQes~-5c6FXBlNvvnNj2Awmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
    postId: 16,
    postTitle: '드로잉 카페',
    usersList: userList,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/cead/65b7/56e5840aeb7be4ac2e5e26ef237f704b?Expires=1694390400&Signature=Cbg1tUEmXme9OrBJCkFb4Mp3bvGgMeXPmep~StkTabXPPLa9HlfZFjXq~XM9d5rl99tpCGyqVfz-C~30OScekR3pHtUFqg3FedZ~Lb8CVpII87JD9Vn6c1fnMhIkl6VzS~aTFn7u-aPaGafSQRZwBwuVYNHgF8HgyS5~maIfRQKizC7NuGzBKG6EIvKwS9DK52JGOAxKuJxnISFP2KykI2~NxQRzjJ659JeF1FbKdtLzB~hBHfk112q3NBH3XeUcKmeIfDIpO2mfR2ceY4prq3JUjHiSHANg7N0Acy3EsNUforuzMInqmbw~teN3jRZiR99OCiHakGeQ-YcCSxmddA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
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
];
/**
 * 포스트 게시물의 상세 목 데이터
 */
export const postDetail: PostDetailType = {
  isMine: true,
  postId: 1,
  position: {
    lat: 37.27943075229118,
    lng: 127.01763998406159,
  },
  postDescription:
    '메론소다가 너어어무 먹고싶어서 엄선해서 9714!\n' +
    '완전 무채색의 매장인테리어에 쨍한 메론소 다가 일단 이뻐서 흡족\n' +
    '크 크 그리고 귀여워 서 레오 쿠키도 하나 시켰다...쫀킹',
  postCreatedAt: String(new Date()),
  postUpdatedAt: String(new Date()),
  selectedUsers: [
    {
      userId: 147394546,
      userName: '짱구',
      imgUrl:
        'https://i.namu.wiki/i/O_ySsnetZJl_AbRLxgT0Y21A6-UUuhk9-fI4kCHAyuxjvnTlAxM8DdMLCo2LNdOY0EjDP0WNUz8pAEIH8eXT53YcHI2Z-oxvqVeqp9VOCzrMX8Zq48UHh6XxQymLH5H8Jmy-ziOpmHKhH5uoPQl7Yw.webp',
    },
    {
      userId: 148263681,
      userName: '짱아',
      imgUrl:
        'https://i.namu.wiki/i/9H8iVzGgYgnUlDZer5h6PluEDVMB8Uy4RQxj2fR_Fr7aULTsvugOnFrw6FEG9YfkvmfsYHb3wXpRwIhU-1QZ7jMkn9gID85AnmYm2loamOJMTCy9VKOEa2PoZcqziehSqtxMr7SNKBZEjy4HslGKWw.webp',
    },
  ],
  userList: userList,
  selectedTags: [
    { tagId: 1, tagTitle: '흥미진진한' },
    { tagId: 2, tagTitle: '긴장감이 넘치는' },
  ],
  tagList: tagList,
  imgUrl: [
    'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1695600000&Signature=Bi3nD9mKWQoCliTAOdM2qOhCSUUxvLbV~ganJ5CSrbqTbE6ftXjrVc9-XX18e7lKWxKFVHC7NcT1wD8p8h2z-XVTwmE7kWOe-k7SqyeTRZ4NEcN5VLuQRTzOu1~u-RBVew5Zpdld2b6W~mKLE2iSLAVJ33OG6Z~2WFF~njRhjVMpNJ5NqK~WVDCH1~Z5mo4ykMEWoLUy4d-vci~dM0jv6KMDXQG8wza-6rmudXTKBEvMfkE7c2IDS6~Q81ZnG0VJNaOHeD0~PbWYoGGqm7oaYWauxL7FAG-HZFsyfBuS99Sv-fpjd7oe0FXsKGxCtIAHLB0yZ0bM1deeynbswJbyDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/6a9e/e32d/49275dc65ca1d61672d87fe76a73c7c8?Expires=1695600000&Signature=eqsF~~1INJ3YyMhRiEh~skH-yQN9f6ADv14B8Uq7jykR5bQtHDZtW8OoLptLpmYcNJ52Se06q2htRowN0VqOSpq75KcqRnMy52mgyRFBT~XdpXglOLY9p4pjW9PwTfISRaC5YHNh-MIr9RcCTWZBZV8oBAD0-GrGWGcW3-FGQhACth491ekCuPN7XrhySop1JqQWoqX70MPaCcwS0Y86cvW-zITXDouxLksAya5eon55dgeuUSxGd5HtBbFoa96ZZIJqQKt2qItQBWbDn3B6Zt1GHBDsTvdguA5kBaagib0GrBcvq4ILdxh-QcscY2MgxB~KX7lzetp2N7nGK6pCmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/f588/8cb0/d0c9a3f8fccf505547ead7739eb048ae?Expires=1695600000&Signature=A5FdXU8c777oc0Ku7E1pmATsVBaKuWkFRuKZRziI7pG8TCX5uRL7Bq3hPtsQs5Uk9hJF0HRhTNEscDemb29NkWCMrGUUoNfR2c~OJjpt3gORbuHl7-c3DItwFj38VZbjTAooL0wFKofx0SGJE45YCT9Vq-EhD9-9eo7TLyYTIgUXDtjttziJJfSbh43ebzoc7qotpJUub79-fbHMHagXChD5LoUQ6brzhrJMZ5GbLeA~-OUNwwvXa77c2qIShMwAIuibYTTxHLiOrAMGWVku-Iqt0QnZm9I0b4D5HGDCtkXY8vnpotK312Ztbn8HL-p9jaRKZFUNG7~Fn0v2Ltrbrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  ],
  postTitle: '전국 카페투어',
  placeTitle: '둔촌동 커피맛집',
  commentCount: 13,
  isBookmark: true,
  date: {
    startDate: '2023-01-01',
    endDate: '2023-01-03',
  },
};
/**
 * 포스트를 작성 혹은 수정하고 나서 목 데이터
 */
export const postCreate: PostResponseType = {
  message: 'success',
  postId: 20,
};
