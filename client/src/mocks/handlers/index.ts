import { postHandlers } from '@mocks/handlers/post';
import { DefaultBodyType, MockedRequest, RestHandler } from 'msw';
import { spaceHandlers } from '@mocks/handlers/space';
import { userHandlers } from '@mocks/handlers/user';

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  ...postHandlers,
  ...spaceHandlers,
  ...userHandlers,
];
