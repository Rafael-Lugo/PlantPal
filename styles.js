import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

   :root{
    --background: #fff;
    --background-foreground: #949494ff;
  }

   body {
    margin: 0;
    font-family: system-ui;
  }
`;