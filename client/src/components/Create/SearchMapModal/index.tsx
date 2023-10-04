import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box, Modal } from '@mui/material';
import { S } from '@components/Create/SearchMapModal/style';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import EventMarkerContainer from '@components/Create/SearchMapModal/component/EventMarkerContainer';
import Pagination from '@components/Create/SearchMapModal/component/Pagination';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import { DEFAULT_POSITION } from '@constants/policy';

export type MarkerType = {
  markerId: string;
  position: {
    lat: string;
    lng: string;
  };
  content: string;
};

type searchModalType = {
  isOpen: boolean;
  onClose: () => void;
  mapInfo: MarkerType;
  setMapInfo: Dispatch<SetStateAction<MarkerType>>;
};

const SearchModal = React.forwardRef(
  (prop: searchModalType, forwardRef: React.ForwardedRef<any>) => {
    const { isOpen, mapInfo, setMapInfo, onClose } = prop;
    useKakaoLoader({
      appkey: import.meta.env.VITE_KAKAO_KEY,
      libraries: ['services'],
    });

    const item_length = 4;

    const [keyword, setKeyword] = useState(mapInfo.content);
    const [data, setData] = useState<kakao.maps.services.PlacesSearchResult>(
      []
    );
    const [pagination, setPagination] = useState<
      kakao.maps.Pagination | undefined
    >(undefined);
    const [center, setCenter] = useState<{
      selectId: string | undefined;
      center: { lat: number; lng: number };
      isPanto: boolean;
    }>({ selectId: undefined, center: DEFAULT_POSITION, isPanto: false });
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: KeyboardEvent<HTMLFormElement>) => {
      e.preventDefault();
      setKeyword(inputRef.current!.value);
    };

    const [markers, setMarkers] = useState<MarkerType[]>([]);
    const [map, setMap] = useState<kakao.maps.Map>();

    useEffect(() => {
      if (!map) return;
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(
        keyword,
        (data, status, _pagination) => {
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

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }
        },
        { size: item_length }
      );
    }, [map, keyword]);

    const selectAction = (data: kakao.maps.services.PlacesSearchResultItem) => {
      setMapInfo({
        content: data.place_name,
        position: { lat: data.x, lng: data.y },
        markerId: '',
      });
      onClose();
    };

    return (
      <Modal
        open={isOpen}
        onClose={onClose}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0,0,0,0)',
            },
          },
        }}
      >
        <Box tabIndex={-1} ref={forwardRef}>
          <DeleteIcon
            style={{ position: 'absolute', top: '40px', right: '40px' }}
            onClick={onClose}
          />
          <S.Wrapper>
            <S.LeftContainer>
              <S.SearchBox onSubmit={onSubmit}>
                <S.InputBox
                  placeholder={'검색어를 입력해주세요'}
                  autoFocus={true}
                  defaultValue={keyword}
                  ref={inputRef}
                />
                <S.SubmitButton>검색</S.SubmitButton>
              </S.SearchBox>
              <S.SearchList>
                {data.map((data) => {
                  return (
                    <S.OneList
                      select={data.id === center.selectId}
                      key={data.id}
                      onClick={() => {
                        if (data.id !== center.selectId) {
                          setCenter({
                            selectId: data.id,
                            center: {
                              lat: Number(data.y),
                              lng: Number(data.x),
                            },
                            isPanto: true,
                          });
                        }
                      }}
                    >
                      <S.LeftInfo>
                        <div>{data.place_name}</div>
                        <div>{data.address_name}</div>
                        <div>{data.phone}</div>
                        <S.Category>{data.category_group_name}</S.Category>
                      </S.LeftInfo>
                      <S.RightButton>
                        <S.SelectButton onClick={() => selectAction(data)}>
                          확인
                        </S.SelectButton>
                      </S.RightButton>
                    </S.OneList>
                  );
                })}
                {pagination && (
                  <Pagination
                    total={pagination.totalCount}
                    page={pagination.current}
                    item_length={item_length}
                    setPage={pagination.gotoPage}
                  />
                )}
              </S.SearchList>
            </S.LeftContainer>
            <S.RightContainer>
              <Map
                isPanto={center.isPanto}
                center={center.center}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                level={3}
                onCreate={(map) => {
                  setMap(map);
                  if (center.isPanto) {
                    map.panTo(
                      new kakao.maps.LatLng(
                        center.center.lng,
                        center.center.lat
                      )
                    );
                    map.setLevel(3);
                    setCenter((prev) => ({ ...prev, isPanto: false }));
                  }
                }}
              >
                {markers.map((marker) => (
                  <EventMarkerContainer
                    onClick={() => {}}
                    content={marker.content}
                    key={marker.markerId}
                    position={marker.position}
                  />
                ))}
              </Map>
            </S.RightContainer>
          </S.Wrapper>
        </Box>
      </Modal>
    );
  }
);

export default SearchModal;
