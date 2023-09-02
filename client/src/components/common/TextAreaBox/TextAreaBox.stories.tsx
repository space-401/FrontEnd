import { StoryFn } from '@storybook/react';
import TextAreaBox from './index';

export default {
  title: 'common/TextAreaBox',
  component: TextAreaBox,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn, context: any) => {
      const { args } = context;
      return (
        <TextAreaBox {...args}>
          <Story />
        </TextAreaBox>
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
