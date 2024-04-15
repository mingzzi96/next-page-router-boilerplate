import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/shared/ui/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/ui/styles/theme/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: theme,
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

export default preview;
