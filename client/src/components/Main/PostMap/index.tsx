import S from '@components/Main/PostMap/style';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import EventMarkerContainer from '@components/Main/PostMap/components/EventMarkerContainer';
import LeftSection from '@components/Main/PostMap/components/LeftSection';
import MarkerContents from '@components/Main/PostMap/components/MarkerContents';
import { getFormatDate } from '@utils/formatter';
import { useState } from 'react';
import { useDetailModalStore } from '@store/modal';
import { DEFAULT_POSITION } from '@constants/policy';
import { SpacePostListProps } from '@type/main.type';

const Index = (props: SpacePostListProps) => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_KEY,
  });
  const { postList, page, total, itemLength } = props;
  const [isSelect, setIsSelect] = useState<number>(postList[0].postId);

  const [state, setState] = useState({
    center: postList[0].position || DEFAULT_POSITION,
    isPanto: false,
  });
  const modalOpen = useDetailModalStore((state) => state.ModalOpen);

  const onClick = (number: number) => {
    console.log(number, '아이디의 정보를 가져옵니다.');
    setTimeout(() => modalOpen(), 1000);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <LeftSection
          setState={setState}
          setIsSelect={setIsSelect}
          isSelect={isSelect}
          postList={postList}
          page={page}
          total={total}
          itemLength={itemLength}
        />
        <Map
          center={state.center}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={3}
        >
          {postList.map((value) => {
            const { placeTitle, postTitle, postId, postUpdatedAt, usersList } =
              value;
            return (
              <EventMarkerContainer
                onClick={() => onClick(postId)}
                key={`EventMarkerContainer-${value.position.lat}-${value.position.lng}`}
                position={value.position}
                setIsSelect={() => setIsSelect(postId)}
                content={
                  <MarkerContents
                    postUpdatedAt={getFormatDate(postUpdatedAt)}
                    placeTitle={placeTitle}
                    postTitle={postTitle}
                    usersList={usersList}
                  />
                }
              />
            );
          })}
        </Map>
      </S.Container>
    </S.Wrapper>
  );
};

export default Index;
