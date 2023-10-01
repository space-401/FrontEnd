import {useQuery} from '@tanstack/react-query';
import {getSpaceDetail} from '@apis/space/getSpaceDetail';
import type {SpaceInfo} from '@type/space.type';
import {AxiosError} from 'axios';

export const useSpaceInfoQuery = (spaceId: string) => {
    const {data: spaceInfo} = useQuery<SpaceInfo, AxiosError>(['spaceInfo', spaceId], () =>
        getSpaceDetail(spaceId)
    );

    return {spaceInfo};
};
