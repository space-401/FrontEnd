import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/common/FlipCard/FlipCard';
import S from '@pages/Main/MainBody/style';
import { useState } from 'react';
import { MainBodyPropType, selectType } from '@type/main.type';
import SelectBox from '@components/Main/SelectBox';
import MainSearchBox from '@components/Main/SearchBox';
import KaKaoMap from '@components/Main/PostMap';
import { useDetailModalStore } from '@store/modal';
import Pagination from '@components/common/Pagination';
import Calender from '@/components/common/Calender/Calender';

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

  const modalOpen = useDetailModalStore((state) => state.ModalOpen);
  const { postList, userList, tagList, page, total, selectState } = props;

  const setUserState = (newUserState: selectType[]) => {
    setState((prev) => ({ ...prev, user: newUserState }));
  };

  const setTagState = (newTagState: selectType[]) => {
    setState((prev) => ({ ...prev, tag: newTagState }));
  };

  const setSearchState = (newSearch: string) => {
    setState((prev) => ({ ...prev, search: newSearch }));
  };

  const movePage = (page: number) => {
    console.log(page + '조회');
  };

  const lowList = Math.ceil(userList.length / 2);

  const ItemLength = 12;

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
        <Calender isMain={true} height={50} borderRadius={5} />
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
          <>
            <S.PostList>
              {postList.map((item) => (
                <FlipCard
                  size={'big'}
                  onClick={modalOpen}
                  key={item.post_id}
                  img_url={item.main_img_url}
                  item={item}
                />
              ))}
            </S.PostList>
            <Pagination
              movePage={movePage}
              page={page}
              total={total}
              item_length={ItemLength}
            />
          </>
        )
      ) : (
        <KaKaoMap
          page={page}
          total={total}
          item_length={ItemLength}
          postList={postList}
        />
      )}
    </S.Wrapper>
  );
};

export default MainBody;
