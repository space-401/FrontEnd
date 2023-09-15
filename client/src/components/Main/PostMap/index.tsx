import { MapComponentProps } from '@type/main.type';
import S from '@components/Main/PostMap/style';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import EventMarkerContainer from '@components/Main/PostMap/components/EventMarkerContainer';
import LeftSection from '@components/Main/PostMap/components/LeftSection';
import MarkerContents from '@components/Main/PostMap/components/MarkerContents';
import { APP } from '@constants/APPKEY';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';
import { getFormatDate } from '@utils/formatter';
import { useState } from 'react';

const Index = (props: MapComponentProps) => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_KEY,
  });
  const { postList = MainPageMock.postList } = props;
  const [isSelect, setIsSelect] = useState<number>(postList[0].post_id);

  const [state, setState] = useState({
    center: postList[0].position || APP.DEFAULT_POSITION,
    isPanto: false,
  });
  return (
    <S.Wrapper>
      <S.Container>
        <LeftSection
          setState={setState}
          setIsSelect={setIsSelect}
          isSelect={isSelect}
          postList={postList}
        />
        <Map
          center={state.center}
          style={{
            // 지도의 크기
            width: '100%',
            height: '100%',
          }}
          level={3}
        >
          {postList.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.position.lat}-${value.position.lng}`}
              position={value.position}
              setIsSelect={() => setIsSelect(value.post_id)}
              content={
                <MarkerContents
                  create_at={getFormatDate(value.post_updated_at)}
                  post_place={value.place_title}
                  post_title={value.post_title}
                  users={value.users}
                />
              }
            />
          ))}
        </Map>
      </S.Container>
    </S.Wrapper>
  );
};

export default Index;
