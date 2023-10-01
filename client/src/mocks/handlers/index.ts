import type { RestHandler } from 'msw';
import { postHandlers } from '@mocks/handlers/post';
import { spaceHandlers } from '@mocks/handlers/space';
import { userHandlers } from '@mocks/handlers/user';

export const handlers: RestHandler[] = [
  ...postHandlers,
  ...spaceHandlers,
  ...userHandlers,
];
