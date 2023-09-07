import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/FlipCard/FlipCard';
import SpaceInfoBack from '@components/FlipCard/SpaceInfoBack/SpaceInfoBack';
import S from './style';
import { useState } from 'react';
import { MainBodyPropType, selectType } from '@type/main.type';
import SelectBox from '@components/MainSelectBox';

const MainBody = (props: MainBodyPropType) => {
  const { postList, userList, tagList } = props;
  const [_1, setUserState] = useState<selectType[]>([]);
  const [_2, setTagState] = useState<selectType[]>([]);

  console.log(_1, _2);
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
      </S.FilterGroup>
      {postList.length === 0 ? (
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
              key={item.post_id}
              img_url={item.main_img_url}
              hoverCard={
                <SpaceInfoBack
                  users={item.users}
                  post_id={item.post_id}
                  post_title={item.place_title}
                  main_img_url={item.main_img_url}
                  place_title={item.place_title}
                  place_create_at={item.place_create_at}
                  place_tag={item.place_tag}
                  key={item.post_id}
                />
              }
            />
          ))}
        </S.PostList>
      )}
    </S.Wrapper>
  );
};

export default MainBody;
