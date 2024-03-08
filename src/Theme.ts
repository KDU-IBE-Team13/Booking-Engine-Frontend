import { createGlobalStyle } from 'styled-components';

const theme = {
    fontFamily: '"Lato", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  :root {
    font-family: ${(props) => props.theme.fontFamily};
    line-height: 1.5;
    font-weight: 400;
    color: #242424;
    background-color: rgba(255, 255, 255, 0.87);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export { theme, GlobalStyle };
