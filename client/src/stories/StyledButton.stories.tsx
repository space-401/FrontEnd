import { Meta, StoryFn } from "@storybook/react";
import { StyledButton } from ".";
import { StyledButtonProps } from ".";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { linkTo } from "@storybook/addon-links";

//스토리북 옵션 설정
export default {
  title: "StyledButton",
  component: StyledButton,
  parameters: {
    //스토리 컴포넌트를 가운데로 보이게 함.
    layout: "centered",
  },
  //props에 전달하는 variant를 스토리북으로부터 변경할 수 있도록 추가
  argTypes: {
    //arg의 하나인 variant를 raido타입으로 바꿀 수 있게 함
    variant: {
      control: { type: "radio" },
      options: ["primary", "success"],
    },
    //arg의 하나인 children를 text로 바꿀 수 있게 함.
    children: {
      control: { type: "text" },
    },
  },
} as Meta<typeof StyledButton>;

//컴포넌트(스토리)를 구현할 스토리 함수임. TemplateTest에서 args를 받아서 세부 스토리
//인스턴스를 만들때 사용됨.
const Template: StoryFn<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

//bind를 호출해 스토리를 작성
//Template 구조를 유지하면서 새로운 스토리 인스턴스를 만들어냄.
//{}는 초기 props 값을 설정하기 위한 객체임
export const TmeplateTest = Template.bind({});

TmeplateTest.args = {
  variant: "primary",
  children: "Primary",
};

//스토리마다 컴포넌트 만들기
export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton
      {...props}
      variant="primary"
      //클릭시 StyledButton/success로 이동한다.
      onClick={linkTo("StyledButton", "success")}
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
      onClick={linkTo("StyledButton", "primary")}
    >
      success
    </StyledButton>
  );
};

//imcrement라는 이름으로 action을 출력하기 위한 함수를 만든다.
const incrementAction = action("increment");

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
