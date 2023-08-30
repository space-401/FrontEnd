import { Meta, StoryFn } from '@storybook/react';
import { StyledButton } from '.';
import { StyledButtonProps } from '.';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { linkTo } from '@storybook/addon-links';

const meta = {
  title: 'Example/StyledButton',
  component: StyledButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //arg의 하나인 variant를 raido타입으로 바꿀 수 있게 함
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success'],
    },
    //arg의 하나인 children를 text로 바꿀 수 있게 함.
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof StyledButton>;

export default meta;

//컴포넌트(스토리)를 구현할 스토리 함수임. TemplateTest에서 args를 받아서 세부 스토리
//인스턴스를 만들때 사용됨.
const Template: StoryFn<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

// //bind를 호출해 스토리를 작성
// //Template 구조를 유지하면서 새로운 스토리 인스턴스를 만들어냄.
// //{}는 초기 props 값을 설정하기 위한 객체임
const TemplateTest = Template.bind({});

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
};

//스토리마다 컴포넌트 만들기
export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton
      {...props}
      variant="primary"
      //클릭시 StyledButton/success로 이동한다.
      onClick={linkTo('StyledButton', 'success')}
    >
      primary
    </StyledButton>
  );
};

export const Succcess = (props: StyledButtonProps) => {
  return (
    <StyledButton
      {...props}
      variant="success"
      //클릭시 StyledButton/primary 이동한다.
      onClick={linkTo('StyledButton', 'primary')}
    >
      success
    </StyledButton>
  );
};

//imcrement라는 이름으로 action을 출력하기 위한 함수를 만든다.
const incrementAction = action('increment');

export const Transparent = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((prev) => prev + 1);
  };
  return (
    <StyledButton {...props} variant="transparant" onClick={onClick}>
      {count}
    </StyledButton>
  );
};
