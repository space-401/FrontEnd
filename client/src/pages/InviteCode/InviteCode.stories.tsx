import { StoryFn } from '@storybook/react';
import InviteCode from './InviteCode';

export default {
  title: 'page/InviteCode',
  component: InviteCode,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => {
      return <Story />;
    },
  ],
  argTypes: {},
};
