import { ReactComponent as DefaultImage } from '@assets/svg/defaultImg/img1.svg';
import FlipCard from '@components/common/FlipCard/FlipCard';
import S from '@components/Main/MainBody/style';
import { Suspense, useEffect, useState } from 'react';
import type { selectType } from '@type/main.type';
import SelectBox from '@components/Main/SelectBox';
import MainSearchBox from '@components/Main/SearchBox';
import PostMap from '@components/Main/PostMap';
import Pagination from '@components/common/Pagination';
import Calender from '@/components/common/Calender/Calender';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSpacePostListQuery } from '@hooks/api/space/useSpacePostListQuery';
import { PostListFilterProps } from '@type/main.type';
import { UserType, TagType, DateInfoType } from '@/types/post.type';
import { useDetailModalOpen } from '@hooks/common/useDetailModalOpen';
import PostMapSkeleton from '@components/Main/PostMap/PostMap.Skeleton';
import { PATH } from '@constants/path';

type PostListPropType = {
  userList: UserType[];
  tagList: TagType[];
  selectState: boolean;
  spaceId: string;
};
const MainBody = (props: PostListPropType) => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  const page: string = searchParams.get('page') ?? '0';
  const keyword: string | null = searchParams.get('keyword');
  const userId: string[] | null = searchParams.getAll('userList');
  const tagId: string[] | null = searchParams.getAll('tagList');
  const dataTime: string | null = searchParams.get('date') ?? '2020-134-302'; // 날짜값 가져오기

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

  const { spacePostList, refetch } = useSpacePostListQuery(spaceId, page, {
    ...query,
  });

  useEffect(() => {
    refetch();
  }, [refetch, page, keyword, userId, tagId, dataTime]);

  const detailModalOpen = useDetailModalOpen();

  const { postList, total, page: curPage, itemLength } = spacePostList!;

  const setUserState = (newUserState: selectType[]) => {
    setState((prev) => ({ ...prev, selectUserList: newUserState }));
  };
  const setTagState = (newTagState: selectType[]) => {
    setState((prev) => ({ ...prev, selectTagList: newTagState }));
  };

  const movePage = (pageNumber: number) => {
    let select = {};
    if (state.selectUserList.length !== 0) {
      state.selectUserList.forEach((user) => {
        select = { ...select, user: user.id };
      });
    }
    if (state.selectTagList.length !== 0) {
      state.selectTagList.forEach((tag) => {
        select = { ...select, tag: tag.id };
      });
    }
    if (selectedDate.startDate) {
      select = {
        ...select,
        startDate: selectedDate.startDate,
      };
    }
    if (selectedDate.startDate) {
      select = {
        ...select,
        endDate: selectedDate.endDate,
      };
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
          BoxWidth={105}
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
          height={28}
          borderRadius={5}
          setDateInfo={setSelectedDate}
          fontSize={10}
        />
        <SelectBox
          placeHolder={'태그명을 검색해주세요.'}
          setState={setTagState}
          menuWidth={192}
          menuHeight={49 * Math.floor(tagList.length / 2)}
          BoxWidth={105}
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
        <MainSearchBox state={state} placeholder={'제목'} date={selectedDate} />
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

export default MainBody;
