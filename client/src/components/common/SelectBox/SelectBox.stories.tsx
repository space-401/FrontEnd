import styled from 'styled-components';

import { StoryFn } from '@storybook/react';
import SelectBox from '@components/common/SelectBox/SelectBox';
import {users_mock} from "@mocks/data/user/users.mock";
import {spacePostMock} from "@mocks/data/FlipCard/spaceInfo.mock";

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
  height: 400px;
`;

export const 작성자 = {
  args: {
    labelName: '작성자',
    ListItem: users_mock

  },
};

export const 태그 = {
  args: {
    labelName: '태그',
    ListItem: spacePostMock.place_tag
  },
};

