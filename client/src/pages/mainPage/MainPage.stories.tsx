import { StoryFn } from '@storybook/react';
import MainPage, { MainPageType } from '@pages/mainPage/index';
import MainPageMock from '@mocks/data/MainPage/mainPage.mock';

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
