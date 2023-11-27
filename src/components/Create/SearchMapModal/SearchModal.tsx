import { DEFAULT_POSITION } from '@/constants';
import { MapType, MarkerType } from '@/types';
import { Box, Modal } from '@mui/material';
import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { ReactComponent as DeleteIcon } from '@/assets/svg/deleteIcon.svg';
import { EventMarkerContainer } from '@/components/Create';
import { MarkerContents } from '@/components/Main';
import { Pagination } from '@/components/common';
import { S } from './style';

type searchModalType = {
  isOpen: boolean;
  onClose: () => void;
  mapInfo: MapType;
  setMapInfo: Dispatch<SetStateAction<MapType>>;
};

export const SearchModal = React.forwardRef(
  (prop: searchModalType, forwardRef: React.ForwardedRef<any>) => {
    const { isOpen, mapInfo, onClose, setMapInfo } = prop;
    useKakaoLoader({
      appkey: import.meta.env.VITE_KAKAO_KEY,
      libraries: ['services'],
    });

    const item_length = 10;

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
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              zIndex: 1000,
            }}
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
              </S.SearchList>
              {pagination && (
                <S.PaginationSticky>
                  <S.StickyInner>
                    <Pagination
                      total={pagination.totalCount}
                      page={pagination.current}
                      itemLength={item_length}
                      movePage={pagination.gotoPage}
                    />
                  </S.StickyInner>
                </S.PaginationSticky>
              )}
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
                {markers.map((marker, i) => (
                  <EventMarkerContainer
                    onClick={() => {
                      if (marker.markerId !== center.selectId) {
                        setCenter({
                          selectId: marker.markerId,
                          center: {
                            lat: Number(marker.position.lat),
                            lng: Number(marker.position.lng),
                          },
                          isPanto: true,
                        });
                      }
                    }}
                    content={
                      <MarkerContents
                        postTitle={data[i].place_name}
                        placeTitle={marker.content}
                      />
                    }
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
