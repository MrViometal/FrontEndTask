import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/themes';
import Layout from './components/Layout';
import { currentTheme } from './constants/localStorage';
import MainContentContainer from './components/MainContentContainer';

const THEMES = {
  light: lightTheme,
  dark: darkTheme
};

function App() {
  const [theme, updateTheme] = useState(currentTheme);
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <Layout theme={theme} updateTheme={updateTheme}>
        <MainContentContainer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
