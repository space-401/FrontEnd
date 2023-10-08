import { ReactNode, useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

const EventMarkerContainer = ({
  position,
  content,
  onClick,
}: {
  position: { lat: string; lng: string };
  content: ReactNode;
  onClick: () => void;
}) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  const { lng, lat } = position;
  return (
    <MapMarker
      position={{ lng: Number(lng), lat: Number(lat) }} // 마커를 표시할 위치
      onClick={(marker) => {
        map.panTo(marker.getPosition());
        onClick();
      }}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && content}
    </MapMarker>
  );
};

export default EventMarkerContainer;
