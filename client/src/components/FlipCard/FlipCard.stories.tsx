import { StoryFn } from '@storybook/react';
import styled from 'styled-components';
import FlipCard, { FlipType } from '@components/FlipCard/FlipCard';
import {
  spaceInfoMock,
  spacePostMock,
} from '@mocks/data/FlipCard/spaceInfo.mock';
import SpaceSelectBack from '@components/FlipCard/SpaceSelectBack/SpaceSelectBack';
import SpaceInfoBack from '@components/FlipCard/SpaceInfoBack/SpaceInfoBack';

export default {
  title: 'common/FlipCard',
  component: FlipCard,
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
  argTypes: {
    size: { control: 'number' },
  },
};

const Container = styled.div`
  width: 450px;
  height: 450px;
`;

export const SpaceSelectFlip: { args: FlipType } = {
  args: {
    img_url:
      'https://s3-alpha-sig.figma.com/img/5337/9618/c6819ebc891905be191c8fc51d7fba08?Expires=1694390400&Signature=CLYrMEEb-bGGDh7aiZEjWO6Ro0Hg9BJXY~WYxaqccDwMZKH5-BEf2te8ilYZmJPKvZGORzoDlYYWTmnS3wHa1NWgQj5KZl92LFPew2BQuii1B1wbfyWs8iOzHYONgw8DD1A1vj3YA~onF7y4U6AtM7ZT~-B-Ypnv1zwyEJZBM-xpNaOnLY2Ct5VtCjwie3GyvHt-bbhaA7c9KbKz93ejOPKPf1rreY-lYMnvTrcR1riYg5cdrORNSq6PZ1tK0blI3jCjZaM2s8rI74FYxaHmW6tBoLAtWyDMtBnVlgMjvpSNLYkzZQY62mzEIWauTYuIhoJHuTyYm8TC9LBuLQKoCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    hoverCard: <SpaceSelectBack {...spaceInfoMock} />,
  },
};

export const SpaceInfoFlip: { args: FlipType } = {
  args: {
    img_url: spacePostMock.main_img_url,
    hoverCard: <SpaceInfoBack {...spacePostMock} />,
  },
};
