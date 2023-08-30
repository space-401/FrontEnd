import styled from 'styled-components';

import { StoryFn } from '@storybook/react';
import SelectBox from '@components/common/SelectBox/index';

export default {
  title: 'common/SelectBox',
  component: SelectBox,
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
    labelName: { control: 'text' },
    minWidth: { control: 'number' },
  },
};

const Container = styled.div`
  width: 150px;
`;

export const Controller = {
  args: {
    labelName: '정렬',
    MenuItems: [
      {
        id: 1,
        value: '멋있게 정렬',
      },
      {
        id: 2,
        value: '멋없게 정렬',
      },
    ],
  },
};

export const SmallSizeController = {
  args: {
    labelName: '목록갯수설정',
    size: 'small',
    minWidth: 150,
    MenuItems: [
      {
        id: 1,
        value: '10',
      },
      {
        id: 2,
        value: '20',
      },
      {
        id: 3,
        value: '30',
      },
    ],
  },
};

export const ListSortControl = {
  args: {
    labelName: '순차정렬',
    minWidth: 120,
    MenuItems: [
      {
        id: 1,
        value: '오름차순',
      },
      {
        id: 2,
        value: '내림차순',
      },
    ],
  },
};

export const ListLengthControl = {
  args: {
    labelName: '목록갯수설정',
    minWidth: 150,
    MenuItems: [
      {
        id: 1,
        value: '10',
      },
      {
        id: 2,
        value: '20',
      },
      {
        id: 3,
        value: '30',
      },
    ],
  },
};
