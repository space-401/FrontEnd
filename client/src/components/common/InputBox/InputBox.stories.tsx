import { StoryFn } from '@storybook/react';
import InputBox from './index';

export default {
  title: 'common/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn, context: any) => {
      const { args } = context;
      return (
        <InputBox {...args}>
          <Story />
        </InputBox>
      );
    },
  ],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    placeholder: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

export const Controller = {
  args: {
    placeholder: '스페이스 명을 입력하세요',
  },
};
