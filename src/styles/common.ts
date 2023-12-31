import { css } from 'styled-components';

// common
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumCenter = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const omitText = css`
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const modalBackGround = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
