import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/ui/styles/theme/theme';
import GlobalStyle from '../src/shared/ui/styles/GlobalStyle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, context) => {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story {...context} />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
