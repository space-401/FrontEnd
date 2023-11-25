import type { RestHandler } from 'msw';
import {
  commentHandlers,
  postHandlers,
  spaceHandlers,
  userHandlers,
} from '@/mocks/handlers';

export const handlers: RestHandler[] = [
  ...postHandlers,
  ...spaceHandlers,
  ...userHandlers,
  ...commentHandlers,
];

export * from './user';
export * from './post';
export * from './comment';
export * from './space';
