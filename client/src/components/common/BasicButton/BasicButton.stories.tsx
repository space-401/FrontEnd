import { StoryFn } from '@storybook/react';
import BasicButton from '../BasicButton';

export default {
  title: 'common/BasicButton',
  component: BasicButton,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn, context: any) => {
      const { args } = context;
      return (
        <BasicButton {...args}>
          <Story />
        </BasicButton>
      );
    },
  ],
  argTypes: {
    children: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    padding: { control: 'number' },
    fontSize: { control: 'number' },
  },
};

export const Controller = {
  args: {
    padding: 16,
    children: '버튼',
  },
};
