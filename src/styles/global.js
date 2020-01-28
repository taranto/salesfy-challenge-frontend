import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #8A05BE;
  -webkit-font-smoothing: antialiased;
}

body,
  input,
  button {
  font: 14px Roboto, sans - serif;
}

#root {
  display: flex;
  justify-content: center;
  max-width: 1020px;
  margin: 0 auto;
  padding: 0;
}`;
