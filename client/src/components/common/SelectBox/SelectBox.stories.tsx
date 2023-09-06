import styled from 'styled-components';

import { StoryFn } from '@storybook/react';
import SelectBox from '@components/common/SelectBox/SelectBox';
import { users_mock } from '@mocks/data/user/users.mock';
import { spacePostMock } from '@mocks/data/FlipCard/spaceInfo.mock';
import { selectType } from '@type/main.type';

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
  width: 300px;
  height: 400px;
`;

const setState = (state: selectType[]) => {
  console.log(state);
};

export const 사용자 = {
  args: {
    labelName: '사용자',
    ListItem: users_mock,
    menuWidth: 320,
    menuHeight: 150,
    BoxWidth: 168,
    setState: setState,
  },
};

export const 태그 = {
  args: {
    labelName: '태그',
    ListItem: spacePostMock.place_tag,
    placeHolder: '태그명을 검색해주세요.',
    setState: setState,
    menuWidth: 200,
    menuHeight: 188,
    BoxWidth: 168,
  },
};
