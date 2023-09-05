import { SpacePostType } from '@type/space.type';
import S from '@pages/MainPage/components/MainBody/style';
import DefaultImage from '@assets/svg/KKIRI.svg';
import FlipCard from '@components/FlipCard/FlipCard';
import SpaceInfoBack from '@components/FlipCard/SpaceInfoBack/SpaceInfoBack';

export type MainBodyPropType = {
  postList: SpacePostType[];
  page: number;
  total: number;
};

const MainBody = (props: MainBodyPropType) => {
  const { postList } = props;
  return (
    <S.Wrapper>
      <S.FilterGroup>필터버튼</S.FilterGroup>
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
              size={437}
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
