import type { RestHandler } from 'msw';
import { postHandlers } from '@mocks/handlers/post';
import { spaceHandlers } from '@mocks/handlers/space';
import { userHandlers } from '@mocks/handlers/user';
import { commentHandlers } from '@mocks/handlers/comment';

export const handlers: RestHandler[] = [
  ...postHandlers,
  ...spaceHandlers,
  ...userHandlers,
  ...commentHandlers,
];
