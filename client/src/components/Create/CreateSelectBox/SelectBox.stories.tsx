import styled from 'styled-components';

import { StoryFn } from '@storybook/react';
import { users_mock } from '@mocks/data/user/users.mock';
import { selectType } from '@type/main.type';
import CSelectBox from '@/components/Main/SelectBox';
import { tags_mock } from '@mocks/data/tag/tags.mock';

export default {
  title: 'post/CSelectBox',
  component: CSelectBox,
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
  width: 300px;
  height: 400px;
`;

const setState = (state: selectType[]) => {
  console.log(state);
};

export const 사용자 = {
  args: {
    labelName: '함께한 친구들을 추가해 주세요',
    ListItem: users_mock,
    menuWidth: 628,
    menuHeight: 280,
    BoxWidth: 628,
    setState: setState,
  },
};

export const 태그 = {
  args: {
    labelName: '태그',
    ListItem: tags_mock,
    placeHolder: '태그를 지정해주세요.',
    setState: setState,
    menuWidth: 628,
    menuHeight: 188,
    BoxWidth: 628,
  },
};
