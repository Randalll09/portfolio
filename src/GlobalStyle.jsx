import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  overflow-x: hidden;
}
h1{
  white-space: pre-wrap;

}


`;

export default GlobalStyle;
