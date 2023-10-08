//카카오맵 지도 위치 타입
export type MarkerType = {
  markerId: string;
  position: {
    lat: string;
    lng: string;
  };
  content: string;
};

//카카오맵 지도 위치 타입
export type MapType = Omit<MarkerType, 'markerId'>;
