import { Meta } from '@storybook/react';
import { StyledButton } from '.';
import { StyledButtonProps } from '.';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { linkTo } from '@storybook/addon-links';

// 스토리북 옵션 설정
const meta: Meta = {
  title: 'StyledButton',
  component: StyledButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success'],
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

// 컴포넌트(스토리)를 구현할 스토리 함수임. TemplateTest에서 args를 받아서 세부 스토리
// 인스턴스를 만들때 사용됨.
const Template = (args: StyledButtonProps) => <StyledButton {...args} />;

export const TemplateTest = Template.bind({});

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
};

// 스토리마다 컴포넌트 만들기
export const Primary = (props: StyledButtonProps) => (
  <StyledButton
    {...props}
    variant="primary"
    onClick={linkTo('StyledButton', 'success')}
  >
    primary
  </StyledButton>
);

export const Success = (props: StyledButtonProps) => (
  <StyledButton
    {...props}
    variant="success"
    onClick={linkTo('StyledButton', 'primary')}
  >
    success
  </StyledButton>
);

// increment라는 이름으로 action을 출력하기 위한 함수를 만든다.
const incrementAction = action('increment');

export const Transparent = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count);
    setCount((prev) => prev + 1);
  };
  return (
    <StyledButton {...props} variant="transparent" onClick={onClick}>
      {count}
    </StyledButton>
  );
};
