import {MapComponentProps} from '@type/main.type';
import S from '@components/PostMap/style';
import {Map, useKakaoLoader} from 'react-kakao-maps-sdk';
import EventMarkerContainer from '@components/PostMap/components/EventMarkerContainer';
import LeftSection from '@components/PostMap/components/LeftSection';
import MarkerContents from "@components/PostMap/components/MarkerContents";
import {APP} from "@constants/APPKEY";
import MainPageMock from "@mocks/data/MainPage/mainPage.mock";
import {getFormatDate} from "@utils/formatter";

const MapComponent = (props: MapComponentProps) => {
    const [_1, _2] = useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_KEY,
    });

    const {postList = MainPageMock.postList} = props

    console.log(_1);
    console.log(_2);

    return (
        <S.Wrapper>
            {/* 여기에 Kakao 지도를 표시할 요소를 추가합니다 */}
            <S.Container>
                <LeftSection></LeftSection>
                <Map // 지도를 표시할 Container
                    center={postList[0].position || APP.DEFAULT_POSITION}
                    style={{
                        // 지도의 크기
                        width: '100%',
                        height: '100%',
                    }}
                    level={3} // 지도의 확대 레벨

                >
                    {postList.map((value) => (
                        <EventMarkerContainer
                            key={`EventMarkerContainer-${value.position.lat}-${value.position.lng}`}
                            position={value.position}
                            content={<MarkerContents create_at={getFormatDate(value.place_create_at)}
                                                     post_place={value.place_title} post_title={value.post_title}
                                                     users={value.users}/>}
                        />
                    ))}
                </Map>
            </S.Container>
        </S.Wrapper>
    );
};

export default MapComponent;
