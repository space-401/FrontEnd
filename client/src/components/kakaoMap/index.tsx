import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { MapTypeProps } from '@type/map.type';
import map_mock from '@mocks/data/map/map.mock';

const KaKaoMap = (prop: MapTypeProps) => {
  const { data = map_mock } = prop;
  return (
    <Map
      style={{
        width: '100%',
        height: '350px',
      }}
      level={3}
      center={data[0].coordinate}
    >
      {data.map((place) => (
        <MapMarker key={place.idx} position={place.coordinate}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      ))}
    </Map>
  );
};

export default KaKaoMap;
