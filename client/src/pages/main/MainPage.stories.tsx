import { StoryFn } from '@storybook/react';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';
import MainPage, { MainPageType } from '@pages/main/index';

export default {
  title: 'page/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => {
      return <Story />;
    },
  ],
  argTypes: {},
};

export const 메인페이지: { args: MainPageType } = {
  args: {
    ...MainPageMock,
  },
};
