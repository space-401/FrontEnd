import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/common/FlipCard/FlipCard';
import S from '@pages/Main/PostList/style';
import { Suspense, useEffect, useState } from 'react';
import type { selectType } from '@type/main.type';
import SelectBox from '@components/Main/SelectBox';
import MainSearchBox from '@components/Main/SearchBox';
import KaKaoMap from '@components/Main/PostMap';
import Pagination from '@components/common/Pagination';
import MainCalender from '@/components/common/Calender/MainCalender';
import { usePostListQuery } from '@hooks/api/post/usePostListQuery';
import { useSearchParams } from 'react-router-dom';
import { PostListFilterProps } from '@type/main.type';
import { useDetailModalOpen } from '@hooks/common/useDetailModalOpen';
import { UserType, TagType } from '@/types/post.type';

export type PostListPropType = {
  spaceId: string;
  selectState: boolean;
  userList: UserType[];
  tagList: TagType[];
};

const PostList = (props: PostListPropType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  //유저와 태그 필터
  const [state, setState] = useState<PostListFilterProps>({
    selectUserList: [],
    selectTagList: [],
  });

  const [date, setDate] = useState('');

  const { spaceId, selectState, userList, tagList } = props;

  const page: string = searchParams.get('page') ?? '0';
  const keyword: string | null = searchParams.get('keyword');
  const userId: string[] | null = searchParams.getAll('userList');
  const tagId: string[] | null = searchParams.getAll('tagList');
  const dataTime: string | null =
    searchParams.get('dataTime') ?? '2020-134-302'; // 날짜값 가져오기

  let query = {};

  if (keyword?.trim().length !== 0) {
    query = { ...query, keyword };
  }
  if (userId.length !== 0) {
    query = { ...query, userId };
  }
  if (tagId.length !== 0) {
    query = { ...query, tagId };
  }
  if (dataTime.trim().length !== 0) {
    query = { ...query, dataTime };
  }

  const { myPostListData, refetch } = usePostListQuery(spaceId, page, {
    ...query,
  });

  useEffect(() => {
    refetch();
  }, [refetch, page, keyword, userId, tagId, dataTime]);

  const { DetailModalOpen } = useDetailModalOpen();

  const { postList, total, page: curPage, itemLength } = myPostListData!;

  const setUserState = (newUserState: selectType[]) => {
    setState((prev) => ({ ...prev, selectUserList: newUserState }));
  };
  const setTagState = (newTagState: selectType[]) => {
    setState((prev) => ({ ...prev, selectTagList: newTagState }));
  };

  const movePage = (pageNumber: number) => {
    let select = {};
    if (state.selectUserList.length !== 0) {
      select = { ...select, userList: state.selectUserList.map((v) => v.id) };
    }
    if (state.selectTagList.length !== 0) {
      select = { ...select, tagList: state.selectTagList.map((v) => v.id) };
    }
    if (date.length !== 0) {
      select = { ...select, dateTime: date };
    }
    if (keyword) {
      select = { ...select, keyword: keyword };
    }
    setSearchParams(select);
    setSearchParams({ ...select, page: String(pageNumber) });
  };

  const lowList = Math.ceil(userList.length / 2);

  return (
    <S.Wrapper>
      <S.FilterGroup>
        <SelectBox
          setState={setUserState}
          menuWidth={316}
          menuHeight={lowList * 16 + (lowList - 1) * 8 + 32}
          BoxWidth={168}
          labelName={'사용자'}
          ListItem={userList}
          selectState={
            userList.length !== 0
              ? userList
                  .filter(
                    (prev) =>
                      userId?.filter((v) => v === String(prev.userId))
                        .length !== 0
                  )
                  .map((v) => ({
                    id: v.userId,
                    title: v.userName,
                    imgUrl: v.imgUrl,
                  }))
              : []
          }
        />
        <SelectBox
          placeHolder={'태그명을 검색해주세요.'}
          setState={setTagState}
          menuWidth={192}
          menuHeight={49 * Math.floor(tagList.length / 2)}
          BoxWidth={168}
          labelName={'태그'}
          ListItem={tagList}
          selectState={
            tagList.length !== 0
              ? tagList
                  .filter(
                    (prev) =>
                      tagId?.filter((v) => v === String(prev.tagId)).length !==
                      0
                  )
                  .map((v) => ({
                    id: v.tagId,
                    title: v.tagTitle,
                  }))
              : []
          }
        />
        <MainCalender
          isMain={true}
          height={50}
          borderRadius={5}
          setDateInfo={setDate}
        />
        <MainSearchBox state={state} placeholder={'제목'} date={date} />
      </S.FilterGroup>
      {!selectState ? (
        postList.length === 0 ? (
          <S.UndefinedList>
            <S.UndefinedDefaultImage imgUrl={DefaultImage} />
            <S.UndefinedPostText>
              첫번째 게시글을 등록해 주세요
            </S.UndefinedPostText>
            <S.UndefinedShareText>게시글 공유하기</S.UndefinedShareText>
          </S.UndefinedList>
        ) : (
          <>
            <S.PostList>
              {postList.map((item) => {
                const { postId, mainImgUrl } = item;
                return (
                  <FlipCard
                    onClick={() => DetailModalOpen(postId)}
                    size={'big'}
                    key={postId}
                    imgUrl={mainImgUrl}
                    item={item}
                  />
                );
              })}
            </S.PostList>
            <Pagination
              movePage={movePage}
              page={curPage}
              total={total}
              itemLength={itemLength}
            />
          </>
        )
      ) : (
        <Suspense fallback={<></>}>
          <KaKaoMap
            page={curPage}
            total={total}
            itemLength={itemLength}
            postList={postList}
          />
        </Suspense>
      )}
    </S.Wrapper>
  );
};

export default PostList;
