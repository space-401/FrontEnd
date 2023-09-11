import { MapComponentProps } from '@type/main.type';
import S from '@components/PostMap/style';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import EventMarkerContainer from '@components/PostMap/components/EventMarkerContainer';
import LeftSection from '@components/PostMap/components/LeftSection';

const MapComponent = (props: MapComponentProps) => {
  const [_1, _2] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_KEY,
  });
  console.log(props);

  const data = [
    {
      content: <div style={{ color: '#000' }}>카카오</div>,
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      content: <div style={{ color: '#000' }}>생태연못</div>,
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      content: <div style={{ color: '#000' }}>텃밭</div>,
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      content: <div style={{ color: '#000' }}>근린공원</div>,
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];

  console.log(_1);
  console.log(_2);

  return (
    <S.Wrapper>
      {/* 여기에 Kakao 지도를 표시할 요소를 추가합니다 */}
      <S.Container>
        <LeftSection></LeftSection>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 33.450701,
            lng: 126.570667,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '100%',
          }}
          level={3} // 지도의 확대 레벨
        >
          {data.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              content={value.content}
            />
          ))}
        </Map>
      </S.Container>
    </S.Wrapper>
  );
};

export default MapComponent;
