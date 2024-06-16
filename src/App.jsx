import { ThemeProvider } from 'styled-components';
import './App.css';
import Main from './pages/Main';
import { theme } from './Theme';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
