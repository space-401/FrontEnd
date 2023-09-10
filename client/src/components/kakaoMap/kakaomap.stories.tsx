import styled from 'styled-components';

import { StoryFn } from '@storybook/react';
import kakaoMap from '@components/kakaoMap/index';
import map_mock from '@mocks/data/map/map.mock';
import { MapTypeProps } from '@type/map.type';

export default {
  title: 'post/map',
  component: kakaoMap,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
};

const Container = styled.div`
  width: 300px;
  height: 400px;
`;

export const 지도: { args: MapTypeProps } = {
  args: {
    data: map_mock,
  },
};
