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
    --color: #000000ff;
    --color-primary: #3a3a3aff;
    --color-accent: #922d2dff;
  }

   body {
    margin: 0;
    font-family: system-ui;
  }
`;