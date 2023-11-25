import { Map } from 'react-kakao-maps-sdk';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { EventMarkerContainer } from './EventMarkerContainer';
import { MarkerType } from '@/types';

type MapBoxProps = {
  keyword: string;
  setSelectMap: Dispatch<SetStateAction<MarkerType>>;
  setData: Dispatch<SetStateAction<kakao.maps.services.PlacesSearchResult>>;
  setPagination: Dispatch<SetStateAction<kakao.maps.Pagination | undefined>>;
  center: {
    center: { lat: number; lng: number };
    isPanto: boolean;
  };
};

export const MapBox = (props: MapBoxProps) => {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [map, setMap] = useState<kakao.maps.Map>();
  const { setSelectMap, setData, setPagination, keyword, center } = props;
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const markers: MarkerType[] = [];
        setData(data);
        setPagination(_pagination);

        for (let i = 0; i < data.length; i++) {
          const marker: MarkerType = {
            markerId: data[i].id,
            position: { lat: data[i].y, lng: data[i].x },
            content: data[i].address_name,
          };
          markers.push(marker);
          bounds.extend(
            new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x))
          );
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map, keyword, setData, setPagination]);

  return (
    <Map
      isPanto={center.isPanto}
      center={center.center}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <EventMarkerContainer
          onClick={() => {
            setSelectMap(marker);
          }}
          content={marker.content}
          key={marker.markerId}
          position={marker.position}
        />
      ))}
    </Map>
  );
};
