import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@shared/ui/styles/theme';

type StyldThemeProviderProps = PropsWithChildren;

const StyledThemeProvider = ({ children }: StyldThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
