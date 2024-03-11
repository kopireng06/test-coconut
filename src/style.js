import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  * {
    box-sizing:border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  div {
    width: 100%;
  }
`;

export default GlobalStyle;
