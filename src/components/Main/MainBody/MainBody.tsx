import { SearchValuesType } from '@/apis';
import { PATH } from '@/constants';
import { useDetailModalOpen, useSpacePostListQuery } from '@/hooks';
import type { TagType, UserType, selectType } from '@/types';
import { objectHelperWithNotUndefined } from '@/utils/object-helper';
import { Suspense, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DefaultImage from '@/assets/svg/defaultImg/img1.svg';
import {
  PostMap,
  PostMapSkeleton,
  SearchBox,
  SelectBox,
} from '@/components/Main';
import { Calender, FlipCard, Pagination } from '@/components/common';
import { S } from './style';

type PostListPropType = {
  userList: UserType[];
  tagList: TagType[];
  selectState: boolean;
  spaceId: string;
};

export const MainBody = (props: PostListPropType) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState<Omit<SearchValuesType, 'spaceId'>>({
    page: searchParams.get('page') ?? '1',
    keyword: searchParams.get('keyword') ?? undefined,
    userId: searchParams.getAll('userList') ?? undefined,
    tagId: searchParams.getAll('tagList') ?? undefined,
    startDate: searchParams.get('startDate') ?? undefined,
    endDate: searchParams.get('endDate') ?? undefined,
  });

  const setParams = (callBack: () => void) => {
    callBack();
    setSearchParams(objectHelperWithNotUndefined(query));
  };

  const setKeyWorld = (keyword: string) => {
    setParams(() => setQuery((prev) => ({ ...prev, keyword: keyword.trim() })));
  };

  const setUserId = (selectUserList: selectType[]) => {
    setParams(() =>
      setQuery((prev) => ({
        ...prev,
        userId: selectUserList.map((v) => String(v.id)),
      }))
    );
  };

  const setTagId = (selectTagList: selectType[]) => {
    setParams(() =>
      setQuery((prev) => ({
        ...prev,
        tagId: selectTagList.map((v) => String(v.id)),
      }))
    );
  };

  const setDateInfo = ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => {
    setParams(() => setQuery((prev) => ({ ...prev, startDate, endDate })));
  };

  const setPage = (pageNumber: number | undefined) => {
    setParams(() =>
      setQuery((prev) => ({ ...prev, page: String(pageNumber) }))
    );
  };

  const navigate = useNavigate();

  const { spaceId, selectState, userList, tagList } = props;

  const { spacePostList, refetch } = useSpacePostListQuery({
    spaceId,
    ...query,
  });

  const { postList, total, page: curPage, itemLength } = spacePostList!;

  useEffect(() => {
    refetch();
  }, [refetch, query]);

  const detailModalOpen = useDetailModalOpen();

  const lowList = Math.ceil(userList.length / 2);

  return (
    <S.Wrapper>
      <S.FilterGroup>
        <SelectBox
          setState={setUserId}
          menuWidth={316}
          menuHeight={lowList * 16 + (lowList - 1) * 8 + 32}
          boxWidth={168}
          boxHeight={38}
          labelName={'작성자'}
          ListItem={userList}
          selectState={
            query.userId?.length !== 0
              ? userList
                  .filter(
                    (prev) =>
                      query.userId?.filter((v) => v === String(prev.userId))
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
          setDateInfo={setDateInfo}
          fontSize={12}
        />
        <SelectBox
          placeHolder={'태그명을 검색해주세요.'}
          setState={setTagId}
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
                      query.tagId?.filter((v) => v === String(prev.tagId))
                        .length !== 0
                  )
                  .map((v) => ({
                    id: v.tagId,
                    title: v.tagName,
                  }))
              : []
          }
        />
        <SearchBox
          setKeyWorld={setKeyWorld}
          initialKeyword={query.keyword ?? undefined}
          height={38}
          width={168}
          placeholder={'제목'}
        />
      </S.FilterGroup>
      {!selectState && postList.length === 0 && (
        <S.UndefinedList>
          <S.DefaultImg src={DefaultImage} alt={'defaultImg'} />
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
              movePage={setPage}
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
            movePage={setPage}
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
