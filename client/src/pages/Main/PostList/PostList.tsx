import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/common/FlipCard/FlipCard';
import S from '@pages/Main/PostList/style';
import {Suspense, useEffect, useState} from 'react';
import type {PostListPropType, selectType} from '@type/main.type';
import SelectBox from '@components/Main/SelectBox';
import MainSearchBox from '@components/Main/SearchBox';
import KaKaoMap from '@components/Main/PostMap';
import Pagination from '@components/common/Pagination';
import Calender from '@/components/common/Calender/Calender';
import {usePostListQuery} from '@hooks/api/post/usePostListQuery';
import {useSearchParams} from 'react-router-dom';
import {FilterType} from "@apis/post/getPostList";
import {options} from "axios";

const PostList = (props: PostListPropType) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [state, setState] = useState<{
        selectUserList: selectType[];
        selectTagList: selectType[];
        dataTime: string;
    }>({
        selectUserList: [],
        selectTagList: [],
        dataTime:'',
    });

    const {spaceId, selectState, userList, tagList} = props;

    const page: string = searchParams.get('page') ?? '0';
    const keyword: string = searchParams.get('keyword') ?? '';
    const userId: string = searchParams.get('tagId') ?? '';
    const tagId: string = searchParams.get('userId') ?? '';
    const dataTime: string = searchParams.get('dataTime') ?? '';

    const {myPostListData,refetch} = usePostListQuery(spaceId, page, {
        userId,
        tagId,
        keyword,
        dataTime,
    });

    useEffect(()=>{
        refetch();
    },[page,keyword,userId,tagId,dataTime])

    const {postList, total, page: curPage, itemLength} = myPostListData!;

    const setUserState = (newUserState: selectType[]) => {
        setState((prev) => ({...prev, user: newUserState}));
    };

    const setTagState = (newTagState: selectType[]) => {
        setState((prev) => ({...prev, tag: newTagState}));
    };

    const movePage = (page: number) => {
        setSearchParams(new URLSearchParams(String(page)))
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
                />
                <SelectBox
                    placeHolder={'태그명을 검색해주세요.'}
                    setState={setTagState}
                    menuWidth={192}
                    menuHeight={49 * Math.floor(tagList.length / 2)}
                    BoxWidth={168}
                    labelName={'태그'}
                    ListItem={tagList}
                />
                <Calender isMain={true} height={50} borderRadius={5}/>
                <MainSearchBox
                    state={state}
                    placeholder={'제목'}
                />
            </S.FilterGroup>
            {!selectState ? (
                postList.length === 0 ? (
                    <S.UndefinedList>
                        <S.UndefinedDefaultImage imgUrl={DefaultImage}/>
                        <S.UndefinedPostText>
                            첫번째 게시글을 등록해 주세요
                        </S.UndefinedPostText>
                        <S.UndefinedShareText>게시글 공유하기</S.UndefinedShareText>
                    </S.UndefinedList>
                ) : (
                    <>
                        <S.PostList>
                            {postList.map((item) => {
                                const {postId, mainImgUrl} = item;
                                return (
                                    <FlipCard
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
