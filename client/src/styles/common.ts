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

export const Shadow = css`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;
