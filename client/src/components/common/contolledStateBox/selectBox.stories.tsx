import styled from 'styled-components';

import { StoryFn } from '@storybook/react';
import SelectBox from '@components/common/contolledStateBox/selectBox';

export default {
  title: 'common/selectBox',
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
    state: { control: 'text' },
  },
};

const Container = styled.div`
  width: 150px;
`;

export const ListSortControl = {
  args: {
    labelName: '순차정렬',
    state: '',
    minWidth: 120,
    MenuItems: [
      {
        id: 1,
        title: '오름차순',
        value: '오름차순',
      },
      {
        id: 2,
        title: '내림차순',
        value: '내림차순',
      },
    ],
  },
};

export const ListLengthControl = {
  args: {
    labelName: '목록갯수설정',
    state: 20,
    minWidth: 150,
    MenuItems: [
      {
        id: 1,
        title: '10',
        value: '10',
      },
      {
        id: 2,
        title: '20',
        value: '20',
      },
      {
        id: 3,
        title: '30',
        value: '30',
      },
    ],
  },
};
