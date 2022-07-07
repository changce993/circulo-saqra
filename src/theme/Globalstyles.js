import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: ${props => props.theme.fontFamily.primary};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${props => props.theme.colors.black};
    overflow-x: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  img {
    /* pointer-events: none; */
  }
`;