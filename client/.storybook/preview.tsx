import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import KkiriProvider from '../src/utils/KkiriProvider';

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
  (Story) => {
   return <KkiriProvider>
      <BrowserRouter>
        <Story/>
      </BrowserRouter>
    </KkiriProvider>
  },
];

export default preview;
