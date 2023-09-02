import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import KkiriProvider from '../src/utils/KkiriProvider';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <KkiriProvider>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </KkiriProvider>
  ),
];

export default preview;
