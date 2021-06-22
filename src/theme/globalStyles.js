import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }

  h3, a, .content-schedule__left {
    color: ${({ theme }) => theme.colors.text};
  }
  `
