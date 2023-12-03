import { PATH } from '@/constants';
import { useDetailModalOpen, useSpacePostListQuery } from '@/hooks';
import type {
  DateInfoType,
  PostListFilterProps,
  TagType,
  UserType,
  selectType,
} from '@/types';
import { Suspense, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ReactComponent as DefaultImage } from '@/assets/svg/defaultImg/img1.svg';
import {
  PostMap,
  PostMapSkeleton,
  SearchBox,
  SelectBox,
} from '@/components/Main';
import { Calender, FlipCard, Pagination } from '@/components/common';
import S from './style';

type PostListPropType = {
  userList: UserType[];
  tagList: TagType[];
  selectState: boolean;
  spaceId: string;
};

// @Todo 필터 값이 변할 때 마다 데이터 재요청 보내기
export const MainBody = (props: PostListPropType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page: string = searchParams.get('page') ?? '1';
  const keyword: string | null = searchParams.get('keyword');
  const userId: string[] | [] = searchParams.getAll('userList');
  const tagId: string[] | [] = searchParams.getAll('tagList');
  const startDate: string | null = searchParams.get('startDate');
  const endDate: string | null = searchParams.get('endDate');

  const [state, setState] = useState<PostListFilterProps>({
    selectUserList: [],
    selectTagList: [],
  });

  const [selectedDate, setSelectedDate] = useState<DateInfoType>({
    startDate: '',
    endDate: '',
  });

  const navigate = useNavigate();

  const { spaceId, selectState, userList, tagList } = props;

  let query = {};

  if (keyword?.trim().length !== 0 && keyword !== null) {
    query = { ...query, keyword };
  }
  if (userId.length !== 0) {
    query = { ...query, userId };
  }
  if (tagId.length !== 0) {
    query = { ...query, tagId };
  }
  if (startDate?.length !== 0 && startDate !== null) {
    query = { ...query, startDate };
  }
  if (endDate?.length !== 0 && endDate !== null) {
    query = { ...query, endDate };
  }

  const { spacePostList, refetch } = useSpacePostListQuery(spaceId, page, {
    ...query,
  });

  useEffect(() => {
    refetch();
  }, [refetch, page, keyword, userId, tagId, startDate, endDate]);

  const detailModalOpen = useDetailModalOpen();

  const { postList, total, page: curPage, itemLength } = spacePostList!;

  const setUserState = (newUserState: selectType[]) => {
    setState((prev) => ({ ...prev, selectUserList: newUserState }));
    movePage(undefined);
  };

  const setTagState = (newTagState: selectType[]) => {
    setState((prev) => ({ ...prev, selectTagList: newTagState }));
    movePage(undefined);
  };

  const movePage = (pageNumber: number | undefined, searchKeyword?: string) => {
    let select = {};
    if (state.selectUserList.length !== 0) {
      select = { ...select, userList: state.selectUserList.map((v) => v.id) };
    }
    if (state.selectTagList.length !== 0) {
      select = { ...select, tagList: state.selectTagList.map((v) => v.id) };
    }
    if (selectedDate.startDate !== null && selectedDate.startDate) {
      select = {
        ...select,
        startDate: selectedDate.startDate,
        endDate: selectedDate.endDate,
      };
    }
    if (keyword !== null && keyword) {
      select = { ...select, keyword: keyword };
    }

    if (searchKeyword !== null && searchKeyword) {
      select = { ...select, keyword: searchKeyword };
    }

    if (pageNumber) {
      select = { ...select, page: pageNumber };
    }

    setSearchParams(select);
  };

  const lowList = Math.ceil(userList.length / 2);

  return (
    <S.Wrapper>
      <S.FilterGroup>
        <SelectBox
          setState={setUserState}
          menuWidth={316}
          menuHeight={lowList * 16 + (lowList - 1) * 8 + 32}
          boxWidth={168}
          boxHeight={38}
          labelName={'작성자'}
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
        <Calender
          isMain={true}
          width={200}
          height={38}
          borderRadius={5}
          setDateInfo={setSelectedDate}
          fontSize={12}
        />
        <SelectBox
          placeHolder={'태그명을 검색해주세요.'}
          setState={setTagState}
          menuWidth={192}
          menuHeight={49 * Math.floor(tagList.length / 2) * 2}
          boxWidth={168}
          boxHeight={38}
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
        <SearchBox
          movePage={movePage}
          initialKeyword={keyword ?? undefined}
          height={38}
          width={168}
          placeholder={'제목'}
        />
      </S.FilterGroup>
      {!selectState && postList.length === 0 && (
        <S.UndefinedList>
          <DefaultImage />
          <S.UndefinedPostText>
            첫번째 게시글을 등록해 주세요
          </S.UndefinedPostText>
          <S.UndefinedShareText
            onClick={() => navigate(PATH.POST_CREATE(spaceId))}
          >
            게시글 공유하기
          </S.UndefinedShareText>
        </S.UndefinedList>
      )}
      {!selectState && postList.length !== 0 && (
        <>
          <S.PostList>
            {postList.map((item) => {
              const { postId, imgUrl } = item;
              return (
                <FlipCard
                  onClick={() => detailModalOpen(postId)}
                  isBig={true}
                  key={postId}
                  imgUrl={imgUrl[0]}
                  item={item}
                />
              );
            })}
          </S.PostList>
          <S.PaginationBox>
            <Pagination
              movePage={movePage}
              page={curPage}
              total={total}
              itemLength={itemLength}
            />
          </S.PaginationBox>
        </>
      )}
      {selectState && (
        <Suspense fallback={<PostMapSkeleton />}>
          <PostMap
            movePage={movePage}
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
