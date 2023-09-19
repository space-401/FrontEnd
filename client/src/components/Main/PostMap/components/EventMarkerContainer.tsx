import { ReactNode, useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';

const EventMarkerContainer = ({
  position,
  content,
  setIsSelect,
  onClick,
}: {
  position: { lat: number; lng: number };
  content: ReactNode;
  setIsSelect: () => void;
  onClick: () => void;
}) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      onClick={(marker) => {
        map.panTo(marker.getPosition());
        setIsSelect();
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
