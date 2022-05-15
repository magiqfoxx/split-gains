import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryLight: string;
    secondary: string;
    tertiary: string;
    dark: string;
    grey: string;
    error: string,

    n: number;
  }
}