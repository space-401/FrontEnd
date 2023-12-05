import { DEFAULT_POSITION } from '@/constants';
import { useDetailModalOpen } from '@/hooks';
import { SpacePostListProps } from '@/types';
import { getFormatDate } from '@/utils';
import { useState } from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import {
  EventMarkerContainer,
  LeftSection,
  MarkerContents,
} from '@/components/Main';
import S from './style';

export const PostMap = (props: SpacePostListProps) => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_KEY,
    libraries: ['services'],
  });
  const { postList, page, total, itemLength, movePage } = props;
  const [isSelect, setIsSelect] = useState<number>(postList[0]?.postId);

  const [state, setState] = useState({
    center: postList[0]?.position || DEFAULT_POSITION,
    isPanto: false,
  });

  const DetailModalOpen = useDetailModalOpen();

  return (
    <S.Wrapper>
      <S.Container>
        <LeftSection
          setState={setState}
          setIsSelect={setIsSelect}
          isSelect={isSelect}
          postList={postList}
          page={page}
          total={total}
          itemLength={itemLength}
          movePage={movePage}
        />
        <Map
          center={state.center}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={3}
        >
          {postList.map((value) => {
            const { placeTitle, postTitle, postId, postUpdatedAt, usersList } =
              value;
            return (
              <EventMarkerContainer
                onClick={() => DetailModalOpen(postId)}
                key={postId}
                position={value.position}
                setIsSelect={() => setIsSelect(postId)}
                content={
                  <MarkerContents
                    postUpdatedAt={getFormatDate(postUpdatedAt)}
                    placeTitle={placeTitle}
                    postTitle={postTitle}
                    usersList={usersList}
                  />
                }
              />
            );
          })}
        </Map>
      </S.Container>
    </S.Wrapper>
  );
};
