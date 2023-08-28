import styled, { css } from "styled-components";

export const variants = {
  primary: {
    color: "#ffffff",
    backgroundColor: "#1D3461",
    border: "none",
  },
  success: {
    color: "ffffff",
    backgroundColor: "#5AB 203",
    border: "none",
  },
  transparant: {
    color: "111111",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
} as const;

export type StyledButtonProps = {
  variant: keyof typeof variants;
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    //위의 style 객체중 props로 전달한 variant 객체를 style 변수로 설정함.
    const style = variants[variant];
    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius : 12px;
  font-size: 14px;
  height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  & focus {
    outline: none;
  }
`;
