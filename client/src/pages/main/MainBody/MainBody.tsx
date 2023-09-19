import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/Main/FlipCard/FlipCard';
import SpaceInfoBack from '@components/Main/FlipCard/SpaceInfoBack/SpaceInfoBack';
import S from './style';
import { useEffect, useState } from 'react';
import { MainBodyPropType, selectType } from '@type/main.type';
import SelectBox from '@components/Main/SelectBox';
import MainSearchBox from '@components/Main/SearchBox';
import KaKaoMap from '@components/Main/PostMap';
import { useDetailModalStore } from '@store/modal';
import { useSearchParams } from 'react-router-dom';

const MainBody = (props: MainBodyPropType) => {
  const [state, setState] = useState<{
    user: selectType[];
    tag: selectType[];
    search: string;
  }>({
    user: [],
    tag: [],
    search: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const modalOpen = useDetailModalStore((state) => state.ModalOpen);
  const { postList, userList, tagList, selectState } = props;

  const setUserState = (newUserState: selectType[]) => {
    setState((prev) => ({ ...prev, user: newUserState }));
  };

  const setTagState = (newTagState: selectType[]) => {
    setState((prev) => ({ ...prev, tag: newTagState }));
  };

  const setSearchState = (newSearch: string) => {
    setState((prev) => ({ ...prev, search: newSearch }));
  };

  useEffect(() => {
    const userKeywords = state.user.map((user) => user.id);
    const tagKeywords = state.tag.map((tag) => tag.id);

    const users = searchParams.get('users');
    const tags = searchParams.get('tags');
    const search = searchParams.get('search');
    const page = searchParams.get('page');

    const params = new URLSearchParams();
    params.set('users', userKeywords.join(','));
    params.set('tags', tagKeywords.join(','));
    params.set('search', state.search);

    setSearchParams(params.toString());

    console.log(users, tags, search, page, '로 데이터를 조회합니다.');
  }, [state]);

  return (
    <S.Wrapper>
      <S.FilterGroup>
        <SelectBox
          setState={setUserState}
          menuWidth={316}
          menuHeight={20 + 32 * Math.ceil(userList.length / 2)}
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
        <MainSearchBox placeholder={'제목'} setState={setSearchState} />
      </S.FilterGroup>
      {!selectState ? (
        postList.length === 0 ? (
          <S.UndefinedList>
            <S.UndefinedDefaultImage img_url={DefaultImage} />
            <S.UndefinedPostText>
              첫번째 게시글을 등록해 주세요
            </S.UndefinedPostText>
            <S.UndefinedShareText>게시글 공유하기</S.UndefinedShareText>
          </S.UndefinedList>
        ) : (
          <S.PostList>
            {postList.map((item) => (
              <FlipCard
                onClick={modalOpen}
                key={item.post_id}
                img_url={item.main_img_url}
                hoverCard={
                  <SpaceInfoBack
                    position={item.position}
                    users={item.users}
                    post_id={item.post_id}
                    post_title={item.place_title}
                    main_img_url={item.main_img_url}
                    place_title={item.place_title}
                    post_updated_at={item.post_updated_at}
                    post_created_at={item.post_created_at}
                    place_tag={item.place_tag}
                    key={item.post_id}
                  />
                }
              />
            ))}
          </S.PostList>
        )
      ) : (
        <KaKaoMap postList={postList} />
      )}
    </S.Wrapper>
  );
};

export default MainBody;
