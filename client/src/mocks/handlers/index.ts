import { postHandlers } from '@mocks/handlers/post';
import { DefaultBodyType, MockedRequest, RestHandler } from 'msw';

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  ...postHandlers,
];
